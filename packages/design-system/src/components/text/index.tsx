import styled from 'styled-components'
import { SpaceProps, ColorProps, color, space } from 'styled-system'

interface Props extends SpaceProps, ColorProps {}

const Text = styled.span<Props>`
  display: inline-block;
  ${space}
  ${color}
`

export default Text
