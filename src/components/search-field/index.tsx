import { useDebouncedCallback } from 'use-debounce'

import { TextField, InputAdornment } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

import * as S from './styles'

export type SearchFieldProps = {
  handleSearchChange: (name: string) => void
}

export default function SearchField({ handleSearchChange }: SearchFieldProps) {
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
        }}
        variant="outlined"
        fullWidth
        onChange={e => {
          debounced(e.target.value)
        }}
        // onChange={e => {
        //   handleSearchChange(e.target.value)
        // }}
      />
    </S.Wrapper>
  )
}
