Feature: Purgomalum API
    Scenario: Replace profanity with asterisks
        Given I login into the page
        And I fill in the title with "test" and content with "shit"
        Then the response should replace "fuck" with "****"
