import { useRouter } from 'next/router'

import Image from 'next/image'

import * as S from './styles'

export default function Header() {
  const router = useRouter()

  return (
    <S.Wrapper data-testid="header">
      <S.AppBar position="static" enableColorOnDark>
        <S.Toolbar>
          <S.DrawerButton data-testid="menu-button">
            <Image
              priority
              src="/images/portal.png"
              alt="Logo"
              width={48}
              height={40}
            />
          </S.DrawerButton>
          <S.Box
            onClick={() => {
              router.push({
                pathname: '/',
                query: {
                  page: 1,
                },
              })
            }}
          >
            <S.WrapperImage data-testid="logo">
              <Image
                priority
                src="/images/rick_and_morty_logo.svg"
                alt="Logo"
                layout="fill"
              />
            </S.WrapperImage>
          </S.Box>
        </S.Toolbar>
      </S.AppBar>
    </S.Wrapper>
  )
}
