# 🚀 Git & GitHub Complete Guide & Interview Prep

> **Master Version Control: From Basic Commands to Advanced Workflows**  
> _Complete guide covering Git fundamentals, GitHub features, and interview preparation_

---

## 📋 Table of Contents

- [🎯 Git Fundamentals](#-git-fundamentals)
- [🔧 Essential Git Commands](#-essential-git-commands)
- [🌿 Branching & Merging](#-branching--merging)
- [🔄 Remote Repositories](#-remote-repositories)
- [🐙 GitHub Features](#-github-features)
- [🔀 Git Workflows](#-git-workflows)
- [🛠️ Advanced Git](#️-advanced-git)
- [❓ Interview Questions](#-interview-questions)
- [🏆 Best Practices](#-best-practices)
- [🎓 Quick Reference](#-quick-reference)

---

## 🎯 Git Fundamentals

### What is Git?

**Git** is a **distributed version control system** that tracks changes in files and coordinates work among multiple developers.

### Key Concepts:

- **Repository (Repo):** A project folder tracked by Git
- **Commit:** A snapshot of your project at a specific point in time
- **Branch:** An independent line of development
- **Merge:** Combining changes from different branches
- **Remote:** A version of your repository hosted on a server

### Git vs GitHub:

| **Git**                | **GitHub**                      |
| ---------------------- | ------------------------------- |
| Version control system | Web-based hosting service       |
| Local tool             | Cloud platform                  |
| Command-line interface | Web interface + API             |
| Tracks file changes    | Provides collaboration features |

---

## 🔧 Essential Git Commands

### Setup & Configuration

```bash
# Configure Git (first-time setup)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check configuration
git config --list
git config user.name
git config user.email

# Set default branch name
git config --global init.defaultBranch main
```

### Repository Initialization

```bash
# Initialize a new Git repository
git init

# Clone an existing repository
git clone https://github.com/username/repository.git
git clone https://github.com/username/repository.git my-folder

# Check repository status
git status
```

### Basic Workflow

```bash
# Add files to staging area
git add filename.txt          # Add specific file
git add .                     # Add all files
git add *.js                  # Add all JS files
git add -A                    # Add all changes (including deletions)

# Commit changes
git commit -m "Your commit message"
git commit -am "Add and commit in one step"  # For tracked files only

# View commit history
git log
git log --oneline             # Compact view
git log --graph --oneline     # Visual branch history
git log -p                    # Show changes in each commit
```

### File Operations

```bash
# Remove files
git rm filename.txt           # Remove file and stage deletion
git rm --cached filename.txt  # Remove from Git but keep locally

# Move/rename files
git mv oldname.txt newname.txt

# View changes
git diff                      # Unstaged changes
git diff --staged             # Staged changes
git diff HEAD~1               # Compare with previous commit
git diff branch1 branch2      # Compare branches
```

---

## 🌿 Branching & Merging

### Branch Management

```bash
# List branches
git branch                    # Local branches
git branch -r                 # Remote branches
git branch -a                 # All branches

# Create and switch branches
git branch feature-branch     # Create branch
git checkout feature-branch  # Switch to branch
git checkout -b feature-branch # Create and switch in one command
git switch feature-branch    # Modern way to switch branches
git switch -c feature-branch # Create and switch (modern)

# Delete branches
git branch -d feature-branch  # Delete merged branch
git branch -D feature-branch  # Force delete branch
git push origin --delete feature-branch  # Delete remote branch
```

### Merging

```bash
# Merge branches
git checkout main
git merge feature-branch      # Merge feature into main

# Merge types
git merge --no-ff feature-branch    # Create merge commit
git merge --squash feature-branch   # Squash all commits into one

# Abort merge if conflicts
git merge --abort
```

### Rebasing

```bash
# Rebase current branch onto main
git rebase main

# Interactive rebase (clean up commits)
git rebase -i HEAD~3          # Rebase last 3 commits

# Abort rebase
git rebase --abort

# Continue after resolving conflicts
git rebase --continue
```

---

## 🔄 Remote Repositories

### Remote Management

```bash
# Add remote repository
git remote add origin https://github.com/username/repo.git

# List remotes
git remote -v

# Change remote URL
git remote set-url origin https://github.com/username/new-repo.git

# Remove remote
git remote remove origin
```

### Push & Pull

```bash
# Push changes
git push origin main          # Push to main branch
git push -u origin main       # Set upstream and push
git push --all                # Push all branches
git push --tags               # Push all tags

# Pull changes
git pull origin main          # Fetch and merge
git pull --rebase             # Fetch and rebase instead of merge

# Fetch changes (without merging)
git fetch origin
git fetch --all               # Fetch from all remotes
```

### Tracking Branches

```bash
# Set upstream branch
git branch --set-upstream-to=origin/main main
git push -u origin feature-branch

# Track remote branch
git checkout --track origin/feature-branch
```

---

## 🐙 GitHub Features

### Repository Management

- **Public vs Private:** Visibility settings
- **README.md:** Project documentation
- **LICENSE:** Legal permissions
- **.gitignore:** Files to ignore
- **Releases:** Tagged versions
- **Wiki:** Project documentation

### Collaboration Features

```bash
# Fork a repository (on GitHub web interface)
# Then clone your fork
git clone https://github.com/yourusername/forked-repo.git

# Add upstream remote (original repository)
git remote add upstream https://github.com/originalowner/repo.git

# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main
```

### Pull Requests (PRs)

1. **Fork** the repository (if not a collaborator)
2. **Create feature branch:** `git checkout -b feature-name`
3. **Make changes and commit**
4. **Push branch:** `git push origin feature-name`
5. **Create Pull Request** on GitHub
6. **Code review and discussion**
7. **Merge or close** the PR

### GitHub Actions (CI/CD)

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"
      - run: npm install
      - run: npm test
```

### Issues & Project Management

- **Issues:** Track bugs, features, tasks
- **Labels:** Categorize issues
- **Milestones:** Group issues by release
- **Projects:** Kanban-style project management
- **Discussions:** Community conversations

---

## 🔀 Git Workflows

### 1. Feature Branch Workflow

```bash
# 1. Start from main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/user-authentication

# 3. Work on feature
git add .
git commit -m "Add login functionality"
git commit -m "Add password validation"

# 4. Push and create PR
git push origin feature/user-authentication
# Create PR on GitHub

# 5. After approval, merge and cleanup
git checkout main
git pull origin main
git branch -d feature/user-authentication
```

### 2. GitFlow Workflow

```bash
# Main branches
main          # Production-ready code
develop       # Integration branch

# Supporting branches
feature/*     # New features
release/*     # Prepare releases
hotfix/*      # Emergency fixes

# Example feature workflow
git checkout develop
git checkout -b feature/new-feature
# Work on feature
git checkout develop
git merge --no-ff feature/new-feature
git branch -d feature/new-feature
```

### 3. GitHub Flow (Simplified)

```bash
# 1. Create branch from main
git checkout main
git checkout -b feature-branch

# 2. Add commits
git commit -m "Add feature"

# 3. Open Pull Request
# 4. Deploy and test
# 5. Merge to main
```

---

## 🛠️ Advanced Git

### Stashing

```bash
# Save work temporarily
git stash                     # Stash changes
git stash save "Work in progress on feature"
git stash list                # List stashes
git stash pop                 # Apply and remove latest stash
git stash apply stash@{0}     # Apply specific stash
git stash drop stash@{0}      # Delete specific stash
git stash clear               # Delete all stashes
```

### Tagging

```bash
# Create tags
git tag v1.0.0                # Lightweight tag
git tag -a v1.0.0 -m "Version 1.0.0"  # Annotated tag

# List tags
git tag
git tag -l "v1.*"             # List tags matching pattern

# Push tags
git push origin v1.0.0        # Push specific tag
git push origin --tags        # Push all tags

# Delete tags
git tag -d v1.0.0             # Delete local tag
git push origin --delete v1.0.0  # Delete remote tag
```

### Cherry Picking

```bash
# Apply specific commit to current branch
git cherry-pick commit-hash

# Cherry pick multiple commits
git cherry-pick commit1 commit2

# Cherry pick without committing
git cherry-pick --no-commit commit-hash
```

### Reset & Revert

```bash
# Reset (changes history)
git reset --soft HEAD~1       # Undo commit, keep changes staged
git reset --mixed HEAD~1      # Undo commit, unstage changes
git reset --hard HEAD~1       # Undo commit, discard changes

# Revert (creates new commit)
git revert HEAD               # Revert last commit
git revert commit-hash        # Revert specific commit
```

### Aliases

```bash
# Create shortcuts
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

# Usage
git st                        # Same as git status
git co main                   # Same as git checkout main
```

---

## ❓ Interview Questions

### Basic Git Questions

**Q1. What is Git and why is it used?**
**Answer:** Git is a distributed version control system that tracks changes in files and enables collaboration among multiple developers. It's used for:

- Track code changes over time
- Collaborate with multiple developers
- Maintain different versions of code
- Backup and restore code
- Branch and merge features

**Q2. What's the difference between Git and GitHub?**
**Answer:**

- **Git:** Version control system (tool)
- **GitHub:** Cloud-based hosting service for Git repositories
- Git works locally, GitHub provides remote hosting and collaboration features
- Alternatives to GitHub: GitLab, Bitbucket, Azure DevOps

**Q3. Explain the Git workflow.**
**Answer:**

1. **Working Directory:** Where you edit files
2. **Staging Area (Index):** Files ready to be committed
3. **Repository:** Where commits are stored

```bash
Working Directory → git add → Staging Area → git commit → Repository
```

**Q4. What is a commit in Git?**
**Answer:** A commit is a snapshot of your repository at a specific point in time. Each commit has:

- Unique SHA-1 hash
- Author information
- Timestamp
- Commit message
- Pointer to previous commit(s)

**Q5. What's the difference between `git add .` and `git add -A`?**
**Answer:**

- `git add .` - Adds files in current directory and subdirectories
- `git add -A` - Adds all changes (including deletions) in entire repository
- `git add -u` - Adds only modified/deleted files (not new files)

### Branching & Merging Questions

**Q6. What is a branch in Git?**
**Answer:** A branch is an independent line of development. It's a movable pointer to a specific commit. Benefits:

- Parallel development
- Feature isolation
- Safe experimentation
- Multiple versions

**Q7. What's the difference between merge and rebase?**
**Answer:**
| **Merge** | **Rebase** |
|-----------|------------|
| Creates merge commit | No merge commit |
| Preserves history | Rewrites history |
| Shows when branches were merged | Linear history |
| Safe for shared branches | Dangerous for shared branches |

```bash
# Merge
git checkout main
git merge feature-branch

# Rebase
git checkout feature-branch
git rebase main
```

**Q8. How do you resolve merge conflicts?**
**Answer:**

1. Git marks conflicts in files with `<<<<<<<`, `=======`, `>>>>>>>`
2. Edit files to resolve conflicts
3. Remove conflict markers
4. Stage resolved files: `git add filename`
5. Complete merge: `git commit` or `git rebase --continue`

**Q9. What is a fast-forward merge?**
**Answer:** When the target branch has no new commits since the source branch was created. Git simply moves the pointer forward instead of creating a merge commit.

```bash
# Force merge commit even in fast-forward
git merge --no-ff feature-branch
```

### Remote Repository Questions

**Q10. What's the difference between `git fetch` and `git pull`?**
**Answer:**

- **`git fetch`:** Downloads data from remote but doesn't merge
- **`git pull`:** Downloads data and automatically merges (`fetch` + `merge`)

```bash
git fetch origin        # Download latest changes
git merge origin/main   # Manually merge

# Equivalent to:
git pull origin main
```

**Q11. What is origin in Git?**
**Answer:** `origin` is the default name for the remote repository when you clone. It's just an alias for the remote URL.

```bash
git remote -v           # Shows origin URL
git remote add origin <url>  # Adds origin remote
```

**Q12. How do you undo the last commit?**
**Answer:**

```bash
# Undo commit but keep changes
git reset --soft HEAD~1

# Undo commit and unstage changes
git reset --mixed HEAD~1

# Undo commit and discard changes
git reset --hard HEAD~1

# Safe way (creates new commit)
git revert HEAD
```

### Advanced Questions

**Q13. What is Git stash and when would you use it?**
**Answer:** Git stash temporarily saves uncommitted changes so you can work on something else. Use cases:

- Switch branches with uncommitted changes
- Pull latest changes before committing
- Quick bug fixes

```bash
git stash               # Save changes
git stash pop           # Apply latest stash
git stash list          # View all stashes
```

**Q14. What is cherry-picking in Git?**
**Answer:** Applying a specific commit from one branch to another without merging the entire branch.

```bash
git cherry-pick <commit-hash>
```

Use cases: Apply bug fixes, pick specific features

**Q15. What are Git hooks?**
**Answer:** Scripts that run automatically at certain Git events:

- **pre-commit:** Before creating commit
- **post-commit:** After creating commit
- **pre-push:** Before pushing to remote
- **post-receive:** After receiving push (server-side)

**Q16. How do you squash commits?**
**Answer:**

```bash
# Interactive rebase to squash last 3 commits
git rebase -i HEAD~3

# In the editor, change 'pick' to 'squash' for commits to squash
# Or use --squash during merge
git merge --squash feature-branch
```

**Q17. What is the difference between HEAD, working tree, and index?**
**Answer:**

- **HEAD:** Pointer to the last commit on current branch
- **Working Tree:** Your current file system (where you edit files)
- **Index (Staging Area):** Files staged for next commit

### GitHub-Specific Questions

**Q18. What is a Pull Request?**
**Answer:** A request to merge changes from one branch to another. It enables:

- Code review
- Discussion
- Testing before merge
- Documentation of changes

**Q19. What is forking in GitHub?**
**Answer:** Creating a personal copy of someone else's repository. Used for:

- Contributing to open source
- Experimenting with code
- Creating derivative works

**Q20. What are GitHub Actions?**
**Answer:** GitHub's CI/CD platform that automates workflows:

- Run tests on pull requests
- Deploy applications
- Publish packages
- Code quality checks

### Workflow Questions

**Q21. Explain GitFlow workflow.**
**Answer:** A branching model with specific branch types:

- **main:** Production code
- **develop:** Integration branch
- **feature/\*:** New features
- **release/\*:** Prepare releases
- **hotfix/\*:** Emergency fixes

**Q22. What is a .gitignore file?**
**Answer:** Specifies files/folders Git should ignore:

```gitignore
# Dependencies
node_modules/
*.log

# Environment files
.env

# Build outputs
dist/
build/

# IDE files
.vscode/
.idea/
```

**Q23. How do you handle large files in Git?**
**Answer:**

- **Git LFS (Large File Storage):** For binary files
- **.gitignore:** Exclude large files
- **Submodules:** Separate repositories
- **Alternative storage:** Cloud storage with links

**Q24. What is a detached HEAD state?**
**Answer:** When HEAD points to a specific commit instead of a branch. Happens when:

- Checking out a specific commit
- Checking out a tag

```bash
git checkout <commit-hash>    # Creates detached HEAD
git checkout -b new-branch    # Create branch from detached HEAD
```

**Q25. How do you find who changed a specific line of code?**
**Answer:**

```bash
git blame filename.txt        # Show author of each line
git log -p filename.txt       # Show all changes to file
git log -L 10,20:filename.txt # Show changes to specific lines
```

---

## 🏆 Best Practices

### Commit Messages

```bash
# Good commit messages
feat: add user authentication
fix: resolve memory leak in image processing
docs: update API documentation
refactor: simplify user validation logic

# Format: type(scope): description
# Types: feat, fix, docs, style, refactor, test, chore
```

### Branching Strategy

```bash
# Use descriptive branch names
feature/user-authentication
bugfix/memory-leak-fix
hotfix/security-patch

# Keep branches short-lived
# Regularly sync with main branch
git checkout feature-branch
git rebase main
```

### Repository Organization

```
project/
├── .gitignore          # Ignore unnecessary files
├── README.md           # Project documentation
├── LICENSE             # License information
├── CONTRIBUTING.md     # Contribution guidelines
├── .github/            # GitHub-specific files
│   ├── workflows/      # GitHub Actions
│   └── ISSUE_TEMPLATE/ # Issue templates
└── src/                # Source code
```

### Security

```bash
# Never commit sensitive data
echo ".env" >> .gitignore
echo "config/secrets.yml" >> .gitignore

# Use environment variables
DATABASE_URL=your_database_url
API_KEY=your_api_key

# Remove committed secrets
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch path/to/secret/file' \
--prune-empty --tag-name-filter cat -- --all
```

---

## 🎓 Quick Reference

### Essential Commands

```bash
# Setup
git init
git clone <url>
git config --global user.name "Name"

# Basic workflow
git status
git add .
git commit -m "message"
git push origin main

# Branching
git branch
git checkout -b new-branch
git merge branch-name

# Remote
git remote -v
git fetch
git pull
git push

# History
git log
git log --oneline
git diff
```

### Common Scenarios

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename
git reset --hard HEAD

# Switch to previous branch
git checkout -

# Delete branch
git branch -d branch-name
git push origin --delete branch-name

# Sync fork with upstream
git fetch upstream
git checkout main
git merge upstream/main
```

### Useful Aliases

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.cp cherry-pick
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
git config --global alias.tree 'log --graph --oneline --all'
```

---

## 🚀 Interview Success Tips

1. **Understand fundamentals:** Git workflow, staging, commits
2. **Practice commands:** Use Git daily for projects
3. **Know branching:** Merge vs rebase, conflict resolution
4. **GitHub features:** Pull requests, issues, actions
5. **Workflows:** GitFlow, GitHub Flow, feature branches
6. **Troubleshooting:** Undo commits, resolve conflicts
7. **Best practices:** Commit messages, branching strategy
8. **Real experience:** Contribute to open source projects

### Common Interview Tasks

- Initialize repository and make first commit
- Create branch, make changes, merge back
- Resolve merge conflicts
- Undo/revert commits
- Explain your preferred Git workflow
- Set up CI/CD with GitHub Actions

---

> 💡 **Pro Tip:** The best way to learn Git is by using it daily. Create repositories for your projects, practice branching and merging, and contribute to open source projects. Understanding the concepts is important, but hands-on experience is what makes you confident in interviews.

**Happy Version Controlling!** 🚀
