import { describe, it } from "node:test";
import expect from "unexpected";
import unexpectedNodeTestSerializationIssue from "../lib/unexpected-node-test-serialization-issue.js";

describe("unexpected-node-test-serialization-issue", () => {
  it("should be a function", () => {
    expect(unexpectedNodeTestSerializationIssue, "to be a function");
  });
});
