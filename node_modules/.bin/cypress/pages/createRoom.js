/// <reference types="cypress" />

const CREATE_ROOMS = "h2 > .btn"
const VIEW_ROOM_BTN = ":nth-child(1) > .btn"
const ROOM_CATEGORY = ':nth-child(1) > select'
const ROOM_NUMBER = ':nth-child(2) > input'
const ROOM_FLOOR = ':nth-child(3) > input'
const AVAILABLE_CHECKBOX = '.checkbox'
const ROOM_PRICE = ':nth-child(5) > input'
const ROOM_FEATURES = ':nth-child(6) > select'
const SAVE_BUTTON = '.blue'
const ROOM_LIST = '.rooms'
const ROOM_ACTIONS = ':nth-child(3) > .action'
const DELETE_ROOM = '.menu > :nth-child(2)'
const FAKER = require("faker");
let FAKE_ROOM_PRICE = FAKER.random.number({
                        'min': 1000,
                        'max': 5000
                    });

function verifyCreateRoom(){
    cy.get (VIEW_ROOM_BTN).click()
    cy.url().should('include', '/rooms')
    cy.get (CREATE_ROOMS).click()
    cy.url().should('include', '/room/new')
    cy.get(ROOM_CATEGORY).select('Double')
    cy.get(ROOM_NUMBER).type(2)
    cy.get(ROOM_FLOOR).type(2)
    cy.get(AVAILABLE_CHECKBOX).click()
    cy.get(ROOM_PRICE).type(FAKE_ROOM_PRICE)
    cy.get(ROOM_FEATURES).select('Balcony')
    cy.get (SAVE_BUTTON).click()
    cy.url().should('include', '/rooms')
    cy.get(ROOM_LIST ).find('>:nth-child(3)')
    cy.get(ROOM_ACTIONS).click()
    cy.get(DELETE_ROOM).click()

}

//exports
module.exports = {
    verifyCreateRoom  
}
