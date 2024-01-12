'use strict';

const adressLat = 1;
const adressLong = 4;
const positionLat = 5;
const positionLong = 1;

console.log(Math.sqrt(Math.pow((adressLong - positionLong), 2) + Math.pow(adressLat - positionLat, 2)));