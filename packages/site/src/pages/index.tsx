/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Text from '@cssinjs/design-system/src/components/text'

const Page: React.FC = () => (
  <Text
    sx={{
      color: 'primary',
      padding: '100px',
      // backgroundColor: 'red'
    }}
    // as='h1'
  >
    Welcome
  </Text>
)

export default Page
