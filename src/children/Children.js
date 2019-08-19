import React from 'react'
import randomColour from '../colour-gen'

export const Function = () => {
  return <div style={{ backgroundColor: randomColour() }}><div>Children -  Function</div></div>
}

export const Memo = React.memo(() => {
  return <div style={{ backgroundColor: randomColour() }}><div>Children -  Memo</div></div>
})

export class Component extends React.Component {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>Component</div></div>
  }
}
export class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>Children -  PureComponent</div></div>
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
