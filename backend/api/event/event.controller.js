const moment = require('moment');
const mongoose = require('mongoose');
const eventService = require('./event.service');

const createEvent = (eventData, done) => {
  eventData = {
    ...eventData,
    start: moment.utc(eventData.start),
    end: moment.utc(eventData.end)
  }
  eventService.createEvent(eventData, done);
};

const getAllEvents = done => {
  eventService.getAllEvents(done);
};

const getEventsByTourId = (tourID, done) => {
  tourID = mongoose.Types.ObjectId(tourID);
  eventService.getEventsByTourId(tourID, done);
};

const getEventsByTeamId = (teamID, done) => {
  teamID = mongoose.Types.ObjectId(teamID);
  eventService.getEventsByTeamId(teamID, done);
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventsByTourId,
  getEventsByTeamId
}