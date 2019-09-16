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
// SECTION FOR CATEGORIES

const createCategory = function (data) {
  return $.ajax({
    url: config.apiUrl + '/categories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteCategory = function (id) {
  return $.ajax({
    url: config.apiUrl + `/categories/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCategories = function (data) {
  return $.ajax({
    url: config.apiUrl + '/categories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateCategory = function (data) {
  return $.ajax({
    url: config.apiUrl + `/categories/${data.category.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const showCategory = function (id) {
  return $.ajax({
    url: config.apiUrl + `/categories/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createItem,
  deleteItem,
  getItems,
  updateItem,
  showItem,
  // SECTION FOR CATEGORIES
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
  showCategory
}
