// gonna write test here
describe('Inputs and submit button', () => {
    it('navigates to the site', () => {
        cy.visit("http://localhost:3000/") // remote control operation here to access the site
        // assert to make sure we went to crrect site
        cy.url().should('include', 'localhost')
    })

    it('submit button is disabled', () => {
        cy.get('#submitBtn').should('be.disabled')
    })
    it('can type in the text fields and succesfully submit a user', () =>{
        cy.get('input[name="name"').type('Miah')
        cy.get('input[name="email"').type('miah@miah.com')
        cy.get('input[name="password"').type('dunsparce!')
        cy.get('input[name="terms"').click()
        cy.get('#submitBtn').click()
        cy.get('.user-container').contains('Miah')
    })
    it('checks for the error messages if a field is left empty', () => {
        cy.get('input[name="name"').type('Mi')
        cy.get('input[name="email"').type('Mi')
        cy.get('input[name="password"').type('miah')
        cy.get('.errors').contains('Name must be at least 3 characters') 
        cy.get('.errors').contains('Email must be valid') 
        cy.get('.errors').contains('Password must have atleast 6 characters') 
    })
    
})