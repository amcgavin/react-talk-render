import React from 'react'
import useRerender from '../useRerender'
import randomColour from '../colour-gen'
const Function = React.memo(({ childCount = 1000, onChange }) => {
  return (
    <div>
      {childCount > 0 && <Function childCount={childCount - 1} onChange={onChange} />}
    </div>
  )
})

export default () => {
  const [value, setValue] = React.useState('')
  const onChange = event => {
    setValue(event.target.value)
  }
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <Function childCount={10000} onChange={onChange} />
      <div>
      <input value={value} onChange={onChange} />
      </div>
    </div>
  )
}
