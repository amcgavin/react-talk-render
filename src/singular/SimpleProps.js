import React from 'react'
import randomColour from '../colour-gen'

const Function = ({ number, string, bool }) => {
  return <div style={{ backgroundColor: randomColour() }}><div>SimpleProps -  Function</div></div>
}

const Memo = React.memo(({ number, string, bool }) => {
  return <div style={{ backgroundColor: randomColour() }}><div>SimpleProps -  Memo</div></div>
})

class Component extends React.Component {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>Component</div></div>
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: randomColour() }}><div>SimpleProps -  PureComponent</div></div>
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
      <Function number={1} string="hello" bool={true} />
      <Memo number={2} string="hello" bool={true} />
      <Component number={3} string="hello" bool={true} />
      <PureComponent number={3} string="hello" bool={true} />
    </React.Fragment>
  )
}
