import React from 'react'
import randomColour from '../colour-gen'
const Function = () => {
  return React.createElement(
    'div',
    { style: { backgroundColor: randomColour() } },
    React.createElement('div', {}, 'Function')
  )
}

const Memo = React.memo(() => {
  return React.createElement(
    'div',
    { style: { backgroundColor: randomColour() } },
    React.createElement('div', {}, 'Memo')
  )
})

class Component extends React.Component {
  render() {
    return React.createElement(
      'div',
      { style: { backgroundColor: randomColour() } },
      React.createElement('div', {}, 'Component')
    )
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return React.createElement(
      'div',
      { style: { backgroundColor: randomColour() } },
      React.createElement('div', {}, 'PureComponent')
    )
  }
}

const reducer = state => state + 1

export default () => {
  const [count, increment] = React.useReducer(reducer, 0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      increment()
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [increment])

  return React.createElement(React.Fragment, {}, [
    React.createElement(Function, null, React.createElement('div', null)),
    React.createElement(Memo, null, React.createElement('div', null)),
    React.createElement(Component, null, React.createElement('div', null)),
    React.createElement(PureComponent, null, React.createElement('div', null)),
  ])
}
