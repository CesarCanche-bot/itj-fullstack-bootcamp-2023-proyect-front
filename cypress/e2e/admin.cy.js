describe("Admin page", () => {
  it("shuld add new item", () => {
    cy.visit("/admin");
    cy.contains("button", "Add new item").click();

    //getting elements from the modal
    cy.get("input[name='name']").clear().type("My Food");
    cy.get("input[name='price']").clear().type("50");
    cy.get("input[name='discount']").clear().type(10);
    cy.get("textarea[name='description']")
      .clear()
      .type("description of my food");
    cy.get("input[name='imageUrl']")
      .clear()
      .type(" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulsyulv20t9H3uip4vbjb5BwI23oWfy_4sA&usqp=CAU");
      cy.get("input[name='ingredients']").parent().click();
      cy.contains("li","masa").click();
      cy.contains("li", "manteca de puerco").click().type("{esc}");
      cy.contains("button", "Add item").click();

      cy.contains("My Food");
  });
});
