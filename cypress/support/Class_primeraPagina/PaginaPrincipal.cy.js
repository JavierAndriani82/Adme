

export class BotonesCabecera {
    constructor() {
        this.BotonNosotros = ".navbar-nav > :nth-child(1) > .page-scroll";
        this.PrimerTexto = ".col-md-10 > .section-heading > h2";
        this.SegundoTexto = ".col-md-10 > .section-heading > p";
        this.TercerTexto = ":nth-child(1) > .card > .card-body > .pt-2 > h5";
        this.CuartoTexto = ":nth-child(1) > .card > .card-body > .pt-2 > .mb-0";
        this.QuintoTexto = ":nth-child(2) > .card > .card-body > .pt-2 > h5";
        this.SextoTexto = ":nth-child(2) > .card > .card-body > .pt-2 > .mb-0";
        this.SeptimoTexto = ":nth-child(3) > .card > .card-body > .pt-2 > h5";
        this.OctavoTexto = ":nth-child(3) > .card > .card-body > .pt-2 > .mb-0";
        this.IconUno = ":nth-child(1) > .card > .card-body > .pb-2 > .fas";
        this.IconDos = ":nth-child(2) > .card > .card-body > .pb-2 > .fas";
        this.IconTres = ":nth-child(3) > .card > .card-body > .pb-2 > .fas";
        this.Hover1 = ':nth-child(1) > .card > .card-body'
        this.Hover2 = ":nth-child(2) > .card > .card-body"
        this.Hover3 = ":nth-child(3) > .card > .card-body"
        this.IconCuatro = ":nth-child(1) > .p-2 > .fas";
        this.IconCinco = ":nth-child(2) > .p-2 > .fas";
        this.IconSeis = ":nth-child(3) > .p-2 > .fas";
        this.IconSiete = ":nth-child(4) > .p-2 > .fas";
        this.Number3 = ":nth-child(1) > .p-2 > .count-number";
        this.Number112 = ":nth-child(2) > .p-2 > .count-number";
        this.Number16 = ":nth-child(3) > .p-2 > .count-number";
        this.Number8 = ":nth-child(4) > .p-2 > .count-number";
        this.NovenoTexto = ":nth-child(1) > .p-2 > :nth-child(3)";
        this.DecimoTexto = ":nth-child(2) > .p-2 > :nth-child(3)";
        this.OnceavoTexto = ":nth-child(3) > .p-2 > :nth-child(3)";
        this.DoceavoTexto = ":nth-child(4) > .p-2 > :nth-child(3)";
        //Boton Como
        this.BotonComo = ".navbar-nav > :nth-child(2) > .page-scroll";
        this.TextoUno = "#process > .container > .justify-content-center > .col-md-9 > .section-heading > h2"
        this.TextoDos = "#process > .container > .justify-content-center > .col-md-9 > .section-heading > p"
        this.TextoTres = ":nth-child(1) > .process-icon-item > .d-flex > .process-content > h5"
        this.TextoCuatro = ":nth-child(1) > .process-icon-item > .d-flex > .process-content > p"
        this.TextoCinco = ":nth-child(2) > .process-icon-item > .d-flex > .process-content > h5"
        this.TextoSeis = ":nth-child(2) > .process-icon-item > .d-flex > .process-content > p"
        this.TextoSiete = ":nth-child(3) > .process-icon-item > .d-flex > .process-content > h5"
        this.TextoOcho = ":nth-child(3) > .process-icon-item > .d-flex > .process-content > p"
        this.IconoUno = ":nth-child(1) > .process-icon-item > .d-flex > .process-icon > .fas"
        this.IconoDos = ":nth-child(2) > .process-icon-item > .d-flex > .process-icon > .fas"
        this.IconoTres = ":nth-child(3) > .process-icon-item > .d-flex > .process-icon > .fas"
        this.IconoCuatro = ":nth-child(1) > .mt-2 > .fas"
        this.IconoCinco = ":nth-child(2) > .mt-2 > .fas"
        this.Imagen = "#process > .container > .justify-content-md-center > .col-md-6 > .img-wrap > .img-fluid"
        this.Imagen2 = ".mask-image > .img-fluid"
        this.TextoNueve = ".feature-contents > h2"
        this.TextoDiez = ".feature-contents > :nth-child(2)"
        this.TextoOnce = ":nth-child(1) > .vertical-list-info > strong"
        this.TextoDoce = ":nth-child(1) > .vertical-list-info > p"
        this.TextoTrece = ":nth-child(2) > .vertical-list-info > strong"
        this.TextoCatorce = ":nth-child(2) > .vertical-list-info > p"

        //Boton Funcionalidades
        this.BotonFuncionalidades = ":nth-child(3) > .page-scroll";
        //Boton Marcas
        this.BotonMarcas = ":nth-child(4) > .page-scroll";
        this.imputMail = ".input-newsletter";
        this.BotonSubscribe = ".disabled";
        }
        
        Boton = () => {
            let tiempo=1500
            cy.get(this.BotonNosotros).click()
            cy.get(this.PrimerTexto).should('have.text', '¿Por qué Adme es diferente?')
            cy.get(this.SegundoTexto).should('have.text', 'Adme te reconoce como el principal protagonista en el mundo de las redes sociales. Sin importar cuantos amigos y/o seguidores tengas en tus redes sociales, Adme te considera un Influencer, y te paga por ello')
            cy.get(this.TercerTexto).should('have.text', 'Tú foto, tú plata')
            cy.get(this.CuartoTexto).should('have.text', 'Si sós el que crea las fotos, y el que pagó por los productos y servicios que aparecen en ellas ¿por qué no te pagan por compartirla? Adme lo hace posible!')
            cy.get(this.QuintoTexto).should('have.text', 'Posteá desde una sola app')
            cy.get(this.SextoTexto).should('have.text', 'La app de Adme te permite postear en todas tus redes sociales al mismo tiempo y desde un solo lugar. Además te permite ganar dinero si quisieras esponsorizarlas.')
            cy.get(this.SeptimoTexto).should('have.text', 'Ingresos pasivos')
            cy.get(this.OctavoTexto).should('have.text', 'Adme te paga un porcentaje del dinero que continuamente ganan tus referidos y los referidos de tus referidos. Ganás dinero de manera pasiva.')
            cy.get(this.IconUno).should('be.visible')
            cy.get(this.IconDos).should('be.visible')
            cy.get(this.IconTres).should('be.visible')
            cy.wait(tiempo)
            cy.get(this.Hover1).realHover();
            cy.wait(tiempo)
            cy.get(this.Hover2).realHover();
            cy.wait(tiempo)
            cy.get(this.Hover3).realHover();
            cy.wait(tiempo)
            cy.get(this.IconCuatro).should('be.visible')
            cy.get(this.IconCinco).should('be.visible')
            cy.get(this.IconSeis).should('be.visible')
            cy.get(this.IconSiete).should('be.visible')
            cy.get(this.Number3).should("have.text", "3")
            cy.get(this.Number112).should("have.text", "112")
            cy.get(this.Number16).should("have.text", "16")
            cy.get(this.Number8).should("have.text", "8")
            cy.get(this.NovenoTexto).should('have.text', 'Redes Sociales Integradas')
            cy.get(this.DecimoTexto).should('have.text', 'Usuarios probando la app')
            cy.get(this.OnceavoTexto).should('have.text', 'Marcas publicitando en Adme')
            cy.get(this.DoceavoTexto).should('have.text', 'Tipos de monedas integradas')
        };

        Boton2 = () => {
            let tiempo=1500
            cy.get(this.BotonComo).click()
            cy.get(this.TextoUno).should('have.text', 'Ganar dinero con Adme es muy sencillo')
            cy.get(this.TextoDos).should('have.text', 'Adme pone a tu disposición las campañas publicitarias de las marcas que buscan personas como vos para promocionar sus productos y servicios.')
            cy.get(this.TextoTres).should('have.text', 'Selfie')
            cy.get(this.TextoCuatro).should('have.text', 'Sacate una foto como usualmente lo haces.')
            cy.get(this.TextoCinco).should('have.text', 'Esponsorizala y compartila')
            cy.get(this.TextoSeis).should('have.text', 'Antes de subirla en tus redes sociales habituales (Facebook, Instagram, Twitter y otras) esponsorizala con alguna campaña publicitaria relacionada a algún producto o servicio que aparecen en ella.')
            cy.get(this.TextoSiete).should('have.text', 'Recibe el pago')
            cy.get(this.TextoOcho).should('have.text', 'Una vez que tu foto es evaluada y aprobada, simplemente recibís el pago.')
            cy.get(this.Imagen).should("be.visible").and(([img]) => {
                expect(img.naturalWidth).to.equal(3542);
                expect(img.naturalHeight).to.equal(3751);

            } )
            cy.get(this.TextoNueve).should('have.text', 'Ingresos pasivos')
            cy.get(this.TextoDiez).should('have.text', 'Con Adme no solo ganás dinero por subir tus fotos, sino que también ganás dinero de manera pasiva.')
            cy.get(this.TextoOnce).should('have.text', 'El Mejor Programa De Referidos')
            cy.get(this.TextoDoce).should('have.text', 'Toda persona que se sume a Adme gracias a tu invitación, o a la invitación de tus invitados, conformarán tu clan. Y lo bueno es que todos ellos (sin importar que tan profundo estén en tu red de referidos) te harán ganar dinero, ya que Adme te recompenza con un porcetaje de sus ganancias, cada vez que suceda.')
            cy.get(this.TextoTrece).should('have.text', 'El éxito de tus posts')
            cy.get(this.TextoCatorce).should('have.text', 'Después de recibir el pago por compartir una foto, seguiras recibiendo dinero de acuerdo al éxito de la misma entre tus amigos y seguidores. Adme también te paga por cada like, comentario y otras reacciones.')
            cy.get(this.IconoUno).should("be.visible")
            cy.get(this.IconoDos).should("be.visible")
            cy.get(this.IconoTres).should("be.visible")
            cy.get(this.IconoCuatro).should("be.visible")
            cy.get(this.IconoCinco).should("be.visible")
            cy.get(this.Imagen2).should("be.visible").and(([img]) => {
                expect(img.naturalWidth).to.equal(1580);
                expect(img.naturalHeight).to.equal(1289);

            } )



        cy.wait(tiempo)
        };

        Boton3 = () => {
            let tiempo=1500
            cy.get(this.BotonFuncionalidades).click()
            cy.wait(tiempo)
            
        };

        Boton4 = () =>{
            let tiempo=1500
            cy.get(this.BotonMarcas).click()
            cy.wait(tiempo)
            cy.get(this.imputMail).type("mail1@gmail.com")
            cy.wait(tiempo)
            cy.get(this.BotonSubscribe).click()
            cy.wait(3500)
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false    
            })
        }
}

export class BotonesCabecera2 {
    constructor () {
        this.BotonAgencias = ':nth-child(5) > .page-scroll';
        this.imputMail = ".input-newsletter";
        this.BotonSubscribe = ".disabled";
    }
    
    Boton5 = () => {
            let tiempo=1500
            cy.get(this.BotonAgencias).click()
            cy.wait(tiempo)
            cy.get(this.imputMail).type("mail1@gmail.com")
            cy.wait(tiempo)
            cy.get(this.BotonSubscribe).click()
            cy.wait(3500)
        }
}

export class BotonesCabecera3 {
    constructor () {
        this.BotonInversores = ":nth-child(6) > .page-scroll";
    }

    Boton6 = () => {
            cy.get(this.BotonInversores).click()
        }
}

