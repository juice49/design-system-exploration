// TODO: Docz can't resolve this import, which is... problematic.
import theme from './theme'

const theme = {
  useCustomProperties: false,
  colors: {
    background: 'transparent',
    primary: 'goldenrod'
  }
}

export default {
  typescript: true,
  src: './src',
  themeConfig: theme
}
