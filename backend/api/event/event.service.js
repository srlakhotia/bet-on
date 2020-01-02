const EventModal = require('./event.entity');

const createEvent = async (eventData, done) => {
  let event = new EventModal({
    ...eventData
  });
  await event.save(err => {
    if(err) {
      done(err);
      return;
    }
  });
  done(null, event);
};

const getAllEvents = async done => {
  await EventModal.find({}, (err, res) => {
    if(err) {
      done(err);
      return;
    }
    done(null, res);
  });
};

const getEventsByTourId = async (tourID, done) => {
  await EventModal.find({
    "tournament.tourID": tourID
  }, (err, res) => {
    if(err) {
      done(err);
      return;
    }
    done(null, res);
  });
};

const getEventsByTeamId = async (teamID, done) => {
  await EventModal.find({
    $or: [
      {'teams.team_one': teamID},
      {'teams.team_two': teamID}
    ]
  }, (err, res) => {
    if(err) {
      done(err);
      return;
    }
    done(null, res);
  });
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventsByTourId,
  getEventsByTeamId
}