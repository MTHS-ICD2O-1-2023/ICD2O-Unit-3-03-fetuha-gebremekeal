// Created by: Fetuha
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume.
 */
function calculateVolumeOfSphere() {
  // input
  const radius = parseInt(document.getElementById('radius').value)


  // process
  const volumeOfPyramid = 4 / 3 * Math.PI * radius ** 3

  // output
  document.getElementById("volume").innerHTML = 'Volume is: ' + volumeOfPyramid.toFixed(2) + ' mm<sup>3'
}