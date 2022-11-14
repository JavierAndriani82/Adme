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
        cy.wait(1500)
        
    })
    
    it.only ("Boton Funcionalidades", () => {

        const Cabeceras3= new classBotones.botonFuncionalidades;
        Cabeceras3.clickFuncionalidades();
        cy.wait(1500)
        Cabeceras3.elements.textoUno().should("have.text", "Funcionalidades de Adme")
        Cabeceras3.elements.textoDos().should("have.text", "Adme es la primer plataforma que cree que todo usuario de redes sociales es un influencer. Es por ésta razón que Adme transforma los benefícios que las marcas obtinen por las influencis de tus fotos en recompensas monetarias al protagonista de toda ésta historia, vos 🤟")
        Cabeceras3.elements.textoTres().should("have.text", "Una sola app para todas tus redes sociales")
        Cabeceras3.elements.textoCuatro().should("have.text", "Con la app de Adme puedes postear al mismo tiempo en todas tus redes sociales habituales. 📱")
        Cabeceras3.elements.textoCinco().should("have.text", "Fotos espponsorizadas")
        Cabeceras3.elements.textoSeis().should("have.text", "Si la foto que estás por postear contiene algún producto, servicio o lugar, entonces podrías esponsorizarla con una comapañ publicitaria relacionada. 💰💰💰")
        Cabeceras3.elements.textoSiete().should("have.text", "Fotos a pedido")
        Cabeceras3.elements.textoOcho().should("have.text", "También podés crear fotos seguiendo las especificaciones de alguna campaña publicitaria que creas apropieada para vos. 💰💰💰")
        Cabeceras3.elements.textoNueve().should("have.text", "Compartir Spot publicitarios")
        Cabeceras3.elements.textoDiez().should("have.text", "También podrías ganar dinero simplemente compartiendo un spot publicitario creado por la marca. 💰💰💰")
        Cabeceras3.elements.textoOnce().should("have.text", "Mas likes, mas ganancias")
        Cabeceras3.elements.textoDoce().should("have.text", "Después de ganar dinero por postear una foto sponsorizada, continueas incrementando tus ganancias por el éxito de la misma. 💰💰💰")
        Cabeceras3.elements.textoTrece().should("have.text", "Ingresos pasivos desde tu red de referidos")
        Cabeceras3.elements.textoCatorce().should("have.text", "Cada vez que tus referidos o los referidos de tus referidos ganen dinero, vos también ganaras un porcentaje del mismo. 💰💰💰")        
        Cabeceras3.elements.img().should("be.visible").and(([img])=> {
        expect(img.naturalWidth).to.equal(408);
        expect(img.naturalHeight).to.equal(524);
    } ) 
        Cabeceras3.elements.iconOne().should('be.visible')    
        Cabeceras3.elements.iconTwo().should('be.visible')
        Cabeceras3.elements.iconThree().should('be.visible')
        Cabeceras3.elements.iconFour().should('be.visible')
        Cabeceras3.elements.iconFive().should('be.visible')
        Cabeceras3.elements.iconSix().should('be.visible')
        Cabeceras3.elements.textoQuince().should('have.text', 'Lo que opina la gente sobre ésta nueva propuesta')
        Cabeceras3.elements.textoDieciseis().should('have.text', 'El nuevo paradigma propuesto por Adme está focalizado a satisfacer, principalmente, las nacesidades los los usuarios de redes sociales. Esto es lo que opinan sobre ésta nueva propuesta!')
        Cabeceras3.elements.primerComentario().eq(0).click()
        Cabeceras3.elements.img2().eq(0).should("not.be.visible").and(([img2]) => {
            expect(img2.naturalWidth).to.equal(500);
            expect(img2.naturalHeight).to.equal(501);
        })
        Cabeceras3.elements.textoDiecisiete().should('have.text', 'Giselle Yaccuzzy')
        Cabeceras3.elements.textoDieceocho().should('have.text', 'Usuario de Facebook e Instagram')
        Cabeceras3.elements.textoDiecinueve().should('have.text', 'Es muy emocionante saber que llegó una red social que entiende que al compartir una foto en mis redes sociales habituales, estoy influenciando a mis amigos y seguidores a que consuman los productos y servicios que aparecen en ella 😍')
        Cabeceras3.elements.segundoComentario().eq(1).click()
        Cabeceras3.elements.img3().eq(1).should("not.be.visible").and(([img3]) => {
            expect(img3.naturalWidth).to.equal(500);
            expect(img3.naturalHeight).to.equal(501);
        })
        Cabeceras3.elements.textoVeinte().should("contain.text", "María Fernanda Iglesias")
        Cabeceras3.elements.textoVeintiuno().should("contain.text", "Actriz. (@marifernandai) • Instagram")
        Cabeceras3.elements.tercerComentario().eq(2).click()
        Cabeceras3.elements.img4().eq(2).should("not.be.visible").and(([img4]) => {
            expect(img4.naturalWidth).to.equal(1000);
            expect(img4.naturalHeight).to.equal(1002);
        })
        Cabeceras3.elements.textoVeintidos().should("contain.text", "Gonzalo Abadie")
        Cabeceras3.elements.textoVeintitres().should("contain.text", "Actor, (@Gonzactor) • Twitter")    

    })
    
})
