import Redux from './Redux'
import Redux2 from './Redux2'
import Redux3 from './Redux3'

// eslint-disable-next-line import/no-webpack-loader-syntax
import ReduxSrc from '!!raw-loader!./Redux.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import Redux2Src from '!!raw-loader!./Redux2.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import Redux3Src from '!!raw-loader!./Redux3.js'

export default {
  Redux,
  Redux2,
  Redux3,
  Redux2Src,
  ReduxSrc,
  Redux3Src,
}
