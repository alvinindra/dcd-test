describe('Show the list of jobs with searching', () => {
  it('should search job with title District Directives Liaison', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#job-search').type('District Directives Liaison', { force: true });
    cy.get('.flex.flex-col.gap-y-6 a div div div div')
      .first()
      .should('have.text', 'District Directives Liaison');
  });

  it('should search job but the result is not found', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#job-search').type('asdasd', { force: true });
    cy.get('h2').contains('Maaf, Pekerjaan yang kamu cari tidak ditemukan');
  });
});
