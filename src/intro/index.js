// eslint-disable-next-line import/no-webpack-loader-syntax
import IntroductionSrc from '!!raw-loader!./Introduction.js'

// eslint-disable-next-line import/no-webpack-loader-syntax
import randomColourSrc from '!!raw-loader!../colour-gen.js'

// eslint-disable-next-line import/no-webpack-loader-syntax
import useRerenderSrc from '!!raw-loader!../useRerender.js'

export default {
  IntroductionSrc,
  useRerenderSrc,
  randomColourSrc,
}
