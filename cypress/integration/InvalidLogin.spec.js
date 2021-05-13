/// <reference types="cypress" />
import * as loginFuncs from '../pages/loginPage'

describe("Testsuite",()=>{
    const faker = require("faker");
    let username = faker.name.findName()
    let password = faker.internet.password()
    beforeEach(()=>{
        cy.log('start login')
        cy.visit ('http://localhost:3000/login')
        loginFuncs.checkLoginPageTitle()

    });

    it('Verify invalid Password Login',() =>{         
        loginFuncs.performInValidLogin('tester01',password,'Bad username or password')
        cy.percySnapshot('Verify invalid Password Login')
    })

    it('Verify invalid Username Login',() =>{         
        loginFuncs.performInValidLogin(username,'GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Bad username or password')
        cy.percySnapshot('Verify invalid Username Login')
    })

})