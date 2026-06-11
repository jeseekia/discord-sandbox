# Discord Sandbox

A Discord bot practice repository for command handling, routing logic, and support workflows.

This repo is intentionally designed to help you practice:

- cloning a repository
- creating a branch
- making incremental commits
- pushing your branch
- opening a pull request
- responding to review comments
- updating the same PR until it is ready to merge

## Week 1 assignment

Each intern must complete this project independently and submit their own PR.

### Project goal
Build a lightweight program manager question router that could later evolve into a Discord helper for founder questions and program logistics.

### Required features
- Accept a question as input
- Route the question to a matching topic using simple logic
- Return a useful response for at least 5 topics
- Include a fallback for unknown questions
- Keep all responses and logic local in code or JSON

### Required starter topics
- weekly report
- deliverables
- office hours
- housing
- who to contact

### Stretch ideas
- Add more question synonyms
- Improve response quality
- Add simple logging for unknown questions
- Add command-style support like `/weekly-report`
- Add another topic related to founders or residents

## Git and PR expectations

### Branch naming
Use this format:

`<your-name>/discord-week1`

Example:

`jordan/discord-week1`

### Commit expectations
Make incremental commits. Do not wait until everything is done.

Good examples:
- `chore: set up discord sandbox locally`
- `feat: add deliverables intent`
- `feat: improve fallback response`
- `feat: add unknown question logging`
- `refactor: simplify router logic`
- `docs: update setup notes`

### PR expectations
Open one PR for your work in this repo.

Use this title format:

`Week 1 Discord Sandbox - <Your Name>`

Your PR should include:
- a short summary of what you built
- what is complete
- what is still rough or unfinished
- example questions you tested

### Review expectations
Your PR is not final when you first open it.

You are expected to:
1. Read review comments carefully
2. Make updates on the same branch
3. Commit your changes
4. Push new commits to the same PR
5. Reply to comments when you address them

## Setup

### Requirements
- Node 18+
- npm 9+

### Install
```bash
npm install
```

### Run locally
```bash
npm start
```

## Starter structure

- `src/data/faqs.json` contains starter responses
- `src/router.js` contains basic routing logic
- `src/index.js` runs a small command-line demo

## Working agreement

- Keep the logic simple and readable for week 1
- Do not require a live Discord bot token for this assignment
- Do not add a database for week 1
- If you get stuck, note where you got stuck and what you tried in your PR

## Definition of done
Your PR is ready for review when:
- the script runs locally
- the required topics are handled
- your code is readable
- your commit history shows progress over time
- your PR description is filled in
