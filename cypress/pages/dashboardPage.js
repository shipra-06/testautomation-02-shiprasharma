/// <reference types="cypress" />



//Elements
const LOGOUT_BTN = '.user > .btn'



//Actions
function performLogout(confirmationContent){
    cy.get(LOGOUT_BTN).click()
    cy.contains(confirmationContent)

}


//Exports
module.exports = {
    performLogout
    
}