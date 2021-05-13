/// <reference types="cypress" />



//Elements
const LOGOUT_BTN = ".user > .btn"
const VIEW_ROOM_BLOCK =".blocks > :nth-child(1)"
const ROOMS = ":nth-child(1) > h4"
const ROOM_NUMBER = ".blocks > :nth-child(1) > div"
const VIEW_ROOM_BTN = ":nth-child(1) > .btn"

const VIEW_CLIENTS_BLOCK =".blocks > :nth-child(2)"
const CLIENTS = ":nth-child(2) > h4"
const CLIENTS_NUMBER = ".blocks > :nth-child(2) > div"
const VIEW_CLIENT_BTN = ".blocks > :nth-child(2) > .btn"

const VIEW_BILLS_BLOCK =".blocks > :nth-child(3)"
const BILLS= ":nth-child(3) > h4"
const BILLS_TOTAL= ":nth-child(3) > :nth-child(2)"
const BILLS_PAID = ":nth-child(3) > :nth-child(3)"
const VIEW_BILLS_BTN = ":nth-child(3) > .btn"

const VIEW_RESERVATION_BLOCK =".blocks > :nth-child(4)"
const RESERVATION = ":nth-child(4) > h4"
const RESERVATION_TOTAL = ":nth-child(4) > :nth-child(2)"
const CURRENT = ":nth-child(4) > :nth-child(3)"
const VIEW_RESERVATION_BTN = ":nth-child(4) > .btn"


//function/action

  
    function verifyRoomBlock(){
        cy.get( VIEW_ROOM_BLOCK).contains('Rooms')
        cy.get(ROOM_NUMBER).contains(2)
        cy.get (VIEW_ROOM_BTN).should('contain','View')
         cy.get (VIEW_ROOM_BTN).click()
         cy.url().should('include', '/rooms')
    }
    function verifyClientBlock(){
        cy.get(VIEW_CLIENTS_BLOCK).contains('Client')
        cy.get(CLIENTS_NUMBER).contains(2)
        cy.get (VIEW_CLIENT_BTN).should('contain','View')
        cy.get (VIEW_CLIENT_BTN).click()
        cy.url().should('include', '/clients')
    }
    
    function verifyBillsBlock(){
        cy.get(VIEW_BILLS_BLOCK).contains('Bills')
        cy.get(BILLS_TOTAL).contains(1)
        cy.get (BILLS_PAID).contains('Paid')
        cy.get (VIEW_BILLS_BTN).click()
        cy.url().should('include', '/bills')
    }
    
    function verifyReservationBlock(){
        cy.get(VIEW_RESERVATION_BLOCK).contains('Reservation')
        cy.get(RESERVATION_TOTAL).contains(1)
        cy.get (CURRENT).contains('Current')
        cy.get (VIEW_RESERVATION_BTN).click()
        cy.url().should('include', '/reservation')
    }
    //exports
    module.exports = {
        verifyRoomBlock,
        verifyClientBlock,
        verifyBillsBlock,
        verifyReservationBlock

}




