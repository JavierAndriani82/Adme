class BotonesCabecera6 {
    constructor () {
        this.BotonInversores = ":nth-child(6) > .page-scroll";
    }

    Boton6 = () => {
            cy.get(this.BotonInversores).click()
        }
}
export default new BotonesCabecera6();