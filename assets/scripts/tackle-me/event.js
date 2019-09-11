'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateItem = (event) => {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.failure)
}
const onDeleteItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.deleteItem(data.item.id)
    .then(() => onGetItems(event))
    .then(ui.deleteItemSuccess)
    .catch(ui.failure)
}
const onGetItems = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const data = getFormFields(event.target)
  api.getItems(data)
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}
const onShowItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showItem(data.item.id)
    .then(ui.showItemSuccess)
    .catch(ui.failure)
}
const onUpdateItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.updateItemSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#create-item').on('submit', onCreateItem)
  $('#delete-item').on('submit', onDeleteItem)
  $('#getitems').on('click', onGetItems)
  $('#show-item').on('submit', onShowItem)
  $('#update-item').on('submit', onUpdateItem)
  $('.content').on('click', onGetItems)
}

module.exports = {
  addHandlers,
  onCreateItem,
  onDeleteItem,
  onGetItems,
  onShowItem,
  onUpdateItem
}
