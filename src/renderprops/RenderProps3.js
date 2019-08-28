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

const Renderer = React.memo(({ render }) => (
  <div style={{ backgroundColor: randomColour() }}>{render()}</div>
))

export default () => {
  useRerender()

  const func = React.useCallback(() => <Function />, [])
  const memo = React.useCallback(() => <Memo />, [])
  const component = React.useCallback(() => <Component />, [])
  const pureComponent = React.useCallback(() => <PureComponent />, [])
  return (
    <React.Fragment>
      <Renderer render={func} />
      <Renderer render={memo} />
      <Renderer render={component} />
      <Renderer render={pureComponent} />
    </React.Fragment>
  )
}
