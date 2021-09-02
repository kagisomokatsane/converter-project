
/*describe ('API Test', ()=>{
    it('GET - read',()=>{
        
            cy.request('GET','http://data.fixer.io/api/latest?access_key=325b116556907b48c9d0d47423e30966')
            .then((response)=>{
             expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
            //expect(response.body.rates).has.property('AED',4.333273)
            
            //console.log(22*response.body.rates.ALL/response.body.rates.ZAR);
            
            cy.get('#currencyIn').select('MXN').should('have.value','MXN')
        
            cy.get('#currencyOut').select('EUR').should('have.value','EUR')

            cy.get('#ans').contains(22*response.body.rates.EUR/response.body.rates.MXN) 
           
            
            
        })
    })
})     */
describe("Test-Output", () => {
  it("Tests-API", () => {
    cy.request(
      "GET",
      "http://data.fixer.io/api/latest?access_key=325b116556907b48c9d0d47423e30966"
    ).then((response) => {
      expect(response).to.have.property("status", 200);
      cy.get("#ans").contains(
        (22 * response.body.rates.EUR) / response.body.rates.MXN
      );
    });
  });
});

it("stubbs-API", function () {
  cy.intercept("GET", "/http://data.fixer.io/*", { fixture: "my-rates.json" });
  //cy.fixture("my-rates.json").as("static-rates");
  cy.visit("/");
  //cy.wait(['@static-rates'])

  cy.get("#currencyIn").select("MXN").should("have.value", "MXN");

  cy.get("#currencyOut").select("EUR").should("have.value", "EUR");
  cy.get("#numInput").type("22");
  cy.get("#btn").click();
});
