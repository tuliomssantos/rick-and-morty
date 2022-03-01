import Button from './'

import { renderWithTheme } from '@/src/utils'

it('renders Button unchanged', () => {
  const { container } = renderWithTheme(<Button />)
  expect(container.firstChild).toMatchSnapshot()
})
