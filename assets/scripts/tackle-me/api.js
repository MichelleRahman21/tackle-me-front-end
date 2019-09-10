const config = require('../config')
const store = require('../store.js')

const createItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteItem = function (id) {
  return $.ajax({
    url: config.apiUrl + `/items/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getItems = function (data) {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateItem = function (data) {
  return $.ajax({
    url: config.apiUrl + `/items/${data.item.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const showItem = function (id) {
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
  getItems,
  updateItem,
  showItem
}
