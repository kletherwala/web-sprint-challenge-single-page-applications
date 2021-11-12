describe('Pizza Form', () => {
beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('text box', () => {
        cy.get('textarea[name=instructions]')
    .should('have.value', '')
    .type('testing')
    .should('have.value', 'testing')
    })

    // it('submit button', () => {
    //     cy.get('textarea[name=name]')
    // .should('have.value', '')
    // .type('testing')
    // .should('have.value', 'testing')
    //     cy.get('button[name=order-button]').click()
    // })

})