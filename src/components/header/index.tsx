import Image from 'next/image'

import * as S from './styles'

export default function Header() {
  return (
    <S.Wrapper>
      <S.AppBar position="static" enableColorOnDark>
        <S.Toolbar>
          <S.DrawerButton>
            <Image
              priority
              src="/images/portal.png"
              alt="Logo"
              width={48}
              height={40}
            />
          </S.DrawerButton>
          <S.Box>
            <S.WrapperImage>
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
