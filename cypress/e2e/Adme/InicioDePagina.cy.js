import * as PaginaPrincipal from "../../support/Class_primeraPagina/PaginaPrincipal.cy.js"




///<reference types="cypress" />
import "cypress-real-events/support";


describe("Primer inicio", () => {
    beforeEach(() => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        })

    after(() => {
        cy.log("############### Todo esta OK! ################")    
        })
    
    it("Boton Nosotros, Boton Como, Funcionalidades y Marcas", () => {
        
        const Cabecera = new PaginaPrincipal.BotonesCabecera();
        Cabecera.Boton()
        Cabecera.Boton2()
        Cabecera.Boton3()
        Cabecera.Boton4()

    })

    it("Pantalla Agencias", () => {

        const Cabecera2 = new PaginaPrincipal.BotonesCabecera2();
        Cabecera2.Boton5()
    })

    it("Boton Inversores", () => {
        
        const Cabecera3 = new PaginaPrincipal.BotonesCabecera3();
        Cabecera3.Boton6()
    })

})
