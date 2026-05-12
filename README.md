# practiceA

Small repo for practicing trunk-based flow.

## Goal

Work in tiny slices, keep `main` releasable, and verify every change with `npm test`.

## Practice loop

1. Pull the latest `main`.
2. Pick one small improvement you can finish quickly.
3. Change code and tests together.
4. Run `npm test`.
5. Commit once the slice is complete.
6. Repeat with another small slice.

## After you push to main

In trunk-based flow, that slice is done. Do not keep working in the old commit series.
Start a new tiny change from the latest `main`, verify it, and push again.

## Suggested exercises

1. Add another helper to `index.js` and test it.
2. Improve the copy in `index.html` without breaking the existing tests.
3. Add one more backlog item to the data in `index.js` and update the summary test.
4. Replace one practice item with the next tiny slice you want to ship.

## Current command

```bash
npm test
```
