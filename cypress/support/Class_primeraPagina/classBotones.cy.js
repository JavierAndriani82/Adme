export class botonNosotros {
    
    elements = {
        botonNosotros: () => cy.get(".navbar-nav > :nth-child(1) > .page-scroll"),
        primerTexto: () => cy.get(".col-md-10 > .section-heading > h2"),
        segundoTexto: () => cy.get(".col-md-10 > .section-heading > p"),
        tercerTexto: () => cy.get(":nth-child(1) > .card > .card-body > .pt-2 > h5"),
        cuartoTexto: () => cy.get(":nth-child(1) > .card > .card-body > .pt-2 > .mb-0"),
        quintoTexto: () => cy.get(":nth-child(2) > .card > .card-body > .pt-2 > h5"),
        sextoTexto: () => cy.get(":nth-child(2) > .card > .card-body > .pt-2 > .mb-0"),
        septimoTexto: () => cy.get(":nth-child(3) > .card > .card-body > .pt-2 > h5"),
        octavoTexto: () => cy.get(":nth-child(3) > .card > .card-body > .pt-2 > .mb-0"),
        iconUno: () => cy.get(":nth-child(1) > .card > .card-body > .pb-2 > .fas"),
        iconDos: () => cy.get(":nth-child(2) > .card > .card-body > .pb-2 > .fas"),
        iconTres: () => cy.get(":nth-child(3) > .card > .card-body > .pb-2 > .fas"),
        hoverUno: () => cy.get(':nth-child(1) > .card > .card-body'),
        hoverDos: () => cy.get(":nth-child(2) > .card > .card-body"),
        hoverTres: () => cy.get(":nth-child(3) > .card > .card-body"),
        iconCuatro: () => cy.get(":nth-child(1) > .p-2 > .fas"),
        iconCinco: () => cy.get(":nth-child(2) > .p-2 > .fas"),
        iconSeis: () => cy.get(":nth-child(3) > .p-2 > .fas"),
        iconSiete: () => cy.get(":nth-child(4) > .p-2 > .fas"),
        number3: () => cy.get(":nth-child(1) > .p-2 > .count-number"),
        number112: () => cy.get(":nth-child(2) > .p-2 > .count-number"),
        number16: () => cy.get(":nth-child(3) > .p-2 > .count-number"),
        number8: () => cy.get(":nth-child(4) > .p-2 > .count-number"),
        novenoTexto: () => cy.get(":nth-child(1) > .p-2 > :nth-child(3)"),
        decimoTexto: () => cy.get(":nth-child(2) > .p-2 > :nth-child(3)"),
        onceavoTexto: () => cy.get(":nth-child(3) > .p-2 > :nth-child(3)"),
        doceavoTexto: () => cy.get(":nth-child(4) > .p-2 > :nth-child(3)"),

    }

    clickNosotros() {
        this.elements.botonNosotros().click()
    }
}

export class botonComo {

    elements = {

        BotonComo: () => cy.get(".navbar-nav > :nth-child(2) > .page-scroll"),
        TextoUno: () => cy.get("#process > .container > .justify-content-center > .col-md-9 > .section-heading > h2"),  
        TextoDos: () => cy.get("#process > .container > .justify-content-center > .col-md-9 > .section-heading > p"),  
        TextoTres: () => cy.get(":nth-child(1) > .process-icon-item > .d-flex > .process-content > h5"),  
        TextoCuatro: () => cy.get(":nth-child(1) > .process-icon-item > .d-flex > .process-content > p"),  
        TextoCinco: () => cy.get(":nth-child(2) > .process-icon-item > .d-flex > .process-content > h5"),  
        TextoSeis: () => cy.get(":nth-child(2) > .process-icon-item > .d-flex > .process-content > p"),  
        TextoSiete: () => cy.get(":nth-child(3) > .process-icon-item > .d-flex > .process-content > h5"),  
        TextoOcho: () => cy.get(":nth-child(3) > .process-icon-item > .d-flex > .process-content > p"),  
        IconoUno: () => cy.get(":nth-child(1) > .process-icon-item > .d-flex > .process-icon > .fas"),  
        IconoDos: () => cy.get(":nth-child(2) > .process-icon-item > .d-flex > .process-icon > .fas"),  
        IconoTres: () => cy.get(":nth-child(3) > .process-icon-item > .d-flex > .process-icon > .fas"), 
        IconoCuatro: () => cy.get(":nth-child(1) > .mt-2 > .fas"),  
        IconoCinco: () => cy.get(":nth-child(2) > .mt-2 > .fas"),  
        Imagen: () => cy.get("#process > .container > .justify-content-md-center > .col-md-6 > .img-wrap > .img-fluid"),  
        Imagen2: () => cy.get(".mask-image > .img-fluid"), 
        TextoNueve: () => cy.get(".feature-contents > h2"),  
        TextoDiez: () => cy.get(".feature-contents > :nth-child(2)"),  
        TextoOnce: () => cy.get(":nth-child(1) > .vertical-list-info > strong"), 
        TextoDoce: () => cy.get(":nth-child(1) > .vertical-list-info > p"),  
        TextoTrece: () => cy.get(":nth-child(2) > .vertical-list-info > strong"),  
        TextoCatorce: () => cy.get(":nth-child(2) > .vertical-list-info > p"),  
    }

    clickComo() {
        this.elements.BotonComo().click()
    }
}

export class botonFuncionalidades {

    elements = {
    
    botonFuncionalidades: () => cy.get(":nth-child(3) > .page-scroll"),
    textoUno: () => cy.get("#features > .container > .justify-content-center > .col-md-9 > .section-heading > h2"),
    textoDos: () => cy.get("#features > .container > .justify-content-center > .col-md-9 > .section-heading > p"),
    textoTres: () => cy.get(":nth-child(1) > .row > :nth-child(1) > .d-flex > .icon-text > .mb-2"),
    textoCuatro: () => cy.get(":nth-child(1) > .row > :nth-child(1) > .d-flex > .icon-text > p"), 
    textoCinco: () => cy.get(":nth-child(1) > .row > :nth-child(2) > .d-flex > .icon-text > .mb-2"), 
    textoSeis: () => cy.get(":nth-child(1) > .row > :nth-child(2) > .d-flex > .icon-text > p"), 
    textoSiete: () => cy.get(":nth-child(1) > .row > :nth-child(3) > .d-flex > .icon-text > .mb-2"), 
    textoOcho: () => cy.get(":nth-child(1) > .row > :nth-child(3) > .d-flex > .icon-text > p"), 
    textoNueve: () => cy.get(":nth-child(3) > .row > :nth-child(1) > .d-flex > .icon-text > .mb-2"), 
    textoDiez: () => cy.get(":nth-child(3) > .row > :nth-child(1) > .d-flex > .icon-text > p"), 
    textoOnce: () => cy.get(":nth-child(3) > .row > :nth-child(2) > .d-flex > .icon-text > .mb-2"), 
    textoDoce: () => cy.get(":nth-child(3) > .row > :nth-child(2) > .d-flex > .icon-text > p"), 
    textoTrece: () => cy.get(":nth-child(3) > .row > :nth-child(3) > .d-flex > .icon-text > .mb-2"), 
    textoCatorce: () => cy.get(":nth-child(3) > .row > :nth-child(3) > .d-flex > .icon-text > p"), 
    img: () => cy.get("[alt='placeholder']"),
    iconOne: () => cy.get(".ti-gallery"), 
    iconTwo: () => cy.get(".ti-shield"), 
    iconThree: () => cy.get(".ti-target"), 
    iconFour: () => cy.get(".ti-announcement"), 
    iconFive: () => cy.get(".ti-thumb-up"), 
    iconSix: () => cy.get(".ti-money"), 
    textoQuince: () => cy.get(".testimonial-heading > .text-white"), 
    textoDieciseis: () => cy.get(".testimonial-heading > p"), 
    primerComentario: () => cy.get("[role='button']"), 
    img2: () => cy.get("[alt='client']"), 
    textoDiecisiete: () => cy.get(".active > .item > .testimonial-quote-wrap > .media > .media-body > .mb-0"),
    textoDieceocho: () => cy.get(".active > .item > .testimonial-quote-wrap > .media > .media-body > span"),
    textoDiecinueve: () => cy.get(".active > .item > .testimonial-quote-wrap > .client-say > p"),
    segundoComentario: () => cy.get("[role='button']"),
    img3: () => cy.get("[alt='client']"),
    textoVeinte: () => cy.get(".active > .item > .testimonial-quote-wrap > .media > .media-body > .mb-0"),
    textoVeintiuno: () => cy.get(".active > .item > .testimonial-quote-wrap > .media > .media-body > span"),
    tercerComentario: () => cy.get("[role='button']"),
    img4: () => cy.get("[alt='client']"),
    textoVeintidos: () => cy.get(".active > .item > .testimonial-quote-wrap > .media > .media-body > .mb-0"),
    textoVeintitres: () => cy.get(".active > .item > .testimonial-quote-wrap > .media > .media-body > span"),

    }

    clickFuncionalidades() {

        this.elements.botonFuncionalidades().click()
    }

}

export class faq {

    elements = {

        desplazarse: () => cy.contains('FAQ'),
        preguntasFrecuentes: () => cy.get('#faq > .container > .justify-content-center > .col-md-9 > .section-heading > h2'),
        textoFaqUno: () => cy.get('#faq > .container > .justify-content-center > .col-md-9 > .section-heading > p'),
        textoUno: () => cy.get('.mb-3 > .card-header > .mb-0'),
        textoBotonUno: () => cy.get('.mb-3 > .card-header'),
        textoDentroUno: () => cy.get('#collapse0 > .card-body > p'),
        textoDos: () => cy.get(':nth-child(2) > .card-header > .mb-0'),
        textoBotonDos: () => cy.get(':nth-child(2) > .card-header'),
        textoDentroDos: () => cy.get('#collapse1 > .card-body > p'),
        textoTres: () => cy.get(':nth-child(3) > .card-header > .mb-0'),
        textoBotonTres: () => cy.get(':nth-child(3) > .card-header'),
        textoDentroTres: () => cy.get('#collapse2 > .card-body > p'),
        textoCuatro: () => cy.get(':nth-child(4) > .card-header > .mb-0'),
        textoBotonCuatro: () => cy.get(':nth-child(4) > .card-header'),
        textoDentroCuatro: () => cy.get('#collapse3 > .card-body > p'),
        textoCinco: () => cy.get(':nth-child(5) > .card-header > .mb-0'),
        textoBotonCinco: () => cy.get(':nth-child(5) > .card-header'),
        textoDentroCinco: () => cy.get('#collapse4 > .card-body > p'),
        textoSeis: () => cy.get(':nth-child(6) > .card-header > .mb-0'),
        textoBotonSeis: () => cy.get(':nth-child(6) > .card-header'),
        textoDentroSeis: () => cy.get('#collapse5 > .card-body > p'),
        img: () => cy.get('.img-fluid'),


    }

    clickFaq() {
        this.elements.desplazarse().scrollIntoView()
    }

    botonPreguntas() {
        this.elements.desplazarse().click()
    }

    botonOne() {
        this.elements.textoBotonUno().click()
    }

    botonTwo() {
        this.elements.textoBotonDos().click()
    }

    botonThree() {
        this.elements.textoBotonTres().click()
    }

    botonFour() {
        this.elements.textoBotonCuatro().click()
    }

    botonFive() {
        this.elements.textoBotonCinco().click()
    }

    botonSix() {
        this.elements.textoBotonSeis().click()
    }
}




