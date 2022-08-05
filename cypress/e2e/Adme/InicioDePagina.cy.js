///<reference types="cypress" />



describe("Primer inicio", () => {

    it("Iniciando en Adme", () => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        
        cy.get(".navbar-nav > :nth-child(1) > .page-scroll").should('be.visible').click()
        cy.wait(3000)
        cy.get(".navbar-nav > :nth-child(2) > .page-scroll").should("be.visible").click()
    })

})