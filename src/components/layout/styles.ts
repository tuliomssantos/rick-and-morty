import { styled } from '@mui/material/styles'

import Container from '@mui/material/Container'

export const PageContainer = styled('div')`
  position: relative;
  min-height: 100vh;
`

export const ContentWrapper = styled('div')`
  padding-bottom: 2.5rem;
`

export const Footer = styled('footer')`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
`

export const FooterContentWrapper = styled(Container)``

export const GithubLink = styled('a')`
  display: inline-block;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
`
