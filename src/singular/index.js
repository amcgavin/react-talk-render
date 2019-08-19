import ComplexProps from './ComplexProps'
import Functions from './Functions'
import NoProps from './NoProps'
import SimpleProps from './SimpleProps'
import UseCallback from './UseCallback'

// eslint-disable-next-line import/no-webpack-loader-syntax
import ComplexPropsSrc from '!!raw-loader!./ComplexProps.js'

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
  Functions,
  NoProps,
  SimpleProps,
  UseCallback,
  ComplexPropsSrc,
  FunctionsSrc,
  NoPropsSrc,
  SimplePropsSrc,
  UseCallbackSrc,
}
