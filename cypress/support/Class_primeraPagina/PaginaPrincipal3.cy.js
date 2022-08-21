class BotonesCabecera3 {
    constructor () {
        this.BotonFuncionalidades = ":nth-child(3) > .page-scroll";
    }
    Boton3 = () => {
        let tiempo=1500
        cy.get(this.BotonFuncionalidades).click()
        cy.wait(tiempo)
    }
}
export default new BotonesCabecera3();