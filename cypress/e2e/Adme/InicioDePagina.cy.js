///<reference types="cypress" />



describe("Primer inicio", () => {

    it("Iniciando en Adme", () => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        
    
    })

})