


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
        this.DoceavoTexto = ":nth-child(4) > .p-2 > :nth-child(3)"
        
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
}

export class BotonesCabecera2 {

    constructor () {

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
    }

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

}

export class BotonesCabecera3 {
    constructor () {
    
        this.BotonFuncionalidades = ":nth-child(3) > .page-scroll";
        this.Texto1 = "#features > .container > .justify-content-center > .col-md-9 > .section-heading > h2"
        this.Texto2 = "#features > .container > .justify-content-center > .col-md-9 > .section-heading > p"
        this.Texto3 = ":nth-child(1) > .row > :nth-child(1) > .d-flex > .icon-text > .mb-2"
        this.Texto4 = ":nth-child(1) > .row > :nth-child(1) > .d-flex > .icon-text > p"
        this.Texto5 = ":nth-child(1) > .row > :nth-child(2) > .d-flex > .icon-text > .mb-2"
        this.Texto6 = ":nth-child(1) > .row > :nth-child(2) > .d-flex > .icon-text > p"
        this.Texto7 = ":nth-child(1) > .row > :nth-child(3) > .d-flex > .icon-text > .mb-2"
        this.Texto8 = ":nth-child(1) > .row > :nth-child(3) > .d-flex > .icon-text > p"
        this.Texto9 = ":nth-child(3) > .row > :nth-child(1) > .d-flex > .icon-text > .mb-2"
        this.Texto10 = ":nth-child(3) > .row > :nth-child(1) > .d-flex > .icon-text > p"
        this.Texto11 = ":nth-child(3) > .row > :nth-child(2) > .d-flex > .icon-text > .mb-2"
        this.Texto12 = ":nth-child(3) > .row > :nth-child(2) > .d-flex > .icon-text > p"
        this.Texto13 = ":nth-child(3) > .row > :nth-child(3) > .d-flex > .icon-text > .mb-2"
        this.Texto14 = ":nth-child(3) > .row > :nth-child(3) > .d-flex > .icon-text > p"
        this.img = "[alt='placeholder']"
        this.icon1 = ".ti-gallery"
        this.icon2 = ".ti-shield"
        this.icon3 = ".ti-target"
        this.icon4 = ".ti-announcement"
        this.icon5 = ".ti-thumb-up"
        this.icon6 = ".ti-money"
        this.Texto15 = ".testimonial-heading > .text-white"
        this.Texto16 = ".testimonial-heading > p"
        this.PrimerComentario = "[role='button']"
        this.img2 = "[alt='client']"
        this.Texto17 = ".active > .item > .testimonial-quote-wrap > .media > .media-body > .mb-0"
        this.Texto18 = ".active > .item > .testimonial-quote-wrap > .media > .media-body > span"
        this.Texto19 = ".active > .item > .testimonial-quote-wrap > .client-say > p"
        this.SegundoComentario = "[role='button']"
        this.img3 = "[alt='client']"
        this.Texto20 = ".active > .item > .testimonial-quote-wrap > .media > .media-body > .mb-0"
        this.Texto21 = ".active > .item > .testimonial-quote-wrap > .media > .media-body > span"
        this.TercerComentario = "[role='button']"
        this.img4 = "[alt='client']"
        this.Texto22 = ".active > .item > .testimonial-quote-wrap > .media > .media-body > .mb-0"
        this.Texto23 = ".active > .item > .testimonial-quote-wrap > .media > .media-body > span"
        



    }

    Boton3 = () => {
        let tiempo=1500
        cy.get(this.BotonFuncionalidades).click()
        cy.wait(tiempo)
        cy.get(this.Texto1).should("have.text", "Funcionalidades de Adme")
        cy.get(this.Texto2).should("have.text", "Adme es la primer plataforma que cree que todo usuario de redes sociales es un influencer. Es por ésta razón que Adme transforma los benefícios que las marcas obtinen por las influencis de tus fotos en recompenzas monetarias al protagonista de toda ésta historia, vos 🤟")
        cy.get(this.Texto3).should("have.text", "Una sola app para todas tus redes sociales")
        cy.get(this.Texto4).should("have.text", "Con la app de Adme puedes postear al mismo tiempo en todas tus redes sociales habituales. 📱")
        cy.get(this.Texto5).should("have.text", "Fotos espponsorizadas")
        cy.get(this.Texto6).should("have.text", "Si la foto que estás por postear contiene algún producto, servicio o lugar, entonces podrías esponsorizarla con una comapañ publicitaria relacionada. 💰💰💰")
        cy.get(this.Texto7).should("have.text", "Fotos a pedido")
        cy.get(this.Texto8).should("have.text", "También podés crear fotos seguiendo las especificaciones de alguna campaña publicitaria que creas apropieada para vos. 💰💰💰")
        cy.get(this.Texto9).should("have.text", "Compartir Spot publicitarios")
        cy.get(this.Texto10).should("have.text", "También podrías ganar dinero simplemente compartiendo un spot publicitario creado por la marca. 💰💰💰")
        cy.get(this.Texto11).should("have.text", "Mas likes, mas ganancias")
        cy.get(this.Texto12).should("have.text", "Después de ganar dinero por postear una foto sponsorizada, continueas incrementando tus ganancias por el éxito de la misma. 💰💰💰")
        cy.get(this.Texto13).should("have.text", "Ingresos pasivos desde tu red de referidos")
        cy.get(this.Texto14).should("have.text", "Cada vez que tus referidos o los referidos de tus referidos ganen dinero, vos también ganaras un porcentaje del mismo. 💰💰💰")
        cy.get(this.img).should("be.visible").and(([img])=> {
            expect(img.naturalWidth).to.equal(408);
            expect(img.naturalHeight).to.equal(524);
        } )
        cy.get(this.icon1).should('be.visible')
        cy.get(this.icon2).should('be.visible')
        cy.get(this.icon3).should('be.visible')
        cy.get(this.icon4).should('be.visible')
        cy.get(this.icon5).should('be.visible')
        cy.get(this.icon6).should('be.visible')
        cy.get(this.Texto15).should('have.text', 'Lo que opina la gente sobre ésta nueva propuesta' )
        cy.get(this.Texto16).should('have.text', 'El nuevo paradigma propuesto por Adme está focalizado a satisfacer, principalmente, las nacesidades los los usuarios de redes sociales. Esto es lo que opinan sobre ésta nueva propuesta!')
        cy.get(this.PrimerComentario).eq(0).click()
        cy.get(this.img2).eq(0).should("not.be.visible").and(([img2]) => {
            expect(img2.naturalWidth).to.equal(500);
            expect(img2.naturalHeight).to.equal(501);
        })
        cy.get(this.Texto17).should('have.text', 'Giselle Yaccuzzy')
        cy.get(this.Texto18).should('have.text', 'Usuario de Facebook e Instagram')
        cy.get(this.Texto19).should('have.text', 'Es muy emocionante saber que llegó una red social que entiende que al compartir una foto en mis redes sociales habituales, estoy influenciando a mis amigos y seguidores a que consuman los productos y servicios que aparecen en ella 😍')
        cy.get(this.SegundoComentario).eq(1).click()
        cy.get(this.img3).eq(1).should("not.be.visible").and(([img3]) => {
            expect(img3.naturalWidth).to.equal(500);
            expect(img3.naturalHeight).to.equal(501);
        })
        cy.get(this.Texto20).should("contain.text", "María Fernanda Iglesias")
        cy.get(this.Texto21).should("contain.text", "Actriz. (@marifernandai) • Instagram")
        cy.get(this.SegundoComentario).eq(2).click()
        cy.get(this.img4).eq(2).should("not.be.visible").and(([img4]) => {
            expect(img4.naturalWidth).to.equal(1000);
            expect(img4.naturalHeight).to.equal(1002);
        })
        cy.get(this.Texto22).should("contain.text", "Gonzalo Abadie")
        cy.get(this.Texto23).should("contain.text", "Actor, (@Gonzactor) • Twitter")
        
        
        
    };
}

export class BotonesCabecera4 {
    constructor () {

        this.BotonMarcas = ":nth-child(4) > .page-scroll";
        this.imputMail = ".input-newsletter";
        this.BotonSubscribe = ".disabled";
    }

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

export class BotonesCabecera5 {
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

export class BotonesCabecera6 {
    constructor () {
        
        this.BotonInversores = ":nth-child(6) > .page-scroll";
    }

    Boton6 = () => {
            cy.get(this.BotonInversores).click()
        }
}

