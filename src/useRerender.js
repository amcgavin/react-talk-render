import React from 'react'
const reducer = (state, action) => {
  if (action === 'increment') return state + 1
  return state
}

export default () => {
  const [count, dispatch] = React.useReducer(reducer, 0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch('increment')
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [dispatch])
}
