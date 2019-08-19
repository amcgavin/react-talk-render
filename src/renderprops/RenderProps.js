import React from 'react'
import randomColour from '../colour-gen'

export const Function = () => {
  return <div style={{ backgroundColor: randomColour() }}><div>RenderProps -  Function</div></div>
}

export const Memo = React.memo(() => {
  return <div style={{ backgroundColor: randomColour() }}><div>RenderProps -  Memo</div></div>
})

export class Component extends React.Component {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>Component</div></div>
  }
}
export class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>RenderProps -  PureComponent</div></div>
  }
}

const reducer = state => state + 1

const Renderer = ({ render }) => render()

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
    <React.Fragment>
      <Renderer render={() => <Function />} />
      <Renderer render={() => <Memo />} />
      <Renderer render={() => <Component />} />
      <Renderer render={() => <PureComponent />} />
    </React.Fragment>
  )
}
