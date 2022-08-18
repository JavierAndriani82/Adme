///<reference types="cypress" />


describe("Primer inicio", () => {
    beforeEach(() => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        let tiempo=3000
    })
    it("Iniciando en Adme", () => {
        
    cy.Click(".navbar-nav > :nth-child(1) > .page-scroll", 1500)
    cy.Click('.navbar-nav > :nth-child(2) > .page-scroll', 1500)
    cy.Click(":nth-child(3) > .page-scroll", 1500)

    })

    it("Validando paginas", () => {
        cy.Click(":nth-child(4) > .page-scroll", 1000)
        cy.get(".input-newsletter").type("prueba1@gmail.com")
        cy.Click(".disabled", 0)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

})
