import React from 'react'
import randomColour from './colour-gen'
import useRerender from './useRerender'

const Function = () => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>Function</div>
    </div>
  )
}

const memo = Component => props => {
  const keys = Object.keys(props).sort()
  const values = keys.map(key => props[key])
  return React.useMemo(() => <Component {...props} />, [...keys, ...values])
}

const Memo = memo(Function)

export default () => {
  useRerender()

  return (
    <React.Fragment>
      <Function prop="unchanged" />
      <Memo prop="unchanged" />
    </React.Fragment>
  )
}
