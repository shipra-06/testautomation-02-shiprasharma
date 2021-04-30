/// <reference types="cypress" />


//Elements
const ROOMS = "h2 > div"
const DETAIL = ":nth-child(1) > :nth-child(2) > h3"
const AVAILABILITY = ":nth-child(1) > :nth-child(2) > .available"
const PRICE = ":nth-child(1) > :nth-child(2) > .price"
const FEATURES = ":nth-child(1) > :nth-child(2) > .features"
const CREATE_ROOMS = "h2 > .btn"
const BACK_BTN = ":nth-child(3) > .btn"

//function/action
function verifyRoomPage (){
    cy.get( ROOMS).contains('Rooms')
    cy.get (DETAIL).contains('Floor' )
    cy.get( AVAILABILITY).contains('true')
    cy.get( PRICE).contains('Price')
    cy.get(FEATURES).contains('Features')
     cy.get (CREATE_ROOMS).contains('Create Room')
     cy.get (BACK_BTN).click()
    
     }

//exports
module.exports = {
    verifyRoomPage  
}