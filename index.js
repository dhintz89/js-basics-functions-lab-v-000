// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(42 - location);
}

function distanceFromHqInFeet(location) {
  distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(beginning, destination) {
  return Math.abs(destination - beginning) * 264;
}