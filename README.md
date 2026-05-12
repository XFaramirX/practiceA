# practiceA

Small repo for practicing trunk-based flow.

## Goal

Work in tiny slices, keep `main` releasable, and verify every change with `npm test`.

## What trunk-based means here

`main` is still the trunk. You can commit directly to it for very small changes, or use a
short-lived branch that merges back quickly. The key rule is that branches do not stay open
for long and `main` stays healthy.

## Practice loops

1. Pull the latest `main`.
2. Pick one small improvement you can finish quickly.
3. Either commit directly to `main` or create a short-lived branch from `main`.
4. Change code and tests together.
5. Run `npm test`.
6. Merge back to `main` immediately if you used a branch.
7. Tag a stable point on `main` when you want a named checkpoint.
8. Repeat with another small slice.

## After you push to main

In trunk-based flow, that slice is done. Do not keep working in the old commit series.
Start a new tiny change from the latest `main`, verify it, and push again.

## Before you merge back to main

1. Keep the branch focused on one small change.
2. Make sure `npm test` passes.
3. Merge it back quickly and delete the branch.

## Example commands

Short-lived branch:

```bash
git switch main
git pull
git switch -c chore/small-slice
# make change
npm test
git add .
git commit -m "small verified slice"
git switch main
git merge --no-ff chore/small-slice
git branch -d chore/small-slice
git push origin main
```

Tag a stable point on trunk:

```bash
git tag -a v0.1.0 -m "stable trunk checkpoint"
git push origin v0.1.0
```

Avoid long-lived feature, release, or integration branches for this exercise.

## Suggested exercises

1. Add another helper to `index.js` and test it.
2. Improve the copy in `index.html` without breaking the existing tests.
3. Add one more backlog item to the data in `index.js` and update the summary test.
4. Replace one practice item with the next tiny slice you want to ship.

## Current command

```bash
npm test
```

## practice cherry pick