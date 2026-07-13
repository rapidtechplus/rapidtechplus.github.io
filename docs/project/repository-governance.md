# Repository Governance & Access Policy

This document is the source of truth for how access and branch protection are
configured for `rapidtechplus/rapidtechplus.github.io`. The settings themselves
live in GitHub (they cannot be committed to the repo); this file records the
intended configuration so it is reviewable and reproducible.

## Access model

- **Visibility:** Public. The repository is served via GitHub Pages
  (`rapidtechplus.github.io`), so it is kept public to keep the live site online
  on the free plan. Anyone can view and clone the source.
- **Important limitation:** GitHub has no "view but do not clone" mode. Anyone
  who can read a repository can clone it. Because the repo is public, cloning
  cannot be restricted; what is restricted is **who can push and merge**.
- **Write access:** Push/merge is limited to organization members via branch
  protection. No outside-collaborator write access.

## Protected branches

Both `master` and `develop` are protected with a ruleset that:

- Requires a pull request before merging
- Requires at least 1 approving review
- Requires review from Code Owners (see `.github/CODEOWNERS`)
- Requires status checks to pass before merging
- Blocks force pushes
- Blocks branch deletion
- Restricts who can push to the core team

## How to apply (GitHub UI — org admin required)

Repository stays **public**. Apply branch protection only:

1. **Settings → Collaborators and teams →** ensure write access is granted to
   the org team(s) only; remove any outside collaborators.
2. **Settings → Rules → Rulesets → New branch ruleset:**
   - Target branches: `master`, `develop`
   - Enable: Require a pull request, Require approvals, Require review from Code
     Owners, Require status checks, Block force pushes, Restrict deletions.
   - Bypass list: empty (or the core team only).

## Equivalent GitHub CLI (run by an org admin)

Run once per branch (`master` and `develop`):

```bash
gh api -X PUT repos/rapidtechplus/rapidtechplus.github.io/branches/master/protection \
  -H "Accept: application/vnd.github+json" \
  -F "required_pull_request_reviews[required_approving_review_count]=1" \
  -F "required_pull_request_reviews[require_code_owner_reviews]=true" \
  -F "enforce_admins=true" \
  -F "restrictions=null" \
  -F "required_status_checks=null" \
  -F "allow_force_pushes=false" \
  -F "allow_deletions=false"
```

> The repo is public, so this does not restrict cloning/viewing — it restricts
> who can push and merge. Only members with write access (the org team) can
> land changes, and every change needs a Code Owner review.
