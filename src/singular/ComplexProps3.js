import React from 'react'
import randomColour from '../colour-gen'

const Function = ({ object, array, func }) => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

const Memo = React.memo(({ object, array, func }) => {
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
      <Function func={() => {}} />
      <Memo func={() => {}} />
      <Component func={() => {}} />
      <PureComponent func={() => {}} />
    </React.Fragment>
  )
}
