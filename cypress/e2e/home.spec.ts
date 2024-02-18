describe('Home page', () => {
  it('given user is logged in when navigate to home then should see welcome page', () => {
    cy.visit('/')

    cy.contains(/welcome/i).should('be.visible')
  })
})
