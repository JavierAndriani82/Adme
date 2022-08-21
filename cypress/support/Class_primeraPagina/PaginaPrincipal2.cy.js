class BotonesCabecera2 {
    constructor () {
        this.BotonComo = ".navbar-nav > :nth-child(2) > .page-scroll";
        
        
    }

    Boton2 = () => {
        let tiempo=1500
        cy.get(this.BotonComo).click()
        cy.wait(tiempo)
            
    }
}
export default new BotonesCabecera2();