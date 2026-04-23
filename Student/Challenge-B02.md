# Challenge B-02: Implementation with Copilot

## Description

You've got the designs. Now build them.

Use GitHub Copilot to implement the 2 features you designed in B-01. This isn't about writing code as fast as possible — it's about writing code that's correct, secure, and maintainable. Validate all inputs. Handle errors gracefully. Think about what happens when someone sends unexpected data, hits an endpoint without authentication, or tries to access resources they shouldn't.

Copilot can generate route handlers, model definitions, database queries, and middleware in seconds. Your job is to guide it, review what it produces, and make sure the result actually matches your API contracts.

Create pull requests for your work with clear descriptions of what each feature does and why.

## Objectives

- Implement the 2 backend features designed in B-01
- Use GitHub Copilot to assist with code generation — routes, controllers, models, queries
- Add input validation on all endpoints (reject malformed requests before they hit business logic)
- Implement proper error handling and appropriate HTTP status codes
- Apply security best practices: authentication checks, authorization enforcement, no data leakage in error messages
- Create pull requests with descriptive titles and bodies

## Success Criteria

- [ ] 2 backend features fully implemented and functional
- [ ] GitHub Copilot used during implementation
- [ ] Input validation present on all new endpoints
- [ ] Error handling returns appropriate HTTP status codes and safe error messages
- [ ] Security checks in place (authentication, authorization)
- [ ] Pull requests created with clear descriptions

## Learning Resources

- [Express.js middleware guide](https://expressjs.com/en/guide/using-middleware.html)
- [Input validation with express-validator](https://express-validator.github.io/docs/)
- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [Node.js security best practices](https://nodejs.org/en/learn/getting-started/security-best-practices)
