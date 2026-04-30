import App from "../../src/components/App";

describe("NewsLetterSubscription", () => {
  it("Check input field for placeholder", () => {
    cy.mount(<App />);
    cy.get("input").should("have.attr", "placeholder", "Subscribe to our newsletter");
  });

  it("test newsletter subscription", () => {
    cy.mount(<App />);
    cy.get("[data-test=\"email-input\"]").type("test@gmail.com");
    cy.get("[data-test=\"submit-button\"]").click();
    cy.get("[data-test=\"success-message\"]")
      .should("exist")
      .contains("Thank you for subscribing to our newsletter");
  });
});
