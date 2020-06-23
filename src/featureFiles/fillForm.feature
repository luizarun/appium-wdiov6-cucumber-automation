Feature: I Want to fill up the Address form in Zalora app

@android
  Scenario: I fill up the Zalora app address form
    Given I launch the app
    And I land on home screen after login
    And I navigate to add address screen
    Then I fill up the address form
