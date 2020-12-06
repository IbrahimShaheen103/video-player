describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000') // change URL to match your dev URL
      
      cy.get('.btn-o').trigger('mousedown')
      cy.get('.btn-t').click({ multiple: false })
    })
  })