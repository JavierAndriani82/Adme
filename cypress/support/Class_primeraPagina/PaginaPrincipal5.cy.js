class BotonesCabecera5 {
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
export default new BotonesCabecera5();