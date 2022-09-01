import PaginaPrincipal from "../../support/Class_primeraPagina/PaginaPrincipal.cy"
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
        
        PaginaPrincipal.Boton()
        PaginaPrincipal.Boton2()
        PaginaPrincipal.Boton3()
        PaginaPrincipal.Boton4()

    })

    it("Pantalla Agencias", () => {
        PaginaPrincipal5.Boton5()
    })

    it("Boton Inversores", () => {
        PaginaPrincipal6.Boton6()
    })

})
