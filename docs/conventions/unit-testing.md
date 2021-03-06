# Unit Testing

Conventions for unit testing

## React Components

### Basic testing coverage should cover:

- What my component renders
- If based on props it renders different things, test the different renderings.
- If based on properties it behaves differently, test the different behaviors.
- Test what the component DOES when the user interacts with it.

### What’s Worth Testing?

- Will the test have to duplicate exactly the application code? This will make it brittle.
- Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
- From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?

## Important notions

- Don't mock requests (fetch, axios, graphql). Use a mock server. [See 'Stop mocking fetch'](../references.md#stop-mocking-fetch---kent-c-doddshttpskentcdoddscomblogstop-mocking-fetch).
