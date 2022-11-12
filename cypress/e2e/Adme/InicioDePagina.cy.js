import * as PaginaPrincipal from "../../support/Class_primeraPagina/PaginaPrincipal.cy.js"
import * as classBotones from '../../support/Class_primeraPagina/classBotones.cy.js'

///<reference types="cypress" />
import "cypress-real-events/support";
require('cypress-xpath');

describe("Primer inicio", () => {
    before(() => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        })

    after(() => {
        cy.log("############### Todo esta OK! ################")    
        })
    
    it("Validando Boton Nosotros", () => {
        

        let tiempo = 1500
        const Cabeceras = new classBotones.botonNosotros;
        Cabeceras.clickNosotros();
        Cabeceras.elements.primerTexto().should('have.text', '¿Por qué Adme es diferente?')
        Cabeceras.elements.segundoTexto().should('have.text', 'Adme te reconoce como el principal protagonista en el mundo de las redes sociales. Sin importar cuantos amigos y/o seguidores tengas en tus redes sociales, Adme te considera un Influencer, y te paga por ello')
        Cabeceras.elements.tercerTexto().should('have.text', 'Tú foto, tú plata')
        Cabeceras.elements.cuartoTexto().should('have.text', 'Si sós el que crea las fotos, y el que pagó por los productos y servicios que aparecen en ellas ¿por qué no te pagan por compartirla? Adme lo hace posible!')
        Cabeceras.elements.quintoTexto().should('have.text', 'Posteá desde una sola app')
        Cabeceras.elements.sextoTexto().should('have.text', 'La app de Adme te permite postear en todas tus redes sociales al mismo tiempo y desde un solo lugar. Además te permite ganar dinero si quisieras esponsorizarlas.')
        Cabeceras.elements.septimoTexto().should('have.text', 'Ingresos pasivos')
        Cabeceras.elements.octavoTexto().should('have.text', 'Adme te paga un porcentaje del dinero que continuamente ganan tus referidos y los referidos de tus referidos. Ganás dinero de manera pasiva.')
        Cabeceras.elements.iconUno().should('be.visible')
        Cabeceras.elements.iconDos().should('be.visible')
        Cabeceras.elements.iconTres().should('be.visible')
        cy.wait(tiempo)
        Cabeceras.elements.hoverUno().realHover();
        cy.wait(tiempo)
        Cabeceras.elements.hoverDos().realHover();
        cy.wait(tiempo)
        Cabeceras.elements.hoverTres().realHover();
        Cabeceras.elements.iconCuatro().should('be.visible')
        Cabeceras.elements.iconCinco().should('be.visible')
        Cabeceras.elements.iconSeis().should('be.visible')
        Cabeceras.elements.iconSiete().should('be.visible')
        Cabeceras.elements.number3().should("have.text", "3")
        Cabeceras.elements.number112().should("have.text", "112")
        Cabeceras.elements.number16().should("have.text", "16")
        Cabeceras.elements.number8().should("have.text", "8")
        Cabeceras.elements.novenoTexto().should('have.text', 'Redes Sociales Integradas')
        Cabeceras.elements.decimoTexto().should('have.text', 'Usuarios probando la app')
        Cabeceras.elements.onceavoTexto().should('have.text', 'Marcas publicitando en Adme')
        Cabeceras.elements.doceavoTexto().should('have.text', 'Tipos de monedas integradas')


    })

    it ("Validando Boton Como", () => {

        let tiempo= 1500;
        const Cabeceras2= new classBotones.botonComo;
        Cabeceras2.clickComo();
        Cabeceras2.elements.TextoUno().should('have.text', 'Ganar dinero con Adme es muy sencillo')
        Cabeceras2.elements.TextoDos().should('have.text', 'Adme pone a tu disposición las campañas publicitarias de las marcas que buscan personas como vos para promocionar sus productos y servicios.')
        Cabeceras2.elements.TextoTres().should('have.text', 'Selfie')
        Cabeceras2.elements.TextoCuatro().should('have.text', 'Sacate una foto como usualmente lo haces.')
        Cabeceras2.elements.TextoCinco().should('have.text', 'Esponsorizala y compartila')
        Cabeceras2.elements.TextoSeis().should('have.text', 'Antes de subirla en tus redes sociales habituales (Facebook, Instagram, Twitter y otras) esponsorizala con alguna campaña publicitaria relacionada a algún producto o servicio que aparecen en ella.')
        Cabeceras2.elements.TextoSiete().should('have.text', 'Recibe el pago')
        Cabeceras2.elements.TextoOcho().should('have.text', 'Una vez que tu foto es evaluada y aprobada, simplemente recibís el pago.')
        Cabeceras2.elements.Imagen().should("be.visible").and(([img]) => {
            expect(img.naturalWidth).to.equal(3542);
            expect(img.naturalHeight).to.equal(3751);
        })
        Cabeceras2.elements.TextoNueve().should('have.text', 'Ingresos pasivos')
        Cabeceras2.elements.TextoDiez().should('have.text', 'Con Adme no solo ganás dinero por subir tus fotos, sino que también ganás dinero de manera pasiva.')
        Cabeceras2.elements.TextoOnce().should('have.text', 'El Mejor Programa De Referidos')
        Cabeceras2.elements.TextoDoce().should('have.text', 'Toda persona que se sume a Adme gracias a tu invitación, o a la invitación de tus invitados, conformarán tu clan. Y lo bueno es que todos ellos (sin importar que tan profundo estén en tu red de referidos) te harán ganar dinero, ya que Adme te recompensa con un porcetaje de sus ganancias, cada vez que suceda.')
        Cabeceras2.elements.TextoTrece().should('have.text', 'El éxito de tus posts')
        Cabeceras2.elements.TextoCatorce().should('have.text', 'Después de recibir el pago por compartir una foto, seguiras recibiendo dinero de acuerdo al éxito de la misma entre tus amigos y seguidores. Adme también te paga por cada like, comentario y otras reacciones.')
        Cabeceras2.elements.IconoUno().should('be.visible')
        Cabeceras2.elements.IconoDos().should('be.visible')
        Cabeceras2.elements.IconoTres().should('be.visible')
        Cabeceras2.elements.IconoCuatro().should('be.visible')
        Cabeceras2.elements.IconoCinco().should('be.visible')
        Cabeceras2.elements.Imagen2().should("be.visible").and(([img]) => {
            expect(img.naturalWidth).to.equal(1580);
            expect(img.naturalHeight).to.equal(1289);

        } )
        
        


    })

})
