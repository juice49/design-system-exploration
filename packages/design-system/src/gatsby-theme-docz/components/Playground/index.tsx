import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Playground as DoczPlayground } from 'gatsby-theme-docz/src/components/Playground/index'

// TODO: Docz can't resolve this import, which is... problematic.
//import theme from '../../../theme'

const theme = {
  // useCustomProperties: false,
  colors: {
    background: 'transparent',
    primary: 'goldenrod'
  }
}

export const Playground = props => (
  <ThemeProvider theme={theme}>
    <DoczPlayground {...props} />
  </ThemeProvider>
)
