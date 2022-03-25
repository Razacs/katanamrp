class SalesOrderPage{
    

    static getTitle(pagetitle){

        cy.xpath("//title[.='Sales list - Katana']").invoke('text').then((text1)=>{

        expect(text1.trim()).to.equal(pagetitle)
    })
    }

    static clickOnPlusButton(){
        cy.xpath("//button[@id='globalAdd']").click()
    }

    static clickOnSalesOrder(){
        cy.xpath("//span[contains(text(),'Sales order')]").click()
    }
    static ValidateSalesOrderPage(){
        cy.xpath("//span[.='Sales orders']").should('have.text', 'Sales orders')
        cy.url().should('include', '/salesorder')
    }

    static EnterSalesOrderDetails(){

        cy.xpath("//input[@class='MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd']").type("First Customer").type('{enter}')
        cy.xpath("//span[@class='gridCellHintText']").type('test{enter}') //item
        //cy.type('{downarrow}{enter}')
        cy.xpath("//h2[@class='MuiTypography-root MuiTypography-h6']").should('be.visible', 'New product')
        cy.get("[placeholder='Select or create unit of measure']").type("cm").type('{enter}')
        //cy.get("//span[contains(text(),'Done')]").click() //click on Done button on New Product Modal
        //cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click() //click on Done button on New Product modal
        cy.get('.MuiDialogActions-root > .MuiButton-contained').click()
    }

    static VerifyOrderCreated(){

        cy.xpath("//div[@class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height drag-handle-index']/div[@class='ag-cell-wrapper']").should('be.visible') //validate order is created
           
    }


    //For Edit Sales Order

    static ClickOnEditCustomer(){

        cy.xpath("//a[.='First Customer']").click() //validate order is created
           
    }

    static EditShipAddressCustomer(){

        cy.xpath("//p[@class='MuiTypography-root sc-crzoAE jsVzVt MuiTypography-body1 MuiTypography-colorTextPrimary']").click() //Click Shipment address
        cy.get("[placeholder='Enter street name']").type("Township")
        cy.xpath("//span[.='Township Drive, Burleigh Heads QLD, Australia']").click()

        cy.get("#submitButton").click()
           
    }




}

export default SalesOrderPage