import React from 'react'

export default React.memo(({ start, next, previous }) => {
  React.useEffect(() => {
    const handler = event => {
      let handled = true
      switch (event.keyCode) {
        case 39: // right
          next()
          break
        case 37: // left
          previous()
          break
        case 32: // space
          start()
          break
        default:
          handled = false
      }
      if (handled) {
        event.stopPropagation()
        event.preventDefault()
      }
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [next, previous, start])
  return null
})
