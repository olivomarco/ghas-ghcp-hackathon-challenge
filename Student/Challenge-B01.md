# Challenge B-01: Feature Design

## Description

Now that you know the codebase, it's time to extend it. Design 2 new backend features that complement the existing application. These should be features that a real product team might actually build — not toy examples.

Here are some ideas to get you started, but you're free to come up with your own:

- **Security audit logging API** — Track user actions, failed login attempts, and suspicious activity. Give administrators visibility into what's happening in the application.
- **Product review analytics endpoint** — Aggregate product ratings, calculate trends, surface sentiment patterns across reviews.
- **User activity dashboard API** — Provide users with their order history, security events (password changes, login locations), and account activity.
- **Admin reporting endpoint** — Sales metrics, security incident summaries, user growth stats — the kind of data an operations team would check every morning.

The design phase matters. Define your API contracts before writing a single line of implementation code: endpoints, HTTP methods, request/response schemas, error cases, and authentication requirements.

If you've tackled Challenge C-00, a backend architecture agent or an API design prompt file can help you think through contracts faster — and keep your designs consistent with the existing codebase patterns.

## Objectives

- Design 2 new backend features that add meaningful functionality to the Juice Shop
- Define complete API contracts: endpoint paths, HTTP methods, request parameters, response schemas
- Document error handling and edge cases for each endpoint
- Specify authentication and authorization requirements

## Success Criteria

- [ ] 2 backend features designed with clear purpose and scope
- [ ] API contracts documented for each feature: endpoint path, HTTP method, request body/params, response schema
- [ ] Error responses defined (what happens on bad input, unauthorized access, missing resources)
- [ ] Authentication requirements specified for each endpoint

## Learning Resources

- [REST API design best practices](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)
- [OpenAPI Specification](https://swagger.io/specification/)
- [HTTP status codes reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [API security best practices (OWASP)](https://owasp.org/API-Security/)
