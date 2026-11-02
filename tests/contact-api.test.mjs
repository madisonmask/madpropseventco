import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../app/api/contact/route.js", import.meta.url), "utf8");
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
const data = { name: "TEST", email: "test@example.com", date: "2027-01-01", budget: "$2,000–$5,000", details: "Unit test only" };
const request = (body = data) => new Request("https://example.com/api/contact", {
  method: "POST", headers: { origin: "https://example.com", "content-type": "application/json" }, body: JSON.stringify(body),
});

test("server only confirms success after email provider accepts with an ID", async () => {
  process.env.RESEND_API_KEY = "unit-test-placeholder";
  process.env.CONTACT_FROM_EMAIL = "test@example.com";
  for (const [ok, payload, expectedStatus, success] of [[true, { id: "test-id" }, 200, true], [true, {}, 502, false], [false, {}, 502, false]]) {
    global.fetch = async () => ({ ok, json: async () => payload });
    const result = await POST(request());
    assert.equal(result.status, expectedStatus);
    assert.equal((await result.json()).success, success);
  }
});

test("invalid inquiry returns success false and never calls provider", async () => {
  global.fetch = () => { throw new Error("must not call"); };
  const result = await POST(request({ ...data, website: "honeypot" }));
  assert.equal(result.status, 400);
  assert.equal((await result.json()).success, false);
});
