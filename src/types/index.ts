export type FetchCharactersInput = {
  page: number
  filter?: {
    name?: string
    status?: string
    species?: string
    type?: string
    gender?: string
  }
}

export type CharacterPreviewData = {
  id: string
  image: string
  location: {
    name: string
  }
  name: string
  status: string
  species: string
}

export type CharactersData = {
  characters: {
    info: {
      count: number
      pages: number
    }
    results: Array<CharacterPreviewData>
  }
}

export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'

export type ColorSubvariant = 'dark' | 'light'
