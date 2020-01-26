/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

interface Props {
  /**
   * The text.
   */
  children: React.ReactNode,
  className?: string,
  sx?: any
}

const Text: React.FC<Props> = ({ children, className, sx }) => (
  <span
    className={className}
    sx={{
      ...sx,
      display: 'inline-block',
      bg: 'yellow'
    }}
  >
    {children}
  </span>
)

export default Text
