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
        const Cabecera2 = new PaginaPrincipal.BotonesCabecera2();
        const Cabecera3 = new PaginaPrincipal.BotonesCabecera3();
        const Cabecera4 = new PaginaPrincipal.BotonesCabecera4();

        Cabecera.Boton()
        Cabecera2.Boton2()
        Cabecera3.Boton3()
        Cabecera4.Boton4()

    })

    it("Pantalla Agencias", () => {

        const Cabecera5 = new PaginaPrincipal.BotonesCabecera5();
        Cabecera5.Boton5()
    })

    it("Boton Inversores", () => {
        
        const Cabecera6 = new PaginaPrincipal.BotonesCabecera6();
        Cabecera6.Boton6()
    })

})
