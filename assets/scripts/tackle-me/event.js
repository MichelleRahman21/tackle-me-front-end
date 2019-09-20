'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

// ACTIONS FOR ITEMS
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

// ACTIONS FOR CATEGORIES
const onCreateCategory = (event) => {
  event.preventDefault()
  // console.log(event)
  const data = getFormFields(event.target)
  api.createCategory(data)
    .then(ui.createCategorySuccess)
    .catch(ui.failure)
}
const onDeleteCategory = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.deleteCategory(data.category.id)
    .then(() => onGetItems(event))
    .then(ui.deleteCategorySuccess)
    .catch(ui.failure)
}
const onGetCategories = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const data = getFormFields(event.target)
  api.getCategories(data)
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}
const onShowCategory = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showCategory(data.category.id)
    .then(ui.showCategorySuccess)
    .catch(ui.failure)
}
const onUpdateCategory = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createCategory(data)
    .then(ui.updateCategorySuccess)
    .catch(ui.failure)
}
const addHandlers = () => {
  $('#create-item').on('submit', onCreateItem)
  $('#delete-item').on('submit', onDeleteItem)
  $('#getitems').on('click', onGetItems)
  $('#show-item').on('submit', onShowItem)
  $('#update-item').on('submit', onUpdateItem)
  $('.content').on('click', onGetItems)
  // HANDLERS FOR CATEGORIES
  $('#create-category').on('submit', onCreateCategory)
  $('#delete-category').on('submit', onDeleteCategory)
  $('#getcategories').on('click', onGetCategories)
  $('#show-category').on('submit', onShowCategory)
  $('#update-category').on('submit', onUpdateCategory)
  $('.contentCategory').on('click', onGetCategories)
}

module.exports = {
  addHandlers,
  onCreateItem,
  onDeleteItem,
  onGetItems,
  onShowItem,
  onUpdateItem,
  onCreateCategory,
  onDeleteCategory,
  onGetCategories,
  onShowCategory,
  onUpdateCategory
}
