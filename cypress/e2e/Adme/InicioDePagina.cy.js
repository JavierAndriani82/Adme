import PaginaPrincipalCy from "../../support/Class_primeraPagina/PaginaPrincipal.cy"
///<reference types="cypress" />
import "cypress-real-events/support";


describe("Primer inicio", () => {
    beforeEach(() => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        })
    it.only("Iniciando en Adme", () => {
        
        PaginaPrincipalCy.Boton()
        //PaginaPrincipalCy.Boton2()
    })

    /*it("Panatalla Agencias", () => {
        PaginaPrincipalCy.Boton3()
    })

    it("Panatalla Inversores", () => {
        PaginaPrincipalCy.Boton4()
    })*/

})
