import PaginaPrincipalCy from "../../support/Class/PaginaPrincipal.cy"
///<reference types="cypress" />


describe("Primer inicio", () => {
    beforeEach(() => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        let tiempo=3000
    })
    it("Iniciando en Adme", () => {
        
        PaginaPrincipalCy.Boton()
        PaginaPrincipalCy.Boton2()

    })

    it("Panatalla Inversores", () => {
        PaginaPrincipalCy.Boton3()
    })

    it("Panatalla Agencias", () => {
        PaginaPrincipalCy.Boton4()
    })


    /*it("Validando paginas", () => {
        cy.Click(":nth-child(4) > .page-scroll", 1000)
        cy.get(".input-newsletter").type("prueba1@gmail.com")
        cy.Click(".disabled", 0)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })*/

})
