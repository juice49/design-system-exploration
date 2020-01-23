import React from 'react'

interface Props {
  /**
   * The text.
   */
  children: React.ReactNode
}

const Text: React.FC<Props> = ({ children }) => (
  <span>{children}</span>
)

export default Text
