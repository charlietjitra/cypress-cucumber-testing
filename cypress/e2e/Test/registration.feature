Feature: Registration
    Scenario: Registering a new user
        Given I am on the registration page
        When I fill in the registration form with valid details
        When I submit the registration form
        Then I should be redirected to the homepage
        And I can log in using the new user
        