const backlog = [
  { title: "Add a passing test command", status: "done" },
  { title: "Write trunk-based practice notes", status: "done" },
  { title: "Commit a small verified change to main", status: "done" },
  { title: "Push the finished slice to origin/main", status: "done" },
  { title: "Start the next tiny slice from main", status: "todo" },
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