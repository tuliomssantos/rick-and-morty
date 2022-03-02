import { useEffect, useState, ChangeEvent } from 'react'

import { Router, useRouter } from 'next/router'

import { useQuery } from 'react-query'

import update from 'immutability-helper'

import Layout from '@/components/layout'
import SearchField from '@/components/search-field'

import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import Pagination from '@mui/material/Pagination'
import Skeleton from '@mui/material/Skeleton'

import { fetchCharacters } from '@/src/services/get-characters'

import { CharactersData, FetchCharactersInput } from '@/src/types'

import * as S from './styles'

export type DisplayStateType = 'rows' | 'grid'

export default function CharactersTemplate() {
  const router = useRouter()

  const [params, setParams] = useState<FetchCharactersInput>({
    page: parseInt(router.query.page as string) || 1,
  })

  const [display] = useState<DisplayStateType>('rows')

  const [isLoading, setLoading] = useState(false)

  const { data } = useQuery<CharactersData, Error>(
    ['GetCharacters', params],
    async () => await fetchCharacters(params),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: true,
    }
  )

  useEffect(() => {
    const startChangeRouteHandler = () => {
      setLoading(true)
    }

    const endChangeRouteHandler = () => {
      setLoading(false)
    }

    Router.events.on('routeChangeStart', startChangeRouteHandler)
    Router.events.on('routeChangeComplete', endChangeRouteHandler)
    Router.events.on('routeChangeError', endChangeRouteHandler)

    return () => {
      Router.events.off('routeChangeStart', startChangeRouteHandler)
      Router.events.on('routeChangeComplete', endChangeRouteHandler)
      Router.events.on('routeChangeError', endChangeRouteHandler)
    }
  }, [])

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setParams(preState =>
      update(preState, {
        page: { $set: value },
      })
    )

    window.scrollTo({ top: 0, behavior: 'smooth' })

    router.push(`/?page=${value}`, undefined, { shallow: true })
  }

  const handleSearchChange = (name: string) => {
    setParams({
      page: 1,
      filter: {
        name,
      },
    })

    router.push(`/?page=${1}`, undefined, { shallow: true })
  }

  return (
    <Layout>
      <S.Wrapper>
        <SearchField handleSearchChange={handleSearchChange} />
        <S.DataGridWrapper display={display}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {data?.characters.results.map(character => (
                <S.Card key={character.id}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={character.image}
                      image={character.image}
                    />
                    <S.CardContent>
                      <Typography variant="h6">{character.name}</Typography>
                      <Typography variant="body2">
                        {character.status}
                      </Typography>
                      <Typography variant="body2">
                        {character.species}
                      </Typography>
                      <Typography variant="body2">
                        {character.location.name}
                      </Typography>
                    </S.CardContent>
                  </CardActionArea>
                </S.Card>
              ))}
            </>
          )}
        </S.DataGridWrapper>
        <S.PaginationWrapper>
          <Pagination
            page={params.page}
            count={data?.characters.info.pages}
            onChange={handlePageChange}
          />
        </S.PaginationWrapper>
      </S.Wrapper>
    </Layout>
  )
}

export const Loading = () => (
  <>
    {Array.from({ length: 12 }).map((_, index) => (
      <S.Card key={index}>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        <S.CardContent>
          <Skeleton variant="text" height={32} />

          <Skeleton variant="text" height={20} />

          <Skeleton variant="text" height={20} />
        </S.CardContent>
      </S.Card>
    ))}
  </>
)
