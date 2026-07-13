# Rapid Tech Plus Website Development Guide

## Mission

Your responsibility is to build and maintain a production-quality website for Rapid Tech Plus.

Always think as a senior software architect before writing code.

Never optimize for speed of implementation at the cost of maintainability.

---

# Development Workflow

Every task must follow this workflow.

## Step 1

Read:

- CLAUDE.md
- docs/project/project-overview.md
- docs/roadmap/task-backlog.md

before making any code changes.

## Step 2

Determine whether the requested task already exists in the backlog.

If not, add it before implementation.

## Step 3

Identify all dependencies.

Do not implement tasks whose prerequisites are incomplete.

## Step 4

Implement only one logical group of related tasks.

Avoid mixing unrelated work.

## Step 5

Run:

- lint
- typecheck
- build

Resolve every issue before considering work complete.

## Step 6

Update the backlog.

Mark completed tasks.

Add newly discovered tasks if necessary.

---

# Engineering Principles

Always prefer:

- reusable components
- composition
- maintainability
- readability
- accessibility
- scalability

Avoid:

- duplicated code
- unnecessary abstraction
- premature optimization
- large components
- hardcoded values

---

# UI Principles

The UI should look like premium SaaS software.

Preferred inspirations:

- Vercel
- Stripe
- Linear
- Clerk
- Resend
- Supabase

Use:

- large typography
- generous whitespace
- subtle gradients
- rounded corners
- elegant shadows
- tasteful animations

Never make the website resemble a generic template.

---

# Project Constraints

This project must remain static.

Do not introduce:

- APIs
- databases
- authentication
- CMS
- server-side persistence

Everything must build successfully using static export.

---

# Folder Standards

Organize code by feature and responsibility.

Components should be reusable.

Shared logic belongs in lib/.

Constants belong in config/.

Page content belongs in content/.

Avoid dumping unrelated files into a single folder.

---

# Code Quality

All code must:

- use TypeScript strict mode
- pass lint
- pass type checking
- build successfully
- be responsive
- be accessible

---

# Definition of Done

A task is complete only when:

- implementation is finished
- code is clean
- build succeeds
- lint succeeds
- typecheck succeeds
- backlog updated
- documentation updated if required

Never consider a task complete before all of these conditions are satisfied.
