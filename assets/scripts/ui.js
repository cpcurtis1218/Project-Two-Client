'use strict'

// const store = require('./store')
const showDestinationsTemplate = require('./templates/destinations-listing.handlebars')

const resetMessage = function () {
  setTimeout(() => {
    $('#resource-message').text('Click Something Else!')
  }, 5000)
}

const addLocationSuccess = () => {
  $('#resource-message').text('Location Added!')
  resetMessage()
}

const addLocationFailure = () => {
  $('#resource-message').text('Something went wrong.')
  resetMessage()
}

const indexLocationsSuccess = (responseData) => {
  $('#resource-message').text('Showing Index')
  const showDestinationsHtml = showDestinationsTemplate({ destinations: responseData.destinations })
  $('.content').html('').html(showDestinationsHtml)
  resetMessage()
}

const indexLocationsFailure = (responseData) => {
  $('#resource-message').text('Something Went Wrong!')
  console.log('error response data is ' + responseData)
  resetMessage()
}

const updateDestinationSuccess = () => {
  $('#resource-message').text('Update Successful!')
  resetMessage()
}

const updateDestinationFailure = (responseData) => {
  $('#resource-message').text('Something Went Wrong!')
  console.log('error response data is ' + responseData)
  resetMessage()
}

module.exports = {
  addLocationSuccess,
  addLocationFailure,
  indexLocationsSuccess,
  indexLocationsFailure,
  updateDestinationSuccess,
  updateDestinationFailure
}
