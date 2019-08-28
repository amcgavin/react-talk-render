import React from 'react'
import randomColour from '../colour-gen'
import useRerender from '../useRerender'
export const Function = () => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

export const Memo = React.memo(() => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Memo</div>
    </div>
  )
})

export class Component extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>Component</div>
      </div>
    )
  }
}
export class PureComponent extends React.PureComponent {
  render() {
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>PureComponent</div>
      </div>
    )
  }
}

const Nester = ({ component: Component }) => <Component />

export default () => {
  useRerender()
  return (
    <React.Fragment>
      <Nester component={Function}>
        <div />
      </Nester>
      <Nester component={Memo}>
        <div />
      </Nester>
      <Nester component={Component}>
        <div />
      </Nester>
      <Nester component={PureComponent}>
        <div />
      </Nester>
    </React.Fragment>
  )
}
