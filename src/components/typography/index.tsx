import { styled } from '@mui/material/styles'

import Typography from '@mui/material/Typography'

import { ColorVariant, ColorSubvariant } from '@/src/types'

export type TypographyProps = {
  colorVariant?: ColorVariant
  colorSubvariant?: ColorSubvariant
}

export default styled(Typography, {
  shouldForwardProp: prop =>
    prop !== 'colorVariant' && prop !== 'colorSubvariant',
})<TypographyProps>(
  ({ theme, colorVariant, colorSubvariant = 'dark' }) => `
  ${
    colorVariant &&
    `
      color: ${theme.palette[colorVariant][colorSubvariant]};
    `
  }
  `
)
