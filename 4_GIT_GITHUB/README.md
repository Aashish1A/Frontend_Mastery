# 🔀 Git & GitHub Interview Questions — Top 20

> Only the most asked questions with clear explanations for confident interview answers.

---

### Q1. What is Git and how is it different from GitHub?

| Feature | Git | GitHub |
|---------|-----|--------|
| What | A **distributed version control system** (software) | A **cloud hosting platform** for Git repositories (website) |
| Where | Runs locally on your machine | Runs on the web (github.com) |
| Purpose | Track changes, manage versions, branch & merge | Collaborate, host repos, pull requests, CI/CD, issues |
| Alternatives | — | GitLab, Bitbucket, Azure DevOps |

**Git** lets you track every change to your code with a full history. **GitHub** lets you share that repository with others, collaborate via pull requests, and automate workflows.

---

### Q2. What is the difference between `git init` and `git clone`?

- **`git init`** — creates a **new empty** Git repository in the current folder. Use when starting a project from scratch.
- **`git clone <url>`** — **downloads an existing** repository from a remote (GitHub) and sets up the remote connection automatically.

```bash
# Starting fresh
mkdir my-project && cd my-project
git init

# Getting an existing project
git clone https://github.com/user/repo.git
```

After `git clone`, the remote called `origin` is already configured. After `git init`, you need to add a remote manually: `git remote add origin <url>`.

---

### Q3. Explain the three areas in Git: Working Directory, Staging Area, Repository.

```
Working Directory ──git add──> Staging Area ──git commit──> Repository
     (edited files)             (ready to commit)           (saved in history)
```

1. **Working Directory** — your actual project files. Any edits you make happen here.
2. **Staging Area (Index)** — a holding area where you select which changes to include in the next commit. `git add` moves files here.
3. **Repository (.git)** — the committed history. `git commit` saves the staged snapshot permanently.

This three-step process gives you **fine-grained control** — you can commit only specific changes, not everything at once.

---

### Q4. What is a Git branch and why is it important?

A branch is an **independent line of development**. It lets you work on features, bug fixes, or experiments without affecting the main codebase.

```bash
git branch feature-login     # create branch
git checkout feature-login    # switch to it
# OR in one command:
git checkout -b feature-login

# After finishing work:
git checkout main
git merge feature-login       # merge changes into main
git branch -d feature-login   # delete the branch
```

**Common branching strategy:**
- `main` — production-ready code
- `develop` — integration branch
- `feature/*` — new features
- `hotfix/*` — urgent production fixes

Branches are lightweight in Git (just a pointer to a commit), so creating them is cheap and fast.

---

### Q5. What is the difference between `git merge` and `git rebase`?

Both integrate changes from one branch into another, but differently:

**Merge** — creates a **merge commit** that combines two branches. Preserves full history.
```bash
git checkout main
git merge feature-branch
# Creates: A-B-C-M (M is the merge commit)
```

**Rebase** — **rewrites history** by moving your commits on top of the target branch. Creates a linear history.
```bash
git checkout feature-branch
git rebase main
# Before: A-B-C (main), D-E (feature)
# After:  A-B-C-D'-E' (linear — D and E are replayed on top of C)
```

| Feature | Merge | Rebase |
|---------|-------|--------|
| History | Non-linear (merge commits) | Linear (clean history) |
| Safety | Safe — never rewrites history | Dangerous on shared branches |
| Use Case | Merging PRs, integrating long-lived branches | Cleaning up local feature branches |

**Golden rule:** Never rebase branches that others are working on.

---

### Q6. What is a merge conflict and how do you resolve it?

A merge conflict happens when **two branches modify the same line** in the same file. Git can't decide which change to keep, so it marks the conflict:

```
<<<<<<< HEAD
const color = "blue";
=======
const color = "red";
>>>>>>> feature-branch
```

**How to resolve:**
1. Open the conflicted file
2. Choose which code to keep (or combine both)
3. Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
4. Stage the resolved file: `git add <file>`
5. Complete the merge: `git commit`

**Prevention tips:** Pull frequently, keep branches short-lived, communicate with your team about who's editing what.

---

### Q7. What is the difference between `git pull` and `git fetch`?

| Command | What it does |
|---------|-------------|
| `git fetch` | Downloads new commits from remote but **does NOT merge** — safe to inspect first |
| `git pull` | `git fetch` + `git merge` — downloads AND automatically merges into your current branch |

```bash
# Safe approach — inspect before merging
git fetch origin
git log origin/main --oneline   # see what's new
git merge origin/main           # merge when ready

# Quick approach — fetch + merge in one step
git pull origin main
```

**Best practice:** Use `git fetch` + `git merge` when you want to review changes before integrating. Use `git pull` for quick updates when you trust the remote.

---

### Q8. What is `git stash` and when do you use it?

`git stash` temporarily **saves uncommitted changes** and restores a clean working directory. Useful when you need to switch branches but aren't ready to commit.

```bash
# Save current changes
git stash
# OR with a description
git stash push -m "WIP: login form styling"

# Switch branches, do other work...
git checkout main

# Come back and restore changes
git checkout feature-branch
git stash pop        # apply + remove from stash
# OR
git stash apply      # apply but keep in stash

# List all stashes
git stash list

# Drop a specific stash
git stash drop stash@{0}
```

---

### Q9. What is the difference between `git reset` and `git revert`?

Both undo changes, but in fundamentally different ways:

**`git reset`** — moves the branch pointer **backward**, removing commits from history:
```bash
git reset --soft HEAD~1   # undo commit, keep changes staged
git reset --mixed HEAD~1  # undo commit, keep changes in working dir (default)
git reset --hard HEAD~1   # undo commit, DELETE all changes permanently
```

**`git revert`** — creates a **new commit** that undoes a previous commit. History is preserved:
```bash
git revert abc1234   # creates a new commit that reverses abc1234
```

| Feature | `reset` | `revert` |
|---------|---------|----------|
| History | Rewrites (removes commits) | Preserves (adds undo commit) |
| Safe for shared branches | No | Yes |
| Use Case | Local cleanup before push | Undoing changes on shared branches |

**Rule:** Use `revert` on shared/pushed branches. Use `reset` only on local unpushed work.

---

### Q10. What is `git cherry-pick`?

Cherry-pick lets you **apply a specific commit** from one branch to another without merging the entire branch.

```bash
# Find the commit hash
git log --oneline feature-branch
# abc1234 Fix login validation bug
# def5678 Add new dashboard layout

# Apply just that one commit to main
git checkout main
git cherry-pick abc1234
```

**Use case:** A critical bug fix was done on a feature branch that isn't ready to merge, but you need that fix in production now.

---

### Q11. What is a Pull Request (PR)?

A Pull Request is a **GitHub feature** (not a Git command) that lets you propose merging your branch into another branch. It enables:

1. **Code Review** — teammates review your changes, leave comments, suggest improvements
2. **Discussion** — conversation about the implementation
3. **CI/CD Checks** — automated tests run against your changes
4. **History** — a record of why changes were made

**Workflow:**
```bash
git checkout -b feature-search
# make changes, commit, push
git push origin feature-search
# Go to GitHub → Create Pull Request → Request reviews → Merge after approval
```

---

### Q12. What is `.gitignore` and why is it important?

`.gitignore` tells Git which files/folders to **exclude from tracking**. This prevents sensitive data, build artifacts, and dependencies from being committed.

```gitignore
# Dependencies
node_modules/
vendor/

# Build output
dist/
build/
*.min.js

# Environment variables (SENSITIVE!)
.env
.env.local

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
```

**Critical:** Never commit `.env` files, API keys, passwords, or `node_modules`. Add them to `.gitignore` before your first commit.

---

### Q13. What is `git log` and how do you use it effectively?

`git log` shows the **commit history**. Common useful variations:

```bash
# Simple one-line format
git log --oneline

# Show graph with branches
git log --oneline --graph --all

# Last 5 commits
git log -5

# Commits by a specific author
git log --author="John"

# Commits in date range
git log --after="2024-01-01" --before="2024-06-01"

# Commits that changed a specific file
git log -- src/app.js

# Search commit messages
git log --grep="fix login"
```

---

### Q14. What is the difference between `git diff` commands?

```bash
# Changes in working directory (not staged)
git diff

# Changes that are staged (ready to commit)
git diff --staged

# Compare two branches
git diff main..feature-branch

# Compare specific file between branches
git diff main..feature-branch -- src/app.js

# Compare with a specific commit
git diff abc1234
```

`git diff` is essential for **reviewing changes before committing** — always check what you're about to commit.

---

### Q15. What is `git remote` and how do you manage remotes?

A remote is a **reference to a repository hosted on a server** (like GitHub). `origin` is the default name for the remote you cloned from.

```bash
# View remotes
git remote -v

# Add a remote
git remote add origin https://github.com/user/repo.git

# Add another remote (e.g., for upstream/fork)
git remote add upstream https://github.com/original/repo.git

# Change remote URL
git remote set-url origin https://github.com/user/new-repo.git

# Remove a remote
git remote remove upstream
```

**Fork workflow:** `origin` = your fork, `upstream` = original repo. Pull from upstream to stay updated.

---

### Q16. What is `git tag` and when do you use it?

Tags mark **specific points in history** — typically used for releases/versions.

```bash
# Lightweight tag (just a label)
git tag v1.0.0

# Annotated tag (with message — recommended)
git tag -a v1.0.0 -m "First stable release"

# Tag a specific commit
git tag -a v0.9.0 abc1234

# List tags
git tag -l

# Push tags to remote
git push origin v1.0.0
git push origin --tags    # push all tags

# Delete a tag
git tag -d v1.0.0
```

**Convention:** Use semantic versioning — `v1.0.0` (major.minor.patch).

---

### Q17. What is Git Flow?

Git Flow is a popular **branching strategy** for managing releases:

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code. Every commit is a release. |
| `develop` | Integration branch. All features merge here first. |
| `feature/*` | New features. Branch from `develop`, merge back to `develop`. |
| `release/*` | Preparing a release. Branch from `develop`, merge to both `main` and `develop`. |
| `hotfix/*` | Emergency fixes. Branch from `main`, merge to both `main` and `develop`. |

**Simpler alternative (GitHub Flow):** Just `main` + feature branches + pull requests. Used by most modern teams.

---

### Q18. What is the difference between `HEAD`, `HEAD~1`, and `HEAD^`?

- **`HEAD`** — pointer to the **current commit** you're working on (tip of current branch).
- **`HEAD~1`** — the commit **1 step before** HEAD (parent). `HEAD~3` = 3 commits back.
- **`HEAD^`** — the **first parent** of HEAD (same as `HEAD~1` for non-merge commits).

```bash
git log HEAD~3..HEAD --oneline  # last 3 commits
git diff HEAD~1                 # changes since last commit
git reset --soft HEAD~1         # undo last commit, keep changes staged
```

For merge commits, `HEAD^1` = first parent (the branch you were on), `HEAD^2` = second parent (the branch being merged).

---

### Q19. How do you undo the last commit?

**Undo commit but keep changes (most common):**
```bash
git reset --soft HEAD~1    # changes stay staged
git reset --mixed HEAD~1   # changes go back to working directory
```

**Undo commit AND discard changes (dangerous):**
```bash
git reset --hard HEAD~1    # everything is lost
```

**Undo a pushed commit (safe for shared branches):**
```bash
git revert HEAD            # creates a new undo commit
git push                   # safe to push
```

**Just change the commit message:**
```bash
git commit --amend -m "New message"
```

---

### Q20. What are GitHub Actions?

GitHub Actions is a **CI/CD platform** built into GitHub that automates workflows — testing, building, deploying — triggered by events like push, pull request, or schedule.

```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm test
```

| Concept | Meaning |
|---------|---------|
| **Workflow** | The YAML file defining automation |
| **Event** | What triggers it (`push`, `pull_request`, `schedule`) |
| **Job** | A set of steps that run on the same runner |
| **Step** | A single task (run command or use an action) |
| **Action** | A reusable unit of code (from GitHub Marketplace) |

---

_Made with ❤️ for Frontend Mastery_
