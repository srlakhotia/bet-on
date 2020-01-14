const teamService = require('./team.service');

const createTeam = (teamData, done) => teamService.createTeam(teamData, done);

const searchTeam = (teamSearchTerm, done) => teamService.searchTeam(teamSearchTerm, done);

module.exports = {
  createTeam,
  searchTeam
};