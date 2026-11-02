import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../MadPropsCarnival.jsx", import.meta.url), "utf8");
const handler = source.slice(source.indexOf("async function submitInquiry"), source.indexOf("\n  return ("));
function setup(fetchImpl, valid = true) {
  const state = { events: 0, requests: 0, resets: 0, sending: false, status: "" };
  const form = { reportValidity: () => valid, reset: () => state.resets++ };
  const submit = vm.runInNewContext(`(${handler})`, {
    pendingRef: { current: false },
    FormData: class { constructor() { return [["name", "TEST"]]; } },
    fetch: (...args) => { state.requests++; return fetchImpl(...args); },
    setSending: value => state.sending = value,
    setStatus: value => state.status = value,
    recordLeadConversion: () => state.events++,
  });
  return { state, submit: () => submit({ preventDefault() {}, currentTarget: form }) };
}
const response = (ok, body) => ({ ok, json: async () => body });

test("accepted response counts once, resets form, and ends pending state", async () => {
  const { state, submit } = setup(async () => response(true, { success: true }));
  await submit();
  assert.equal(state.events, 1);
  assert.equal(state.resets, 1);
  assert.equal(state.sending, false);
});

test("rapid repeat submission sends only one request and conversion", async () => {
  let resolve;
  const pending = new Promise(r => resolve = r);
  const { state, submit } = setup(() => pending);
  const first = submit();
  await submit();
  assert.equal(state.requests, 1);
  assert.equal(state.events, 0);
  resolve(response(true, { success: true }));
  await first;
  assert.equal(state.events, 1);
});

test("failed or unconfirmed responses retain form and never count", async () => {
  for (const [ok, body] of [[false, { success: false }], [true, {}], [true, { success: false }]]) {
    const { state, submit } = setup(async () => response(ok, body));
    await submit();
    assert.equal(state.events, 0);
    assert.equal(state.resets, 0);
    assert.equal(state.sending, false);
  }
});

test("network failure never counts and allows retry", async () => {
  const { state, submit } = setup(async () => { throw new Error("offline"); });
  await submit(); await submit();
  assert.equal(state.requests, 2);
  assert.equal(state.events, 0);
  assert.equal(state.resets, 0);
});

test("invalid required fields do not send or count", async () => {
  const { state, submit } = setup(() => { throw new Error("not reached"); }, false);
  await submit();
  assert.equal(state.requests, 0);
  assert.equal(state.events, 0);
});
