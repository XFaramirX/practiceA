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
 git cherry-pick 6054e28    

# Git Practice Repo

This repo is used to practice common Git workflows and recovery commands.

## Topics Covered

- Git cherry-pick
- Git reset soft
- Git reset hard
- Git squash with interactive rebase
- Git Flow
- Trunk-Based Development
- Rebase vs Pull
- Force push with lease

---

## Basic Branch Setup

```bash
git checkout main
git pull origin main
git checkout -b feature/my-practice
Cherry-Pick

Use cherry-pick when you want to copy one specific commit from another branch.

git checkout target-branch
git cherry-pick <commit-hash>

Example:

git cherry-pick abc1234
Reset Soft

Use soft reset when you want to combine commits but keep the changes staged.

git reset --soft HEAD~3
git commit -m "Clean commit message"

Good for cleaning up messy local commits before pushing.

Reset Hard

Use hard reset when you want to delete commits or local changes completely.

git reset --hard HEAD~1

Danger: this removes changes from your working tree.

Squash with Interactive Rebase

Use interactive rebase when you want more control over commit history.

git rebase -i HEAD~3

Example:

pick abc111 Commit part 1
squash def222 Commit part 2
squash ghi333 Commit part 3

Final result: one clean commit.

Rebase vs Pull

When updating main, use pull:

git checkout main
git pull origin main

When updating a feature branch with latest main, prefer rebase:

git checkout feature/my-practice
git fetch origin
git rebase origin/main

This keeps the branch history clean.

Avoid doing this from a feature branch unless you specifically want a merge commit:

git pull origin main
Force Push With Lease

Use this after rewriting pushed history with rebase, amend, or reset.

git push --force-with-lease

This is safer than:

git push --force

because it protects against overwriting someone else’s new commits.

Git Flow

Git Flow usually uses long-lived branches:

main
develop
feature/*
release/*
hotfix/*

Typical flow:

feature branch -> develop -> release -> main

Good for scheduled releases and controlled production deployments.

Trunk-Based Development

Trunk-based development keeps work close to main.

main
feature/small-change
feature/another-small-change

Typical flow:

git checkout main
git pull origin main
git checkout -b feature/small-change

Then open a PR back to main.

Good for CI/CD, short-lived branches, and frequent releases.

Personal Rules
Update same branch from remote  -> git pull
Update feature with latest main -> git rebase origin/main
Clean messy commits             -> git reset --soft HEAD~N
Rewrite pushed branch           -> git push --force-with-lease
Delete local changes carefully  -> git reset --hard