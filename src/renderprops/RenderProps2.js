import React from 'react'
import randomColour from '../colour-gen'

export const Function = () => {
  return <div style={{ backgroundColor: randomColour() }}>RenderProps2 - Function</div>
}

export const Memo = React.memo(() => {
  return <div style={{ backgroundColor: randomColour() }}>RenderProps2 - Memo</div>
})

export class Component extends React.Component {
  render() {
    return <div style={{ backgroundColor: randomColour() }}>RenderProps2 - Component</div>
  }
}
export class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: randomColour() }}>RenderProps2 - PureComponent</div>
  }
}

const reducer = state => state + 1

const Renderer = ({ render }) => <div style={{ backgroundColor: randomColour() }}>{render()}</div>

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
  return (
    <div>
      <Renderer render={() => <Function />} />
      <Renderer render={() => <Memo />} />
      <Renderer render={() => <Component />} />
      <Renderer render={() => <PureComponent />} />
    </div>
  )
}
