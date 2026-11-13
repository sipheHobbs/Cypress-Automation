describe('Navigation', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://red-gauge.vercel.app/login')
  })

  it('Navigate to Dashboard', () => { //DASH-001
     cy.get('._skip_kvsa1_227').click() //Clikcs skip button
    cy.get('#login-email').type('siphesihle.hobongwana@redacademy.co.za')
    cy.get('#login-password').type('P@ssword123')
    cy.get('._button_1kfu6_254').click()
    cy.get('.dashboard-page').should('be.visible')
  })

  it.only('Navigates to reports', () => {
    cy.get('._skip_kvsa1_227').click() //Clikcs skip button
    cy.get('#login-email').type('siphesihle.hobongwana@redacademy.co.za')
    cy.get('#login-password').type('P@ssword123')
    cy.get('._button_1kfu6_254').click()


  })



})