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

module.exports = {
  addLocation
}