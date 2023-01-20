export class footer {

    elements = {

        scrollDown: () => cy.get('.linkedin'),
        textoUno: () => cy.xpath('/html/body/div[2]/footer/div[1]/div/div[1]/div/h3'),
        textoDos: () => cy.xpath('//*[@id="root"]/footer/div[1]/div/div[1]/div/p'),
        textoTres: () => cy.xpath('//*[@id="root"]/footer/div[2]/div/div[1]/p/text()'),
        textoCuatro: () => cy.xpath('//*[@id="root"]/footer/div[2]/div/div[2]/div/div[1]/h6'),
        textoCinco: () => cy.xpath('//*[@id="root"]/footer/div[2]/div/div[2]/div/div[2]/h6'),
        imputMail: () => cy.get('.input-newsletter'),
        buttonSend: () => cy.xpath('//*[@id="root"]/footer/div[1]/div/div[2]/form/button/i')
    }

    scroll () {
        this.elements.scrollDown().scrollIntoView()
    }

    typeEmail () {
        this.elements.imputMail().type('andrianijavier@gmail.com')
    }
    
    clickButton () {
        this.elements.buttonSend().click({force:true})
    }


}