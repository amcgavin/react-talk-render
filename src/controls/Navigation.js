import React from 'react'

export default React.memo(({ title, next, previous }) => (
  <div className="navigation">
    <button onClick={previous}>Back</button>
    <h2>{title}</h2>
    <button onClick={next}>Next</button>
  </div>
))
