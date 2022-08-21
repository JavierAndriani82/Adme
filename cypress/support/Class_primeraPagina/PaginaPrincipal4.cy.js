class BotonesCabecera4 {
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
export default new BotonesCabecera4();