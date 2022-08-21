class BotonesCabecera {
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
        }
}
export default new BotonesCabecera();