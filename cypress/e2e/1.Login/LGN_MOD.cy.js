describe('Login Screen', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit('https://red-gauge.vercel.app/login')
  })

it.only('Login with valid credentials', () => { //LGN-001
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
   cy.get('#login-email').type('siphesihle.hobongwana@redacademy.co.za')
   cy.get('#login-password').type('P@ssword1234')
   cy.get('._button_1kfu6_254').click()
 })

 it('Login with invalid password', () => { //LGN-002
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
  cy.get('#login-email').type('dylan.cupido@redacademy.co.za')
  cy.get('#login-password').type('1247')
  cy.get('._button_1kfu6_254').click()
})

it('Login with invalid email', ()=>{ //LGN-003
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
  cy.get('#login-email').type('DYlan.CUPId0@rA.co.za')
  cy.get('#login-password').type('1234')
  cy.get('._button_1kfu6_254').click()
})

it('Login with an empty email',()=>{ //LGN-004
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
  cy.get('#login-email')
  cy.get('#login-password').type('1234')
  cy.get('._button_1kfu6_254').click()
})

it('Login with empty password', ()=>{ //LGN-005
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
  cy.get('#login-email').type('dylan.cupido@redacademy.co.za')
  cy.get('#login-password')
  cy.get('._button_1kfu6_254').click()
})

it('Login with both fields empty', ()=>{ //LGN-006
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
  cy.get('#login-email')
  cy.get('#login-password')
  cy.get('._button_1kfu6_254').click()
})

it('Password field is masked',()=>{ //LGN-007
   cy.get('._skip_kvsa1_227').click() //Clikcs skip button
  cy.get('#login-email').type('dylan.cupido@redacademy.co.za')
  cy.get('#login-password').type('1234')
  cy.get('._button_1kfu6_254').click()
})

// it('Forgot Password link',()=>{ //LGN-008


// })

// it.only('Remember Me checkbox', ()=>{ //lGN-009

// })

// it('SQL injection attemps',()=>{
  
//     const sqlInjection = "' OR '1'='1"
//     cy.get('#login-email').type(1)
//     cy.get('#login-password').type(1)
//     cy.get('._button_4iesk_491').click()
//     // User should NOT be authenticated
//     cy.url().should('not.include', '/dashboard')
//   })



})



