import { styled } from '@mui/material/styles'

import MaterialAppBar from '@mui/material/AppBar'
import MaterialToolbar from '@mui/material/Toolbar'
import MaterialIconButton from '@mui/material/IconButton'

import MaterialButtonBase from '@mui/material/ButtonBase'

export const Wrapper = styled('div')`
  flex-grow: 1;
`

export const AppBar = styled(MaterialAppBar)`
  background-color: transparent;

  box-shadow: none;
`

export const Toolbar = styled(MaterialToolbar)``

export const DrawerButton = styled(MaterialIconButton)``

export const Box = styled(MaterialButtonBase)`
  flex-grow: 1;
`

export const WrapperImage = styled('div')(
  ({ theme }) => `
  position: relative;
  width: 200px;
  height: 43px;

    @media screen and (min-width: ${theme.breakpoints.values.sm}px) {
      width: 400px;
      height: 86px;
    }
  `
)
