const teamService = require('./team.service');

const createTeam = (teamData, done) => {
  teamService.createTeam(teamData, done);
}

module.exports = {
  createTeam
}