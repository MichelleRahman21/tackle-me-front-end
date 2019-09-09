const config = require('../config')
const store = require('../store.js')

const getItem = function() {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createItem = function(data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'item': {
        'name': data.name,
        'description': data.description,
        'color': data.color,
        'season': data.season,
        'status': data.status
      }
    }
  })
}

const deleteItem = function(id) {
  return $.ajax({
    url: config.apiUrl + `/items/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getItems = function(data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateEvent = function(data, id) {
    return $.ajax({
        url: config.apiUrl + `/items/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + store.user.token
        },
        data: {
          'item': {
            'name': data.name,
            'description': data.description,
            'color': data.color,
            'season': data.season,
            'status': data.status
          }
        })
    }
    const showItem = function(id) {
      return $.ajax({
        url: config.apiUrl + `/items/${id}`,
        method: 'GET',
        headers: {
          Authorization: 'Token token=' + store.user.token
        }
      })
    }
    //  how do I do it when clearing the closet for the user

    module.exports = {
      createItem,
      deleteItem,
      getItem,
      updateItem,
      showItem
    }
