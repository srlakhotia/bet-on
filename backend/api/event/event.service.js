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

module.exports = {
  createEvent
}