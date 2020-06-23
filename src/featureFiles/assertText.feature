Feature: I Want to Assert a Text in  Zalora app

@android
  Scenario: I assert a text on more screen
    Given I launch the app
    And I land on home screen after login
    When I navigate to more screen
    Then I should see location change text on the screen