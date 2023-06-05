describe('Header Navigation', () => {
    it('should navigate to the adminpage', () => {
      // Start from the index page
      cy.visit('/');
   
      // Find a link with an href attribute containing "admin" and click it
      cy.get('a[href*="admin"]').click();
   
      // The new url should include "/about"
      cy.url().should('include', '/admin');
   
      // The new page should contain an element with "Add new item"
      cy.contains('Add new item').should('be.visible');
    });
  });