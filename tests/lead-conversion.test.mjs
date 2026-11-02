import test from "node:test";
import assert from "node:assert/strict";
import { recordLeadConversion } from "../lib/lead-conversion.mjs";

test("does not run during server rendering", () => {
  delete global.window;
  assert.equal(recordLeadConversion("server"), false);
});

test("queues one event when tag is late; excludes personal data and value", () => {
  global.window = {};
  assert.equal(recordLeadConversion("submission-a"), true);
  assert.equal(recordLeadConversion("submission-a"), false);
  assert.equal(window.dataLayer.length, 1);
  assert.deepEqual(Array.from(window.dataLayer[0]), ["event", "conversion", {
    send_to: "AW-18543370947/-4dECMHUq64dEMPFlYpF",
    transaction_id: "submission-a",
  }]);
});

test("uses existing tag and counts distinct successful submissions", () => {
  const events = [];
  global.window = { gtag: (...args) => events.push(args) };
  assert.equal(recordLeadConversion("submission-b"), true);
  assert.equal(recordLeadConversion("submission-c"), true);
  assert.equal(events.length, 2);
});

test("missing ID or analytics errors never throw", () => {
  global.window = { gtag: () => { throw new Error("blocked"); } };
  assert.equal(recordLeadConversion(""), false);
  assert.equal(recordLeadConversion("submission-d"), false);
});
