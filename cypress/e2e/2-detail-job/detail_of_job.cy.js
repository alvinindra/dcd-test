describe('Show detail of job', () => {
  it('should navigate to the detail of job id 1', () => {
    cy.visit('http://localhost:3000/jobs/1');
    cy.get('h1').contains(`District Directives Liaison (Backend Developer)`);
  });

  it('should navigate to 404 page not found', () => {
    cy.visit('http://localhost:3000/jobs/assd', { failOnStatusCode: false });
    cy.get('h1').contains('404');
  });
});
