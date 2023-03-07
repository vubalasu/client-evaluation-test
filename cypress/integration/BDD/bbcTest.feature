Feature: End to end scenarios of bbc fixtures

  Scenario: Determines what the next 5 premier league fixtures are for Tottenham Hotspur, and highlight games that are easy based on the team being in the
  bottom half of the premier league table.
    Given I am on  bbc fixtures page
    Then determines what the next 5 premier league fixtures are for Tottenham Hotspur
    And highlight easy based on the team bottom half of the premier league table
