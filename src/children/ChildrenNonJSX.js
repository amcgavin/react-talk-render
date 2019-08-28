import React from 'react'
import randomColour from '../colour-gen'
import useRerender from '../useRerender'
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

export default () => {
  useRerender()

  return React.createElement(React.Fragment, {}, [
    React.createElement(Function, null, React.createElement('div', null)),
    React.createElement(Memo, null, React.createElement('div', null)),
    React.createElement(Component, null, React.createElement('div', null)),
    React.createElement(PureComponent, null, React.createElement('div', null)),
  ])
}
