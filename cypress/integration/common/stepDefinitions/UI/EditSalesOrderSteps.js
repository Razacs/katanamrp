/// <reference types="cypress" />

import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'

import SalesOrderPage from '../../../pages/SalesOrder/SalesOrderPage'

And('I click on edit order',() =>{

    SalesOrderPage.ClickOnEditCustomer()
    
})

Then('I edit the customer address',() =>{

    SalesOrderPage.EditShipAddressCustomer()
    
})
