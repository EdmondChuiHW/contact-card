/// <reference types="cypress" />

describe('Homepage', () => {
  it('should load', () => {
    cy.visit('/');

    cy.contains('START LEFT');
    cy.contains('START RIGHT');
  });

  it('should serve left if start left is clicked', () => {
    cy.visit('/');

    cy.get('[data-cy=start-left]').click({ force: true });
    cy.get('[data-cy=counter-left]').contains('0');
    cy.get('[data-cy=counter-right]').contains('0');
    cy.contains('NEW GAME');

    cy.get('[data-cy=server-left]').contains('SERVING');
  });

  it('should serve right if start right is clicked', () => {
    cy.visit('/');

    cy.get('[data-cy=start-right]').click({ force: true });
    cy.get('[data-cy=counter-left]').contains('0');
    cy.get('[data-cy=counter-right]').contains('0');
    cy.contains('NEW GAME');

    cy.get('[data-cy=server-right]').contains('SERVING');
  });

  it('should reset game if clicked', () => {
    cy.visit('/');

    cy.get('[data-cy=start-right]').click({ force: true });
    cy.get('[data-cy=reset-game]').click();

    cy.contains('START LEFT');
    cy.contains('START RIGHT');
  });

  it('should increment left if clicked', () => {
    cy.visit('/');

    cy.get('[data-cy=start-left]').click({ force: true });
    cy.get('[data-cy=counter-left]')
      .contains('0')
      .click({ force: true })
      .contains('1')
      .click({ force: true })
      .contains('2');
  });

  it('should increment right if clicked', () => {
    cy.visit('/');

    cy.get('[data-cy=start-right]').click({ force: true });
    cy.get('[data-cy=counter-right]')
      .contains('0')
      .click({ force: true })
      .contains('1')
      .click({ force: true })
      .contains('2');
  });

  it('should switch serving at 5 to right if started left', () => {
    cy.visit('/');

    cy.get('[data-cy=start-left]').click({ force: true });

    cy.get('[data-cy=server-left]').contains('SERVING');
    cy.get('[data-cy=server-right]').contains('SERVING').should('not.exist');

    cy.get('[data-cy=counter-left]')
      .click()
      .click();

    cy.get('[data-cy=counter-right]')
      .click()
      .click()
      .click();

    cy.get('[data-cy=server-right]').contains('SERVING');
    cy.get('[data-cy=server-left]').contains('SERVING').should('not.exist');
  });

  it('should switch serving at 5 to left if started right', () => {
    cy.visit('/');

    cy.get('[data-cy=start-right]').click({ force: true });

    cy.get('[data-cy=server-right]').contains('SERVING');
    cy.get('[data-cy=server-left]').contains('SERVING').should('not.exist');

    cy.get('[data-cy=counter-right]')
      .click()
      .click();

    cy.get('[data-cy=counter-left]')
      .click()
      .click()
      .click();

    cy.get('[data-cy=server-left]').contains('SERVING');
    cy.get('[data-cy=server-right]').contains('SERVING').should('not.exist');
  });
});
