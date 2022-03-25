/// <reference types="cypress" />

import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

//import LoginPageHRM from './LoginPgae'
import SalesOrderPage from '../../../pages/SalesOrder/SalesOrderPage'
import CustomerCreationPage from '../../../pages/CustomerCreation/CustomerCreationPage'

Given('I successfully browse to the application',() =>{

    CustomerCreationPage.loadHomePage()
    
})

When('I entered detail and click on login',()=>{

    CustomerCreationPage.enterdetail()
    CustomerCreationPage.clickOnLoginButton()

})

And('I create a Sales Order',() =>{

    SalesOrderPage.clickOnSalesOrder()
    SalesOrderPage.ValidateSalesOrderPage()
    SalesOrderPage.EnterSalesOrderDetails()
    CustomerCreationPage.clickonCrossCustomerButton()
    
})

Then('Verify Order is created',() =>{

    SalesOrderPage.VerifyOrderCreated()
    
})





