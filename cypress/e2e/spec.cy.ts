/// <reference types="cypress" />
describe('Main page', () => {
  it('should visit http://localhost:3000/', () => {
    cy.visit('/');
  });

  it('Just a test to remove page load on coverage saving', () => expect(true).to.equal(true));

})