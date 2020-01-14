const tourService = require('./tournament.service');

const createTour = (tourData, done) => tourService.createTour(tourData, done);

const getTour = (tourData, done) => tourService.getTour(tourData, done);

const searchTournament = (tourSearchTerm, done) => tourService.searchTournament(tourSearchTerm, done);

module.exports = {
  createTour,
  getTour,
  searchTournament
};