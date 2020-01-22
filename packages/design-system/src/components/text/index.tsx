import React from 'react'

interface Props {
  /**
   * The text.
   */
  children: React.ReactNode
}

const Text: React.FC<Props> = ({ children }) => (
  <span>text: {children}</span>
)

export default Text
