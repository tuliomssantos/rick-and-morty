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
        <S.Footer>Footer</S.Footer>
      </S.ContentWrapper>
    </S.PageContainer>
  )
}
