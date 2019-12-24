const tourService = require('./tournament.service');

const createTour = (tourData, done) => {
  tourService.createTour(tourData, done);
};

const getTour = (tourData, done) => {
  tourService.getTour(tourData, done);
};

module.exports = {
  createTour,
  getTour
};