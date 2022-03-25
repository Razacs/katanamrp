/// <reference types="cypress" />

import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import CustomerCreationPage from '../../../pages/CustomerCreation/CustomerCreationPage'

Given('I successfully browse to the application',() =>{

    CustomerCreationPage.loadHomePage()
    
})

When('I entered detail and click on login',()=>{


    CustomerCreationPage.ValidateWrongCredentials() // validate wrong inputs on login page
    CustomerCreationPage.enterdetail()
    CustomerCreationPage.clickOnLoginButton()

})

Then('I should see the title of the page is {string}', pagetitle=>{

    CustomerCreationPage.getTitle(pagetitle)
    
})

And('I click on Plus Launcher',() =>{

    CustomerCreationPage.clickOnPlusButton()

})


And('I create a new customer',() =>{

    CustomerCreationPage.clickOnCustomerButton()
    CustomerCreationPage.ValidateCustomerPage()

    CustomerCreationPage.EnterCustomerDetails()
    CustomerCreationPage.EnterBillingAddress()
    
    CustomerCreationPage.clickonCrossCustomerButton()
    
})



