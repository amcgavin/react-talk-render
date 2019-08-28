import React from 'react'
import randomColour from '../colour-gen'
import useRerender from '../useRerender'
const Memo = React.memo(({ text }) => {
  return (
    <div style={{ backgroundColor: randomColour() }}>
      <div>{text}</div>
    </div>
  )
})

const Renderer = ({ render }) => {
  const [text, dispatch] = React.useReducer((state, action) => {
    console.log('Key pressed!')
    if (action < 10) return state
    return state + String.fromCharCode(action)
  }, '')
  React.useEffect(() => {
    const handler = event => {
      dispatch(event.keyCode)
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [dispatch])
  return <div style={{ backgroundColor: randomColour() }}>{render(text)}</div>
}

export default () => {
  useRerender()
  const fn = React.useCallback(text => <Memo text={text} />, [])
  return (
    <React.Fragment>
      <Renderer render={fn} />
    </React.Fragment>
  )
}
