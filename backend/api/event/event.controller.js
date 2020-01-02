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

const getEventsByTourId = (tourData, done) => {
  const tourID = mongoose.Types.ObjectId(tourData.tourID);
  eventService.getEventsByTourId(tourID, done);
};

const getEventsByTeamId = (teamData, done) => {
  const teamID = mongoose.Types.ObjectId(teamData.teamID);
  eventService.getEventsByTeamId(teamID, done);
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventsByTourId,
  getEventsByTeamId
}