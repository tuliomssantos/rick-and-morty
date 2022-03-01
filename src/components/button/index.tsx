/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles'

import MaterialButton from '@mui/material/Button'

const buttonModifiers = {
  default: (theme: any) => `
    background: linear-gradient(
      45deg,
      ${theme.palette.primary.main} 30%,
      ${theme.palette.secondary.main} 90%
    );
    color: white;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  `,
  white: (theme: any) => `
    background: #ffffff;
    color: ${theme.palette.primary.main};
    border: 1px solid ${theme.palette.primary.main};

    &:hover {
      //	background: ${theme.palette.primary.light};
    }
  `,
  red: (theme: any) => `
    background: ${theme.palette.primary.main};
    color: #ffffff;
    border: 1px solid #ffffff;

    &:hover {
      background: ${theme.palette.primary.dark};
    }
  `,
  purple: (theme: any) => `
    background: ${theme.palette.secondary.main};
    color: #ffffff;
    border: 1px solid #ffffff;

    &:hover {
      background: ${theme.palette.secondary.dark};
    }
  `,
  disabled: (theme: any) => `
    background: ${theme.palette.neutral.lighter};
    color: ${theme.palette.neutral.light} !important;
    border: 1px solid #ffffff;
    pointer-events: none;
    cursor: not-allowed !important;
  `,
}

type ButtonCustomProps = {
  modifier?: ButtonModifiers
}

export type ButtonModifiers =
  | 'white'
  | 'red'
  | 'purple'
  | 'disabled'
  | 'default'

const Button = styled(MaterialButton)<ButtonCustomProps>(
  ({ theme, modifier = 'default' }) => `
    border: 0;

    height: 48px;
    padding: 0 30px;

    ${modifier && buttonModifiers[modifier](theme)};
  `
)

export default Button
