import React, { useReducer } from 'react'

export const ElefantContext = React.createContext(null)

export const ElefantProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <ElefantContext.Provider value={[state, dispatch]}>{children}</ElefantContext.Provider>
}
