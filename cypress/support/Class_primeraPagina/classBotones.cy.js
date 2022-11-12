export class botonNosotros {
    
    elements = {
        botonNosotros: () => cy.get(".navbar-nav > :nth-child(1) > .page-scroll").click(),
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
        this.elements.botonNosotros()
    }
}

export class botonComo {

    elements = {

        BotonComo: () => cy.get(".navbar-nav > :nth-child(2) > .page-scroll").click(),
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
        this.elements.BotonComo()
    }
}