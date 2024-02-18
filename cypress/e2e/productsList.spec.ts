describe('Product list', () => {
  it('given user added items to the list when visit list page then can see a full product (name, box-name, quantity) list', () => {
    cy.intercept('GET', `**/rest/v1/products?select=*`, {
      statusCode: 200,
      body: [
        {
          id: 1,
          created_at: '2022-07-08 14:45:40+00',
          edited_at: '2022-07-08 14:45:40+00',
          name: 'Mighty Farm - Strawberry Jam',
          short_description: 'Organic strawberry jam 180g',
          long_description: null,
          categories: {
            id: 1,
            name: 'Jams',
          },
          quantity: 2,
          expiry_date: '2022-11-01',
          boxes: {
            id: 1,
            box_name: 'A2',
          },
        },
        {
          id: 2,
          created_at: '2022-07-10 06:16:03+00',
          edited_at: '2022-07-10 06:16:03+00',
          name: 'Mighty Farm - Gooseberry Jam',
          short_description: 'Organic gooseberry jam 180g',
          long_description: null,
          categories: {
            id: 1,
            name: 'Jams',
          },
          quantity: 1,
          expiry_date: '2022-11-01',
          boxes: {
            id: 1,
            box_name: 'A1',
          },
        },
        {
          id: 3,
          created_at: '2022-07-10 06:18:21+00',
          edited_at: '2022-07-10 06:18:21+00',
          name: 'Mighty Farm - Blueberry Jam',
          short_description: 'Organic blueberry jam 180g',
          long_description: null,
          categories: {
            id: 1,
            name: 'Jams',
          },
          quantity: 3,
          expiry_date: '2022-11-01',
          boxes: {
            id: 1,
            box_name: 'B1',
          },
        },
        {
          id: 4,
          created_at: '2022-07-10 06:21:03+00',
          edited_at: '2022-07-10 06:21:03+00',
          name: 'Mighty Farm - Raspberry Jam',
          short_description: 'Organic raspberry jam 180g',
          long_description: null,
          categories: {
            id: 1,
            name: 'Jams',
          },
          quantity: 1,
          expiry_date: '2022-11-01',
          boxes: {
            id: 1,
            box_name: 'A1',
          },
        },
        {
          id: 5,
          created_at: '2022-07-10 06:22:08+00',
          edited_at: '2022-07-10 06:22:08+00',
          name: 'Mighty Farm - Currant Jam',
          short_description: 'Organic currant jam 180g',
          long_description: null,
          categories: {
            id: 1,
            name: 'Jams',
          },
          quantity: 1,
          expiry_date: '2022-11-01',
          boxes: {
            id: 1,
            box_name: 'A1',
          },
        },
      ],
    }).as('getProducts')

    cy.visit('/list')

    cy.contains('[role="listitem"]', 'Gooseberry Jam')
      .should('exist')
      .and('contain', 'A1')
      .and('contain', 'Mighty Farm - Gooseberry Jam')
      .and('contain', 'one item')

    cy.contains('[role="listitem"]', 'Strawberry Jam')
      .should('exist')
      .and('contain', 'A2')
      .and('contain', 'Mighty Farm - Strawberry Jam')
      .and('contain', '2 items')
  })
})
