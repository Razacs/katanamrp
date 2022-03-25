class CustomerCreationPage{

    static loadHomePage(){

        //cy.visit('/')
        cy.visit(Cypress.env('url'))
        cy.url().should('include', 'katanamrp')
    }

    static ValidateWrongCredentials(){

        cy.xpath("//input[@id='1-email']").type('ttestt1@gmail')
        cy.xpath("//span[@class='auth0-label-submit']").click()

        cy.xpath("//div[@class='auth0-lock-input-block auth0-lock-input-email auth0-lock-error']//div[@class='auth0-lock-error-invalid-hint']").should('be.visible')

        cy.xpath("//div[@class='auth0-lock-input-block auth0-lock-input-password auth0-lock-error']//div[@class='auth0-lock-error-invalid-hint']").should('be.visible')

        //clear the fields

        cy.xpath("//input[@id='1-email']").clear()

        cy.xpath("//input[@id='1-email']").type('ttestt1@gmail.com')
        cy.xpath("//input[@name='password']").type('Ali')
        
        cy.xpath("//span[@class='auth0-label-submit']").click()

        cy.get('.animated > span').should('be.visible')

        //clear the fields
        cy.xpath("//input[@id='1-email']").clear()
        cy.xpath("//input[@name='password']").clear()


    }

    static enterdetail(){

        cy.xpath("//input[@id='1-email']").type('ttestt1@gmail.com')
        cy.xpath("//input[@name='password']").type('Ali_12345')
    }

    static clickOnLoginButton(){
        cy.xpath("//span[@class='auth0-label-submit']").click()
    }

    static getTitle(pagetitle){

        cy.xpath("//title[.='Sales list - Katana']").invoke('text').then((text1)=>{

        expect(text1.trim()).to.equal(pagetitle)
    })
    }

    static clickOnPlusButton(){
        cy.xpath("//button[@id='globalAdd']").click()
    }

    static clickOnCustomerButton(){
        cy.xpath("//a[@id='add-customer']//span[@class='MuiTypography-root MuiListItemText-primary MuiTypography-body2 MuiTypography-displayBlock']").click()
    }
    static ValidateCustomerPage(){
        cy.xpath("//span[contains(text(),'Customer')]").should('have.text', 'Customer')
        cy.url().should('include', '/customer')
    }

    static EnterCustomerDetails(){
        cy.xpath("//input[@name='firstName']").type("Raza")
        cy.xpath("//input[@name='lastName']").type("Test")
        cy.xpath("//input[@name='company']").type("Jorden company")
        cy.get("[name='name']").type("First Customer Test")
        cy.get("[name='email']").type('raza1@gmail.com')
        cy.get("[name='phone']").type('03077029702')
        
    }

    //Billing Address Details
    static EnterBillingAddress(){
        cy.xpath("//input[@name='defaultBillingAddress']").click()
        cy.xpath("//h2[@class='MuiTypography-root MuiTypography-h6']").should('have.text', 'Billing Address')

        cy.xpath("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6']//input[@name='firstName']").type('Test Check1')
        cy.xpath("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6']//input[@name='company']").type("First Company")
        cy.xpath("//div[@class='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6']//input[@name='phone']").type("12345")
        cy.get("[placeholder='Enter street name']").type("Gulberg 2")
        

        //cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root', { timeout: 10000 }).should('be.visible')
        cy.get(':nth-child(1) > .MuiListItemText-root > .MuiTypography-root').invoke('show')
        cy.contains('Lahore').click()
        cy.get("[name='city']").type("Lahore")
        cy.get("[name='state']").type("Punjab")
        cy.xpath("//input[@name='zip']").type("54600")

        cy.get("#submitButton").click()
        
    }

    static clickonCrossCustomerButton(){

        cy.get(".print-hide.MuiButtonBase-root .MuiSvgIcon-root").click() //click on cross button
        
    }

}

export default CustomerCreationPage