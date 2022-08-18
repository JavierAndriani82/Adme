class BotonesCabecera {
    constructor() {
        this.BotonNosotros = ".navbar-nav > :nth-child(1) > .page-scroll";
        this.BotonComo = ".navbar-nav > :nth-child(2) > .page-scroll";
        this.BotonFuncionalidades = ":nth-child(3) > .page-scroll";
        this.BotonMarcas = ":nth-child(4) > .page-scroll";
        this.imputMail = ".input-newsletter";
        this.BotonSubscribe = ".disabled";
        this.BotonAgencias = ':nth-child(5) > .page-scroll';
        this.Inversores = ":nth-child(6) > .page-scroll";
        }

        Boton = () =>{
            cy.get(this.BotonNosotros).click()
            cy.wait(1500)
            cy.get(this.BotonComo).click()
            cy.wait(1500)
            cy.get(this.BotonFuncionalidades).click()
            cy.wait(1500)
        }

        Boton2 = () =>{
            cy.get(this.BotonMarcas).click()
            cy.get(this.imputMail).type("mail1@gmail.com")
            cy.wait(1500)
            cy.get(this.BotonSubscribe).click()
            cy.wait(4000)
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
                
            })
            
        }

        Boton3 = () => {
            cy.get(this.Inversores).click()
            cy.wait(1500)
            
        }

        Boton4 = () => {
        
            cy.get(this.BotonAgencias).click()
        }

}
export default new BotonesCabecera();