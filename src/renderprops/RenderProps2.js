import React from 'react'
import randomColour from '../colour-gen'

const counts = {
  Function: 0,
  Memo: 0,
  Component: 0,
  PureComponent: 0,
}

export const Function = () => {
  counts.Function += 1
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function - {counts.Function}</div>
    </div>
  )
}

export const Memo = React.memo(() => {
  counts.Memo += 1
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Memo - {counts.Memo}</div>
    </div>
  )
})

export class Component extends React.Component {
  render() {
    counts.Component += 1
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>Component {counts.Component}</div>
      </div>
    )
  }
}
export class PureComponent extends React.PureComponent {
  render() {
    counts.PureComponent += 1
    return (
      <div style={{ backgroundColor: randomColour() }}>
        <div>PureComponent - {counts.PureComponent}</div>
      </div>
    )
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
    <React.Fragment>
      <Renderer render={() => <Function />} />
      <Renderer render={() => <Memo />} />
      <Renderer render={() => <Component />} />
      <Renderer render={() => <PureComponent />} />
    </React.Fragment>
  )
}
