/// <reference types="cypress" />

    // web-elements
    const LOGIN_PAGE_TITLE = 'Testers Hotel'
    const USERNAME_TEXTFIELD = ':nth-child(1) > input'
    const PASSWORD_TEXTFIELD = ':nth-child(2) > input'
    const SUBMIT_BTN = '.btn'
    const FORM_LABEL = 'Login'
    const ERROR_BLOCK = '.error'
    

     // Actions/ Methods / functions
     function checkLoginPageTitle(){
         cy.title().should('eq', LOGIN_PAGE_TITLE)
     }

     function performValidLogin(username, password,confirmationContent){
        cy.get( USERNAME_TEXTFIELD).type(username)
        cy.get(PASSWORD_TEXTFIELD).type(password)
        cy.get (SUBMIT_BTN).click()
        cy.contains(confirmationContent)
     }

     function performInValidLogin(username, password,confirmationContent){
        cy.get( USERNAME_TEXTFIELD).type(username)
        cy.get(PASSWORD_TEXTFIELD).type(password)
        cy.get (SUBMIT_BTN).click()
        cy.get(ERROR_BLOCK).should('contain', confirmationContent)
     }

     // Exporting the functions
     module.exports = {
         checkLoginPageTitle,
         performValidLogin,
         performInValidLogin
     }

    