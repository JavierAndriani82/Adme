it("hovers and applies styles from :hover pseudo-class", () => {
    cy.get(".action-btn")
      .should("have.css", "background-color", "rgb(217, 83, 79)")
      
      .should("have.css", "background-color", "rgb(201, 48, 44)");

    cy.get("body").realHover({ position: "topLeft" });
    cy.get(".action-btn").should(
      "have.css",
      "background-color",
      "rgb(217, 83, 79)"
    );
  });