describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://filiphric.com/blog");
    //cy.get('[data-cy="blog-item"]')

    cy.get("h2").each(($row) => {
      // cy.wrap($row).find("button").click();
      cy.wrap($row)
        .invoke("text")
        .then((s) => cy.log(`got ${s}`));
    });

    // cy.get(':nth-child(1) > [data-cy="blog-item"] > .text-3xl')
  });
});
