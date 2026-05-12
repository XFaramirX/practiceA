const backlog = [
  { title: "Add a passing test command", status: "done" },
  { title: "Write trunk-based practice notes", status: "done" },
  { title: "Pick the next tiny slice", status: "todo" },
  { title: "Confirm Learn the trunk based flow", status: "todo" },
];

function summarizeBacklog(items) {
  return items.reduce(
    (summary, item) => {
      summary.total += 1;
      summary[item.status] = (summary[item.status] || 0) + 1;
      return summary;
    },
    { total: 0, done: 0, todo: 0 }
  );
}

function getNextSlice(items) {
  return items.find((item) => item.status !== "done") || null;
}

module.exports = {
  backlog,
  summarizeBacklog,
  getNextSlice,
};