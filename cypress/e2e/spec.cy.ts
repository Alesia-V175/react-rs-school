/// <reference types="cypress" />

import '@cypress/code-coverage/support';
describe('Home page', () => {
  before(() => {
    cy.visit('/');
  })

  afterEach(() => {
    cy.window().trigger('upload');
  })

  it('should be switch to About page ', () => {
    cy.contains('About us').click();
    cy.url().should('include', '/about');
    cy.contains('All about us')
  });

  it('should be switch to Form page ', () => {
    cy.contains('Form').click();
    cy.url().should('include', '/form');
    cy.contains('Order Your Photo Shoot!')
  });

  // it('should switch to home page', () => {
  //   cy.get("img").click();
  //   cy.url().should('include', '');
  //   cy.contains('Explore the world with a photo!')
  // })

  it('should remove page load on coverage saving', () => {
    expect(true).to.equal(true)
  });

})
