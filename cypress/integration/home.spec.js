describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Heading!', () => {
    cy.get('h1').contains('Home Page')
  })
})
