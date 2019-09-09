'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.failure)
}
const onDeleteItem = (event) => {
  event.preventDefault()
  const itemId = $(event.target).closest('section').data('id')
  api.deleteItem(itemId)
    .then(() => onGetItems(event))
    .catch(ui.failure)
}
const onGetItems = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getItems(data)
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}
const onShowItem = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showItem(data)
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
const onClearCloset = (event) => {
  event.preventDefault()
  ui.clearItems()
}
const addHandlers = () => {
  $('#create-item').on('submit', onCreateItem)
  $('#delete-item').on('submit', 'delete-item', onDeleteItem)
  $('#get-item').on('submit', onGetItems)
  $('#show-item').on('submit', onShowItem)
  $('#update-item').on('submit', onUpdateItem)
  $('#delete-item').on('submit', '#deleteItem', onDeleteItem)
  $('#clear-closet').on('click', '#clearCloset', onClearCloset)
}

module.exports = {
  addHandlers,
  onCreateItem,
  onDeleteItem,
  onGetItems,
  onShowItem,
  onUpdateItem,
  onClearCloset
}
