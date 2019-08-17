import React from 'react'
import NoProps from './singular/NoProps'
import SimpleProps from './singular/SimpleProps'
import ComplexProps from './singular/ComplexProps'
import Functions from './singular/Functions'
import UseCallback from './singular/UseCallback'
import Children from './children/Children'
import NestedChildren from './children/NestedChildren'

function App() {
  return (
    <div>
      <NestedChildren />
    </div>
  )
}

export default App
