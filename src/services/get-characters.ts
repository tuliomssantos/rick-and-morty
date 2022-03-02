import { gql } from 'graphql-request'
import { graphqlClient } from './graphql-client'
import { FetchCharactersInput } from '@/src/types/'

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
      }
      results {
        name
        status
        image
        location {
          name
        }
        species
        id
      }
    }
  }
`

export const fetchCharacters = async ({
  page,
  filter,
}: FetchCharactersInput) => {
  const data = await graphqlClient.request(GET_CHARACTERS, { page, filter })

  return data
}

// export const fetchSurvivors = async ({
//   limit,
//   offset,
//   search,
// }: GetSurvivorInput) =>
//   survivorsGraphqlRequestClient.request(GEL_SURVIVORS_QUERY, {
//     limit,
//     offset,
//     search,
//   })
