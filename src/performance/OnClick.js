import React from 'react'
import useRerender from '../useRerender'
import randomColour from '../colour-gen'
const Function = React.memo(({ childCount = 1000, onClick }) => {
  return (
    <div onClick={onClick}>
      {childCount > 0 && <Function childCount={childCount - 1} onClick={onClick} />}
    </div>
  )
})

export default () => {
  useRerender()
  const onClick = event => {
    // do something
  }
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <Function childCount={1000} onClick={onClick} />
    </div>
  )
}
