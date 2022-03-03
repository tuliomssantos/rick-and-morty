import { graphql } from 'msw'

const graphqlClient = graphql.link('https://rickandmortyapi.com/graphql')

import { charactersData } from '../data/characthers-data'

export const handlers = [
  graphqlClient.query('GetCharacters', (req, res, ctx) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const page = req.url.searchParams.get('page') //to-do: handle requests for many pages

    return res(ctx.data(charactersData.data))
  }),
]
