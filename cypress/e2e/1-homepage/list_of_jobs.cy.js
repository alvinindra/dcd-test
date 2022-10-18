describe('Show the list of jobs', () => {
  it('should navigate to the homepage', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Daftar Pekerjaan Terbaru');
    cy.get('.flex.flex-col.gap-y-6 a div div div div')
      .first()
      .should('have.text', 'District Directives Liaison');
  });
});
