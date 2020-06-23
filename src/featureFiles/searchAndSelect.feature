Feature: I Want to Search an Item in  Zalora app

@android
  Scenario: I search and select an item from the result
    Given I launch the app
    And I land on home screen after login
    And I search for bag
    Then I select an item and land on the product screen