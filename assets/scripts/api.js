'use strict'

const config = require('./config.js')
const store = require('./store.js')

const addLocation = (location, note, contact) => {
  return $.ajax({
    url: config.apiUrl + '/destinations',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'destination': {
        'location': `${location}`,
        'note': `${note}`,
        'contact': `${contact}`
      }
    },
    dataType: 'json'
  })
}

const indexLocations = () => {
  return $.ajax({
    url: config.apiUrl + '/destinations',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBook = (id, location, note, contact) => {
  return $.ajax({
    url: config.apiUrl + '/destinations/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'destination': {
        'location': `${location}`,
        'note': `${note}`,
        'contact': `${contact}`
      }
    }
  })
}

module.exports = {
  addLocation,
  indexLocations,
  updateBook
}
