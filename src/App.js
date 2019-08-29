import React from 'react'
import './style.css'
import Singular from './singular'
import Redux from './redux'
import Children from './children'
import Renderprops from './renderprops'
import Introduction from './intro'
import Performance from './performance'

import CodeView from './controls/CodeView'
import Navigation from './controls/Navigation'

const path = [
  { src: Introduction.IntroductionSrc, component: null, title: 'Introduction' },
  { src: Introduction.randomColourSrc, component: null, title: 'Random Colour' },
  { src: Introduction.useRerenderSrc, component: null, title: 'Use Rerender' },
  { src: Singular.ComplexPropsSrc, component: Singular.ComplexProps, title: 'Complex Props' },
  { src: Singular.ComplexPropsSrc2, component: Singular.ComplexProps2, title: 'Complex Props 2' },
  { src: Singular.ComplexPropsSrc3, component: Singular.ComplexProps3, title: 'Complex Props 3' },
  {
    src: Singular.SimplePropsSrc,
    component: Singular.SimpleProps,
    title: 'Simple Props',
  },
  { src: Singular.NoPropsSrc, component: Singular.NoProps, title: 'No Props' },
  { src: Singular.FunctionsSrc, component: Singular.Functions, title: 'Functions' },
  { src: Singular.UseCallbackSrc, component: Singular.UseCallback, title: 'Use Callback' },
  { src: Children.ChildrenSrc, component: Children.Children, title: 'Children' },
  { src: Children.ChildrenNonJSXSrc, component: Children.ChildrenNonJSX, title: 'ChildrenNonJSX' },
  { src: Performance.TicksSrc, component: Performance.Ticks, title: 'Ticks' },
  { src: Performance.TicksMemoSrc, component: Performance.TicksMemo, title: 'Ticks Memo' },
  { src: Performance.OnClickSrc, component: Performance.OnClick, title: 'On Click' },
  { src: Performance.OnClickGoodSrc, component: Performance.OnClickGood, title: 'On Click Good' },

  { src: Renderprops.RenderPropsSrc, component: Renderprops.RenderProps, title: 'Render Props' },
  {
    src: Renderprops.RenderProps2Src,
    component: Renderprops.RenderProps2,
    title: 'Render Props 2',
  },
  {
    src: Renderprops.RenderProps3Src,
    component: Renderprops.RenderProps3,
    title: 'Render Props 3',
  },
  {
    src: Renderprops.RenderProps4Src,
    component: Renderprops.RenderProps4,
    title: 'Render Props 4',
  },

  { src: Redux.ReduxSrc, component: Redux.Redux, title: 'Redux' },
  { src: Redux.Redux2Src, component: Redux.Redux2, title: 'Redux 2' },
  { src: Redux.Redux4Src, component: Redux.Redux4, title: 'Redux 4' },
  { src: Redux.Redux3Src, component: Redux.Redux3, title: 'Redux 3' },
]

const reducer = (state, action) => {
  const { step } = state
  if (action === 'increment') return { step: Math.min(path.length - 1, step + 1), start: false }
  if (action === 'decrement') return { step: Math.max(0, step - 1), start: false }
  if (action === 'start') return { ...state, start: !state.start }
  return state
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, { step: 0, start: false })
  const increment = React.useCallback(() => dispatch('increment'), [dispatch])
  const decrement = React.useCallback(() => dispatch('decrement'), [dispatch])
  const startSim = React.useCallback(() => dispatch('start'), [dispatch])

  const { step, start } = state
  const { src, component: Component, title } = path[step]
  return (
    <React.Fragment>
      <div className={start ? 'dark' : ''}>
        <div className="grid-center">
          <div></div>
          <div>
            <Navigation next={increment} previous={decrement} start={startSim} />
            <div className="code-viewer">
              <CodeView showLineNumbers src={src} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {start && (
        <div className="example-modal">
          <div className="example-wrapper">
            <Component />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default App
