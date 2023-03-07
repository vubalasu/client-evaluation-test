class BBCFixturesPage {


  getPLFixtures(pLFixtures: number, team: string, teams: Array<string>) {
    cy.get('.qa-match-block').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('ul li').each(($body) => {
          if ($body.text().includes(team)) {
            cy.wrap($body).within(() => {
              cy.get('span.sp-c-fixture__team-name-trunc').each(($ab) => {
                const teamName = $ab.text().trim();
                if (!team.includes(teamName)) {
                  teams.push(teamName);
                }
              });
            });
          }
        });
      });
    });
  }


  getNextPLFixturesForTeam(pLFixtures: number, team: string, teams: Array<string>) {
    this.getPLFixtures(pLFixtures, team, teams);
    if (teams.length < pLFixtures) {
      cy.get('ul#sp-timeline-future-dates li').each(($el, index, list) => {
        const elementCount = list.length - 1;
        if (index < elementCount) {
          cy.wrap($el).within(() => {
            cy.get('a').click();
          }).then(() => {
            if (teams.length < pLFixtures) {
              this.getPLFixtures(pLFixtures, team, teams);
            }
          });
        }
      });
    }
  }

  highLightEastTeams(teams: Array<string>) {
    cy.log(`Fixtures found are ${teams.toString()}`);
    const easyTeams: Array<string> = [];
    if (teams.length > 0) {
      cy.get('tbody.gel-long-primer  tr').each(($el, index) => {
        if (index > 10) {
          cy.wrap($el).within(() => {
            cy.get('td').eq(2).then(($td) => {
              const filtered = teams.filter(x => x.toLocaleLowerCase().includes($td.text().trim().toLowerCase()));
              if (filtered.length > 0) {
                easyTeams.push(filtered[0]);
              }
            });
          });
        }
      }).then(() => {
        cy.log(`Easy Teams found are ${easyTeams.toString()}`);
      });
    }

  }

}

export default BBCFixturesPage;
