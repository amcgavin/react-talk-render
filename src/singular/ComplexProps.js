import React from 'react'
import randomColour from '../colour-gen'
import useRerender from '../useRerender'
const Function = ({ object, array, func }) => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

const Memo = React.memo(({ object, array, func }) => {
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

export default () => {
  useRerender()
  // const lhs = {a: 1}
  // const rhs = {a: 1}
  // lhs === rhs ?
  return (
    <React.Fragment>
      <Function object={{ key: 'value' }} />
      <Memo object={{ key: 'value' }} />
      <Component object={{ key: 'value' }} />
      <PureComponent object={{ key: 'value' }} />
    </React.Fragment>
  )
}
