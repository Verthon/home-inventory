describe('Product creation process', () => {
  it('given user is logged in when fill the create product form then redirect to product list', () => {
    cy.intercept('GET', `**/rest/v1/categories?select=*`, {
      statusCode: 200,
      body: [
        {
          id: 1,
          created_at: '2022-07-08 14:42:00+00',
          edited_at: '2022-07-08 14:42:00+00',
          name: 'Jams',
          short_description: 'Fruit Jams',
          long_description: null,
        },
        {
          id: 2,
          created_at: '2022-07-10 15:30:23+00',
          edited_at: '2022-07-10 15:30:23+00',
          name: 'Honeys',
          short_description: 'Honeys, bee feathers and propolis',
          long_description: null,
        },
      ],
    }).as('getCategories')
    cy.intercept('POST', `**/rest/v1/products`, {
      statusCode: 200,
      body: {},
    }).as('postProduct')
    cy.intercept('GET', '**/rest/v1/boxes?select=*', {
      statusCode: 200,
      body: [
        {
          id: 1,
          created_at: '2022-07-09 06:08:01+00',
          edited_at: null,
          box_name: 'A1',
        },
      ],
    }).as('getBoxes')
    cy.clock(Date.UTC(2018, 1, 1), ['Date'])

    cy.visit('/create')
    cy.get('[name=productName]').type('Dandelion honey')
    cy.get('[name=shortDescription]').type(
      'Honey partially crystallized, 1kg jar'
    )
    cy.get('[name=quantity]').type('3')
    cy.get('[aria-label=productCategory]').click()
    cy.contains('Honeys').click()
    cy.get('[aria-label=productBox]').click()
    cy.contains('A1').click()
    cy.get('[aria-label="Expiry date"]').click()
    cy.get('[aria-label="5 February 2018"]').click()
    cy.get('form').submit()

    cy.url().should('include', 'list')
  })
})
