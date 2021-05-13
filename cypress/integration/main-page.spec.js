/// <reference types="cypress" />
import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as welcomePageFuncs from '../pages/welcomePage'
import * as roomPageFuncs from '../pages/roomPage'
import * as createPageFuncs from '../pages/createRoom'

describe("Testsuite",()=>{
   
   beforeEach(()=>{
        cy.log('start login')
        cy.visit ('http://localhost:3000/')
        loginFuncs.checkLoginPageTitle()  
        loginFuncs.performValidLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')      
    });    

    it('Validate Rooms Block',() =>{                    
        welcomePageFuncs.verifyRoomBlock() 
        cy.percySnapshot('Validate Rooms Block')    
    })

    it('Validate Reservation Block',() =>{                     
        welcomePageFuncs.verifyReservationBlock()
       cy.percySnapshot('Validate Reservation Block')
    })

    it('Validate client Block',() =>{                      
       welcomePageFuncs.verifyClientBlock()    
      cy.percySnapshot('Validate client Block')   
    })

    it('Validate Bills Block',() =>{                           
        welcomePageFuncs.verifyBillsBlock()  
       cy.percySnapshot('Validate Bills Block')  
    })
    
    it('View Room Page',() =>{  
        welcomePageFuncs.verifyRoomBlock()                       
        roomPageFuncs.verifyRoomPage()  
       cy.percySnapshot('View Room Page')  
    })

    it('Create Room Page',() =>{  
        welcomePageFuncs.verifyRoomBlock()                       
        roomPageFuncs.verifyRoomPage()
        createPageFuncs.verifyCreateRoom() 
       cy.percySnapshot('Create Room Page')   
    })


    afterEach(()=> {
        dashboardFuncs.performLogout('Login')
    })

})