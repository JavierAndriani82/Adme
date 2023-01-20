import * as classFooter from '../../support/Class_primeraPagina/classFooter.cy'


///<reference types="cypress" />
require('cypress-xpath');


describe ('Validando Footer', () => {

    beforeEach (() => {
        cy.visit("https://adme.com.ar")
        cy.title('eq', 'Adme - The social network that pays money')
        cy.wait(2000)
    })

    after (() => {
        cy.log("######## todo esta OK! ########")
    })

    it ('Validando el Footer', () => {

            const footerDown = new classFooter.footer
            footerDown.scroll()
            footerDown.elements.textoUno().should('have.text', 'Suscribite para probar Adme')
            footerDown.elements.textoDos().should('have.text', 'Y gana dinero mientras tanto')
            footerDown.elements.textoTres().should('have.text', 'La plataforma de publicidad disruptiva que llegó para cambiar el paradigma de las publicidad en redes sociales.')
            footerDown.elements.textoCuatro().should('have.text', 'Productos')
            footerDown.elements.textoCinco().should('have.text', 'La empresa')
            //footerDown.typeEmail()
            footerDown.typeEmail()
            footerDown.elements.buttonSend().invoke('removeAttr', 'type')
            footerDown.clickButton()

    })

})