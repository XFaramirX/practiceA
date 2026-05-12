const test = require("node:test");
const assert = require("node:assert/strict");

const { backlog, summarizeBacklog, getNextSlice } = require("./index.js");

test("summarizeBacklog counts done and todo items", () => {
  assert.deepEqual(summarizeBacklog(backlog), {
    total: 4,
    done: 2,
    todo: 2,
  });
});

test("getNextSlice returns the first unfinished item", () => {
  assert.deepEqual(getNextSlice(backlog), {
    title: "Pick the next tiny slice",
    status: "todo",
  });
});