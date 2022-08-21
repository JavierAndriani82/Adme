import PaginaPrincipalCy from "../../support/Class_primeraPagina/PaginaPrincipal.cy";
import PaginaPrincipal2 from "../../support/Class_primeraPagina/PaginaPrincipal2.cy";
import PaginaPrincipal3 from "../../support/Class_primeraPagina/PaginaPrincipal3.cy";
import PaginaPrincipal4 from "../../support/Class_primeraPagina/PaginaPrincipal4.cy";
import PaginaPrincipal5 from "../../support/Class_primeraPagina/PaginaPrincipal5.cy";
import PaginaPrincipal6 from "../../support/Class_primeraPagina/PaginaPrincipal6.cy";


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
        
        PaginaPrincipalCy.Boton()
        PaginaPrincipal2.Boton2()
        PaginaPrincipal3.Boton3()
        PaginaPrincipal4.Boton4()
    })

    it("Pantalla Agencias", () => {
        PaginaPrincipal5.Boton5()
    })

    it("Boton Inversores", () => {
        PaginaPrincipal6.Boton6()
    })

})
