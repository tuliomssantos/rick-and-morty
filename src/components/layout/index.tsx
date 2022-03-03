import Typography from '@mui/material/Typography'
import Header from '../header'

import * as S from './styles'

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.PageContainer>
      <S.ContentWrapper>
        <Header />
        {children}
        <S.Footer data-testid="footer">
          <S.FooterContentWrapper>
            <Typography variant="body2">
              Made with ❤️ by&nbsp;
              <S.GithubLink href="https://github.com/tuliomssantos">
                tuliomssantos
              </S.GithubLink>
            </Typography>
            <Typography variant="body2">
              For educational purposes only
            </Typography>
          </S.FooterContentWrapper>
        </S.Footer>
      </S.ContentWrapper>
    </S.PageContainer>
  )
}
