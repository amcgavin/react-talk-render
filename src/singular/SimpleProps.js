import React from 'react'
import randomColour from '../colour-gen'
import useRerender from '../useRerender'
const Function = ({ number, string, bool }) => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

const Memo = React.memo(({ number, string, bool }) => {
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
  return (
    <React.Fragment>
      <Function number={1} string="hello" bool={true} />
      <Memo number={2} string="hello" bool={true} />
      <Component number={3} string="hello" bool={true} />
      <PureComponent number={3} string="hello" bool={true} />
    </React.Fragment>
  )
}
