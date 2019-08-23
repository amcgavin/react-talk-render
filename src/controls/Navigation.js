import React from 'react'

export default React.memo(({ title, next, previous }) => (
  <div>
    <button onClick={previous}>Back</button>
    {title}
    <button onClick={next}>Next</button>
  </div>
))
