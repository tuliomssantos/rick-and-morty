import type { NextPage, GetServerSideProps } from 'next'

import { fetchCharacters } from '@/src/services/get-characters'
import { numberfy } from '@/src/utils/numberfy'
import { dehydrate, QueryClient } from 'react-query'

import { FetchCharactersInput } from '@/src/types/'

import CharactersTemplate from '@/src/templates/characters-template'

const HomePage: NextPage = () => {
  return <CharactersTemplate />
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async context => {
  const page = numberfy(context.query.page, 1)

  const params: FetchCharactersInput = {
    page,
  }

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(
    ['GetCharacters', params],
    async () => await fetchCharacters(params)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
