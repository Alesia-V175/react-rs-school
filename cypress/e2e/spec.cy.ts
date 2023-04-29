/// <reference types="cypress" />

import '@cypress/code-coverage/support';
import 'cypress-file-upload';

before(() => {
  cy.visit('/');
});

afterEach(() => {
  cy.window().trigger('upload');
});

describe('Navigation', () => {
  it('should show About page ', () => {
    cy.contains('About us').click();
    cy.url().should('include', '/about');
    cy.contains('All about us');
  });

  it('should show Form page ', () => {
    cy.contains('Form').click();
    cy.url().should('include', '/form');
    cy.contains('Order Your Photo Shoot!');
  });

  it('should show 404 page', () => {
    cy.visit('/avava');
    cy.contains('Go home');
  });

  it('should return to Home page', () => {
    cy.get('._container__button_ee67t_43').click();
    cy.contains('Explore the world with a photo!');
  })
});

describe('Home page', () => {
  it('should contain title and banner', () => {
    cy.get('img[alt="banner"]');
    cy.get('h1').contains('Explore the world with a photo!');
  })

  it('should contain search input', () => {
    cy.get('input').should('not.be.disabled');
  });

  it('should have cards section', () => {
    cy.get('._card__wrap_2o4vp_29').should('have.length', '30');
  })
});

describe('Search bar', () => {
  it('should search right value', () => {
    cy.get('._search__input_1d74q_34 ')
      .click()
      .type('sun')
      .type('{enter}');
    cy.get('._card__wrap_2o4vp_29')
      .first()
      .contains('sunset view');
    cy.get('._search__input_1d74q_34 ').clear();
  });
});

describe('Photo card', () => {
  it('should have correct value', () => {
    cy.get('._search__input_1d74q_34 ')
      .click()
      .type('sea')
      .type('{enter}');
    cy.get('._card__wrap_2o4vp_29')
      .first()
      .contains('person holding boxed water underwater')
      .click()
      .get('._card__color_kn6zw_111')
      .contains('#26a6c0');
    cy.get('._wrapper_kn6zw_29')
      .click();
  });
});

describe('Form Card', () => {
  it('checks Create component', () => {
    cy.visit('/form');
    cy.get('input[name="name"]').type('Ivan');
    cy.get('input[name="email"]').type('Ivan@gmail.com');
    cy.get('input[name="date"]').type('2023-09-01');
    cy.get('input[name="radio"]').last().check();
    cy.get('select').select('Fashion');
    cy.get('input[name="checkbox"]').click();
    cy.get('input[name="file"]').selectFile('src/client/src/assets/images/about-banner.jpg');
    cy.get('[type="submit"]').click();

    cy.get('._card_13wvb_29').contains('Ivan');
  });

  it('should remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
})
