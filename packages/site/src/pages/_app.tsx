import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '@cssinjs/design-system/src/theme'

interface Props {
  Component: React.FC,
  pageProps: any
}

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
