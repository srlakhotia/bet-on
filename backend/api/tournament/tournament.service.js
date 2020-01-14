const TourModal = require('./tournament.entity');

const createTour = async (tourData, done) => {
  const tour = new TourModal({
    ...tourData
  });
  await tour.save((err) => {
    if(err) {
      done(err);
      return;
    }
  });
  done(null, tour);
}

const getTour = async (tourId, done) => {
  let tourData = await TourModal.findById(tourId);
  
  if(!tourData) {
    done("Tournament not found");
  } else {
    done(null, tourData);
  }
}

module.exports = {
  createTour,
  getTour
}