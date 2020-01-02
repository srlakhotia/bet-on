const eventService = require('./event.service');
const moment = require('moment');

const createEvent = (eventData, done) => {
  eventData = {
    ...eventData,
    start: moment.utc(eventData.start),
    end: moment.utc(eventData.end)
  }
  eventService.createEvent(eventData, done);
}

module.exports = {
  createEvent
}