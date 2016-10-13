Feature: GitHub page
    As a user of my dev kit 
    I want to make sure my devkit is on GitHub

    Scenario: Reading documentation
        Given I am on the devkit GitHub Repo
        When I click "README.md"
        Then I should see "react-js-dev-kit"