const PAGE_URL = 'https://piecioshka.pl/blog/';

describe('General', function () {
    it('Verify is logo present', function () {
        cy.visit(PAGE_URL);
    });
});
