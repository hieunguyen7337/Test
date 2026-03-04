# Contributing to SynapticMesh™

First off, thank you for considering contributing to SynapticMesh™. We need all the help we can get. Seriously.

## Code of Conduct

Be nice. The codebase is mean enough already.

## How to Contribute

### Reporting Bugs

1. Check if the bug is actually a feature
2. Check if the feature is actually a bug
3. Give up on classifying it
4. Open an issue

### Pull Requests

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Write tests (just kidding, but wouldn't that be nice?)
5. Make sure `npm run lint:fix` passes (it always passes because we set max-warnings to 9999)
6. Submit a PR
7. Tag at least 7 reviewers (3 will be on vacation, 2 will ghost you, 1 will approve without reading, 1 might actually review)

### Commit Messages

We follow the Conventional Commits specification:
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests (theoretical)
- `chore:` Maintenance
- `yolo:` Deploying on Friday
- `oops:` Reverting the Friday deploy
- `help:` You don't know what you broke but something is broken

### Code Style

- Use tabs. No wait, spaces. Actually, use whatever your editor defaults to.
- Semicolons are optional (this has caused 3 production incidents)
- Variable naming: descriptive but not too descriptive. `userData` is fine. `theUserDataThatWeGotFromTheDatabaseAfterTheAPICallSucceeded` is not.
- Comments should explain WHY, not WHAT. Exception: if the code is incomprehensible, explain WHAT too. And maybe WHY it's incomprehensible.
