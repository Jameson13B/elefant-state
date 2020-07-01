# Elefant

## Simple Global State Management

> #### Stability, Loyalty, Intelligence, and Reliability

Elefant is a simple, quick, and easy global state management for React projects. In this README you will see
a walkthrough and summary of how Elefant works with your project.

### Three Simple Steps:

1. Create reducer function and initial state.
2. Wrap app in a provider component passing above two items.
3. Use the context/global state in any component with Reacts `useContext()`

### Install

```
npm i elefant-state
```

<hr />

### This project exports two items:

#### `ElefantContext`

The `ElefantContext` is the context object that is passed into Reacts `useContext()` on each component.<br />

#### `ElefantProvider`

The `<ElefantProvider />` makes the state available to any nested components. Since any React component in a React app can use context, most applications will use an `<ElefantProvider />` at the top level, with the entire app inside of it. This component accespts two props.

| Prop           | Type       | Description                                                                           |
| -------------- | ---------- | ------------------------------------------------------------------------------------- |
| `reducer`      | _Function_ | A function that specifies how the application's state changes in response to actions. |
| `initialState` | _Object_   | Optional object to set as the initial state when the gloabl state is created.         |

<hr />

### Example

#### Setup:

> src/State.js

```
export const initialState = { count: 0 }

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrease':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'reset':
      return {
        ...state,
        count: initialState.count
      }
    default:
      return state
  }
}
```

> src/index.js

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initialState, reducer } from './State'
import { ElefantProvider } from 'elefant'

ReactDOM.render(
  <ElefantProvider reducer={reducer} initialState={initialState}>
    <App />
  </ElefantProvider>,
  document.getElementById('root'),
)
```

> src/App.js

```
const App () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
```

#### Use:

> src/Counter.js

```
import React, { useContext } from 'react'
import { ElefantContext } from 'elefant'

export const Counter () => {
  const [state, dispatch] = useContext(ElefantContext)

  const handleDecrease = () => dispatch({ type: 'decrease' })
  const handleIncrease = () => dispatch({ type: 'increase' })
  const handleReset = () => dispatch({ type: 'reset' })

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
```
