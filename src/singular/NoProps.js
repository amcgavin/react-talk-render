import React from 'react'
import randomColour from '../colour-gen'

export const Function = () => {
  return <div style={{ backgroundColor: randomColour() }}>NoProps - Function</div>
}

export const Memo = React.memo(() => {
  return <div style={{ backgroundColor: randomColour() }}>NoProps - Memo</div>
})

export class Component extends React.Component {
  render() {
    return <div style={{ backgroundColor: randomColour() }}>NoProps - Component</div>
  }
}
export class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: randomColour() }}>NoProps - PureComponent</div>
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
  return (
    <div>
      <Function />
      <Memo />
      <Component />

      <PureComponent />
    </div>
  )
}
