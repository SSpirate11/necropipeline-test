# NecroPipeline Test Repository

This repository is used to test the NecroPipeline AI-powered CI/CD fix system.

## What it does

- Contains a simple calculator module
- Has tests that will fail
- NecroPipeline detects the failure
- AI generates a fix
- Automated PR is created

## Structure

```
src/
  calculator.js - Simple calculator implementation
  calculator.test.js - Tests (with intentional bug)
```

## Testing NecroPipeline

1. Push code with failing test
2. GitHub Actions runs and fails
3. NecroPipeline detects failure
4. AI analyzes the code and error
5. Generates fix for calculator.js
6. Creates PR with the fix
