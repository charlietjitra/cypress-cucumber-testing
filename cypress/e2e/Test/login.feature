Feature: loaded
    Scenario: Visiting the login page successfully
        Given I open the login page
        Then I should see the login form
        Then I can logged in
        Then I should be directed to homepage
