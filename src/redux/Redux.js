import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import randomColour from '../colour-gen'
import { createStore } from 'redux'

const Function = () => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

const Memo = React.memo(() => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Memo</div>
    </div>
  )
})

class Component extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>Component</div>
      </div>
    )
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>PureComponent</div>
      </div>
    )
  }
}

const initialState = {
  count: 0,
  otherProp: 1,
}
const reduxStore = createStore((state = initialState, action) => {
  if (action.type === 'count') {
    return { ...state, count: state.count + 1 }
  }
  if (action.type === 'other') {
    return { ...state, otherProp: Math.random() }
  }
  return state
})

const Main = () => {
  const dispatch = useDispatch()
  useSelector(state => state.count)
  React.useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'count' })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [dispatch])

  return (
    <React.Fragment>
      <Function />
      <Memo />
      <Component />
      <PureComponent />
    </React.Fragment>
  )
}

export default () => (
  <Provider store={reduxStore}>
    <Main />
  </Provider>
)
