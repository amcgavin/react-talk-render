import React from 'react'
import randomColour from '../colour-gen'
import useRerender from '../useRerender'
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

export default () => {
  useRerender()
  return (
    <React.Fragment>
      <Function>
        <div />
      </Function>
      <Component>
        <div />
      </Component>
      <Memo>
        <div />
      </Memo>
      <PureComponent>
        <div />
      </PureComponent>
    </React.Fragment>
  )
}
