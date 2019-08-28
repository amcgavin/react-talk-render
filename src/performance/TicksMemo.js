import React from 'react'
import useRerender from '../useRerender'
import randomColour from '../colour-gen'
const Function = React.memo(({ childCount = 1000 }) => {
  return <div>{childCount > 0 && <Function childCount={childCount - 1} />}</div>
})

export default () => {
  useRerender()
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <Function childCount={1000} />
    </div>
  )
}
