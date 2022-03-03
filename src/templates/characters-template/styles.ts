import { styled, Theme } from '@mui/material/styles'

import Container from '@mui/material/Container'

import MaterialCard from '@mui/material/Card'
import MaterialCardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export const Wrapper = styled(Container)(
  ({ theme }) => `
    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};

    @media screen and (min-width: ${theme.breakpoints.values.lg}px) {
      padding: ${theme.spacings.small} 0;
    }
  `
)

export const Card = styled(MaterialCard)(
  ({ theme }) => `
    max-width: 393px;

    @media screen and (min-width: ${theme.breakpoints.values.md}px) {
      max-width: unset;
    }
  `
)

export const CardContent = styled(MaterialCardContent)(
  ({ theme }) => `
  > * {
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.half};
    }
  }
  `
)

export const PaginationWrapper = styled('div')(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacings.xsmall}
  `
)

export const CardTitle = styled(Typography)``

export const DataGridWrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'display',
})<{ display: 'rows' | 'grid' }>(
  ({ theme, display }) => `
    display: grid;

    margin-top: ${theme.spacings.xxsmall};

    ${displayModifiers[display](theme)}
  `
)

export const displayModifiers = {
  rows: (theme: Theme) => `
    grid-template-columns: 1fr;

    row-gap: ${theme.spacings.xxsmall};

    @media screen and (min-width: ${theme.breakpoints.values.sm}px) {
        grid-template-columns: 1fr 1fr;

        column-gap: ${theme.spacings.xxsmall};
    }

    @media screen and (min-width: ${theme.breakpoints.values.md}px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;

      column-gap: ${theme.spacings.xxsmall};
  }
  `,

  grid: (theme: Theme) => `
    grid-template-columns: 1fr 1fr;

    column-gap: ${theme.spacings.xxsmall};
    row-gap: ${theme.spacings.xxsmall};

    @media screen and (min-width: ${theme.breakpoints.values.sm}px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;

    }
  `,
}
