# Challenge B-03: Testing & Documentation

## Description

Code that isn't tested is code you're just hoping works. In this final backend challenge, you'll write tests for the endpoints you built in B-02, make sure they pass, and update the API documentation to reflect your additions.

Use GitHub Copilot to generate test cases — it's good at this. But don't just accept what it generates blindly. Think about the edge cases: What happens with empty input? With extremely long strings? With missing authentication? With an ID that doesn't exist? The best tests are the ones that catch the bugs you didn't think of.

## Objectives

- Write tests for all new API endpoints implemented in B-02
- Cover both success cases and failure cases (invalid input, unauthorized access, missing resources)
- Run the test suite and ensure all tests pass
- Update the API documentation created in B-00 to include the new endpoints

## Success Criteria

- [ ] Tests written for all new endpoints covering success and error scenarios
- [ ] GitHub Copilot used to assist with test generation
- [ ] All tests pass when the test suite is run
- [ ] API documentation updated to include the new endpoints (method, path, description, request/response examples)

## Learning Resources

- [Testing Express APIs with Jest](https://jestjs.io/docs/getting-started)
- [Supertest for HTTP testing](https://github.com/ladjs/supertest#readme)
- [Test-driven development with Node.js](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing)
- [API documentation best practices](https://swagger.io/resources/articles/documenting-apis-with-swagger/)
