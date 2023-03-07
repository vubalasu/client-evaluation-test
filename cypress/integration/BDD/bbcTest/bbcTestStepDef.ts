import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import BBCFixturesPage from '../../../support/pageObjects/BBCFixturesPage';

let teams: Array<string> = [];
const bbcFixturesPage = new BBCFixturesPage();

Given('I am on  bbc fixtures page', () => {
  cy.visit('https://www.bbc.co.uk/sport/football/scores-fixtures');
});

Then(/^determines what the next (\d+) premier league fixtures are for (.*)$/, (pLFixtures, team) => {
  teams=[]
  bbcFixturesPage.getNextPLFixturesForTeam(pLFixtures, team, teams)
});

And('highlight easy based on the team bottom half of the premier league table', () => {
  cy.visit('https://www.bbc.co.uk/sport/football/tables')
  bbcFixturesPage.highLightEastTeams(teams);
});
