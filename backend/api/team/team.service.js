const TeamModal = require('./team.entity');

const createTeam = async (teamData, done) => {
  const team = new TeamModal({
    ...teamData
  });
  await team.save(err => {
    if(err) {
      done(err);
      return;
    }
  });
  done(null, team);
};

module.exports = {
  createTeam
}