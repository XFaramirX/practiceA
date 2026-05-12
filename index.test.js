const test = require("node:test");
const assert = require("node:assert/strict");

const { backlog, summarizeBacklog, getNextSlice } = require("./index.js");

test("summarizeBacklog counts done and todo items", () => {
  assert.deepEqual(summarizeBacklog(backlog), {
    total: 5,
    done: 4,
    todo: 1,
  });
});

test("getNextSlice returns the first unfinished item", () => {
  assert.deepEqual(getNextSlice(backlog), {
    title: "Start the next tiny slice from main",
    status: "todo",
  });
});