import React from 'react'
import randomColour from '../colour-gen'

const Function = ({ func }) => {
  return <div style={{ backgroundColor: randomColour() }}>UseCallback - Function</div>
}

const Memo = React.memo(({ func }) => {
  return <div style={{ backgroundColor: randomColour() }}>UseCallback - Memo</div>
})

class Component extends React.Component {
  render() {
    return <div style={{ backgroundColor: randomColour() }}>UseCallback - Component</div>
  }
}

class PureComponent extends React.PureComponent {
  render() {
    return <div style={{ backgroundColor: randomColour() }}>UseCallback - PureComponent</div>
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
  const func = React.useCallback(() => {}, [])

  return (
    <div>
      <Function func={func} />
      <Memo func={func} />
      <Component func={func} />
      <PureComponent func={func} />
    </div>
  )
}
