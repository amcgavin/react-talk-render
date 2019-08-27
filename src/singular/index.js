import ComplexProps from './ComplexProps'
import ComplexProps2 from './ComplexProps2'
import ComplexProps3 from './ComplexProps3'
import Functions from './Functions'
import NoProps from './NoProps'
import SimpleProps from './SimpleProps'
import UseCallback from './UseCallback'

// eslint-disable-next-line import/no-webpack-loader-syntax
import ComplexPropsSrc from '!!raw-loader!./ComplexProps.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import ComplexPropsSrc2 from '!!raw-loader!./ComplexProps2.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import ComplexPropsSrc3 from '!!raw-loader!./ComplexProps3.js'

// eslint-disable-next-line import/no-webpack-loader-syntax
import FunctionsSrc from '!!raw-loader!./Functions.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import NoPropsSrc from '!!raw-loader!./NoProps.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimplePropsSrc from '!!raw-loader!./SimpleProps.js'
// eslint-disable-next-line import/no-webpack-loader-syntax
import UseCallbackSrc from '!!raw-loader!./UseCallback.js'

export default {
  ComplexProps,
  ComplexProps2,
  ComplexProps3,
  Functions,
  NoProps,
  SimpleProps,
  UseCallback,
  ComplexPropsSrc,
  ComplexPropsSrc2,
  ComplexPropsSrc3,
  FunctionsSrc,
  NoPropsSrc,
  SimplePropsSrc,
  UseCallbackSrc,
}
