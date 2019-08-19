import React from 'react'
import randomColour from '../colour-gen'

export const Function = () => {
  return <div style={{ backgroundColor: randomColour() }}><div>RenderProps4 -  Function</div></div>
}

export const Memo = React.memo(() => {
  return <div style={{ backgroundColor: randomColour() }}><div>RenderProps4 -  Memo</div></div>
})

export class Component extends React.Component {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>Component</div></div>
  }
}
export class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>RenderProps4 -  PureComponent</div></div>
  }
}

const reducer = state => state + 1

const Renderer = React.memo(({ render }) => (
  <div style={{ backgroundColor: randomColour() }}>{render()}</div>
))

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
  const fn = React.useCallback(() => <Function />, [])
  const memo = React.useCallback(() => <Memo />, [])
  const component = React.useCallback(() => <Component />, [])
  const pureComponent = React.useCallback(() => <PureComponent />, [])
  return (
    <React.Fragment>
      <Renderer render={fn} />
      <Renderer render={memo} />
      <Renderer render={component} />
      <Renderer render={pureComponent} />
    </React.Fragment>
  )
}
