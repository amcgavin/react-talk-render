import React from 'react'
import { connect, Provider, useDispatch, useSelector } from 'react-redux'
import randomColour from '../colour-gen'
import { createStore } from 'redux'

const Function = () => {
  const otherProp = useSelector(state => state.otherProp.something)
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

const Memo = React.memo(() => {
  const otherProp = useSelector(state => state.otherProp.something)
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Memo</div>
    </div>
  )
})

class UnconnectedComponent extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>Component</div>
      </div>
    )
  }
}

const Component = connect(state => ({ otherProp: state.otherProp.something }))(UnconnectedComponent)

class UnconnectedPureComponent extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>PureComponent</div>
      </div>
    )
  }
}

const PureComponent = connect(state => ({ otherProp: state.otherProp.something }))(
  UnconnectedPureComponent
)

const initialState = {
  count: 0,
  otherProp: { something: 1 },
}
const reduxStore = createStore((state = initialState, action) => {
  if (action.type === 'count') {
    return { ...state, count: state.count + 1, otherProp: { something: state.otherProp.something } }
  }
  if (action.type === 'other') {
    return { ...state, otherProp: { something: Math.random() } }
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
