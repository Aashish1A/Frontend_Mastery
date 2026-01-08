# Redux with React

## Topics to Cover:

- What is Redux and why use it?
- Redux Core Concepts (Store, Actions, Reducers)
- Setting up Redux with React
- React-Redux Library
- useSelector Hook
- useDispatch Hook
- Redux DevTools
- Middleware (Redux Thunk, Redux Saga)
- Redux Toolkit (RTK)
- Async Actions with Redux
- Redux Best Practices
- Redux vs Context API

## Learning Objectives:

- Understand Redux architecture and principles
- Set up Redux in a React application
- Manage complex application state with Redux
- Implement async operations with Redux middleware
- Use Redux Toolkit for modern Redux development

## Practice Areas:

- Basic Redux setup with React
- Creating actions and reducers
- Connecting components to Redux store
- Handling async operations
- Redux Toolkit implementation
- Complex state management scenarios

## Interview Focus:

- Redux vs Context API comparison
- Redux data flow explanation
- When to use Redux
- Redux middleware purpose
- Redux Toolkit advantages
- State normalization in Redux
- Redux performance considerations
- Testing Redux logic

## Key Concepts:

### Three Principles of Redux:

1. **Single Source of Truth** - One store for entire application
2. **State is Read-Only** - Only way to change state is by dispatching actions
3. **Changes are Made with Pure Functions** - Reducers are pure functions

### Redux Flow:

1. UI dispatches an action
2. Store runs reducer function
3. Store saves new state
4. UI re-renders based on new state

### When to Use Redux:

- Complex state logic
- State needed in many components
- Frequent state updates
- Large development teams
- Time-travel debugging needs
