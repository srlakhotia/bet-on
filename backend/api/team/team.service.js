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

const searchTeam = async (teamSearchTerm, done) => {
  await TeamModal.find({
    "name": {
      $regex: teamSearchTerm,
      $options: "i"
    }
  }).then((err, docs) => {
    if(err) {
      done(err);
      return;
    }
    done(null, docs);
  });
};

module.exports = {
  createTeam,
  searchTeam
}