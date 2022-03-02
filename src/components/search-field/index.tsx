import { useDebouncedCallback } from 'use-debounce'

import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'

import SearchIcon from '@mui/icons-material/Search'

import * as S from './styles'

export type SearchFieldProps = {
  handleSearchChange: (name: string) => void
  handleSearchLoading: () => void
  searchLoading: boolean
}

export default function SearchField({
  handleSearchChange,
  handleSearchLoading,
  searchLoading,
}: SearchFieldProps) {
  const debounced = useDebouncedCallback(
    // function
    value => {
      handleSearchChange(value)
    },
    // delay in ms
    1000
  )

  return (
    <S.Wrapper>
      <TextField
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          // endAdornment: {searchLoading ? <CircularProgress /> : null},
          endAdornment: <>{searchLoading ? <CircularProgress /> : null}</>,
        }}
        variant="outlined"
        fullWidth
        onChange={e => {
          handleSearchLoading()
          debounced(e.target.value)
        }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onKeyUp={(e: any) => {
          if (e.key === 'Enter') {
            e.target.blur()
          }
        }}
      />
    </S.Wrapper>
  )
}
