import React from 'react'
import randomColour from '../colour-gen'
import useRerender from '../useRerender'
const Function = ({ func }) => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

const Memo = React.memo(({ func }) => {
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

export default () => {
  useRerender()
  const func = React.useCallback(() => {}, [])

  return (
    <React.Fragment>
      <Function func={func} />
      <Memo func={func} />
      <Component func={func} />
      <PureComponent func={func} />
    </React.Fragment>
  )
}
