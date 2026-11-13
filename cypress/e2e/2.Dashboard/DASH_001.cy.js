describe('Dashboard', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://red-gauge.vercel.app/login')
  })

it('Dashboard loads after login', () => { //DASH-001
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
    cy.get('#login-email').type('siphesihle.hobongwana@redacademy.co.za')
    cy.get('#login-password').type('P@ssword123')
    cy.get('._button_1kfu6_254').click()
    cy.get('.dashboard-page').should('be.visible')
  })

 it('Dashboard widgets displayed', () =>{ //DASH-002
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
  cy.get('#login-email').type('siphesihle.hobongwana@redacademy.co.za')
    cy.get('#login-password').type('P@ssword123')
    cy.get('._button_1kfu6_254').click()
    cy.get('.dashboard-page').should('be.visible')
 }) 

 it('Refresh dashboard', () =>{
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
    cy.visit('https://red-gauge.vercel.app/login');

    cy.reload();

    cy.url().should('include', '/login');
})

  it('Responsive dashboard', () => { // DASH-004
     cy.get('._skip_kvsa1_227').click() //Clikcs skip button

    // Login
    cy.get('#login-email').type('siphesihle.hobongwana@redacademy.co.za');
    cy.get('#login-password').type('P@ssword123');
    cy.get('._button_1kfu6_254').click();

    cy.get('.dashboard-page').should('be.visible');

    // Desktop
    cy.viewport(1280, 720);
    cy.get('.dashboard-page').should('be.visible');

    // Tablet
    cy.viewport(768, 1024);
    cy.get('.dashboard-page').should('be.visible');

    // Mobile
    cy.viewport(375, 812);
    cy.get('.dashboard-page').should('be.visible');

})

it('Dashboard perfomance', () =>{
 cy.get('._skip_kvsa1_227').click() //Clikcs skip button
 cy.get('#login-email').type('siphesihle.hobongwana@redacademy.co.za')
 cy.get('#login-password').type('P@ssword123')
 cy.get('._button_1kfu6_254').click()
 cy.get('.dashboard-page').should('be.visible')
})

})


 
