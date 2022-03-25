@UI
Feature: Test the functionality of katanamrp

  Scenario: create customer scenario
    Given I successfully browse to the application
    When I entered detail and click on login
    Then I should see the title of the page is 'Sales list - Katana'
    And I click on Plus Launcher
    And I create a new customer

Scenario: Create Sales Order scenario1

    And I click on Plus Launcher
    And I create a Sales Order
    Then Verify Order is created

Scenario: Editing the customer address on Sales Orders

    And I click on edit order
    Then I edit the customer address




