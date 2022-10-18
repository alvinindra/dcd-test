describe('Show the list of jobs', () => {
  it('should navigate to the homepage', () => {
    cy.visit('http://localhost:3000/jobs/1');
    cy.get('h1').contains(`District Directives Liaison (Backend Developer)`);
  });
});
