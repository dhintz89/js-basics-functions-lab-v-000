// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(42 - location);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  switch (distance) {
    case <= 400: 
      return 0;
    case > 400 && <= 2000: return distance * .02;
    case > 2000 && <= 2500: return 25;
    default: return "Cannot travel that far";
  }
}