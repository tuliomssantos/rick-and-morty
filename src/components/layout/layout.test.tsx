import { renderWithTheme } from '@/src/utils/renderWithTeme'

import { screen } from '@testing-library/react'

/*
Test Recipe
- What my component renders
- If based on props it renders different things, test the different renderings.
- If based on properties it behaves differently, test the different behaviors.
- Test what the component DOES when the user interacts with it.

What’s Worth Testing?
- Will the test have to duplicate exactly the application code? This will make it brittle.
- Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
- From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?
*/

import Layout from '.'

const ChildComponent = () => {
  return <div data-testid="child-component">I&apos;m first child</div>
}

const ChildComponent2 = () => {
  return <div data-testid="child-component">I&apos;m first child</div>
}

const ChildComponent3 = () => {
  return <div data-testid="child-component">I&apos;m first child</div>
}

describe('<Layout />', () => {
  it('should render the header', () => {
    renderWithTheme(
      <Layout>
        <ChildComponent />
      </Layout>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('should render the footer', () => {
    renderWithTheme(
      <Layout>
        <ChildComponent />
      </Layout>
    )

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should render child component', () => {
    renderWithTheme(
      <Layout>
        <ChildComponent />
      </Layout>
    )

    expect(screen.getByTestId('child-component')).toBeInTheDocument()
  })

  it('should render all the children', () => {
    renderWithTheme(
      <Layout>
        <ChildComponent />
        <ChildComponent2 />
        <ChildComponent3 />
      </Layout>
    )

    expect(screen.getAllByTestId('child-component').length).toBe(3)
  })
})
