'use strict'

const tackleMeFrontEnd = require('../templates/item-listing.handlebars')
const tackleMeFrontEndCategory = require('../templates/category-listing.handlebars')
//  HERE IS WHERE I DISPLAY THE MESSAGE TO THE USERS

const getItemsSuccess = (data) => {
  const getItemsHtml = tackleMeFrontEnd({ items: data.items })
  $('.content').html(getItemsHtml)
  $('.user-message').text('This is your closet!')
}

const clearItems = () => {
  $('.content').empty()
}

// const failure = (error) => {
//   // console.error(error)
// }

const createItemSuccess = (data) => {
  const createItemHtml = tackleMeFrontEnd({item: data.item})
  $('.content').html(createItemHtml)
  $('form').trigger('reset')
  $('.user-message').text('You added something cool to the closet!')
}

const deleteItemSuccess = () => {
  // $('.content').remove()
  $('form').trigger('reset')
  $('.user-message').text('You deleted an item!')
}

const showItemSuccess = (data) => {
  const showItemHtml = tackleMeFrontEnd({item: data.item})
  $('.content').html(showItemHtml)
  $('form').trigger('reset')
// I should display the item with it's attributes
}
const updateItemSuccess = (data) => {
  const updateItemHtml = tackleMeFrontEnd({item: data.item})
  $('.content').html(updateItemHtml)
  $('form').trigger('reset')
  $('.user-message').text('Go check the closet to see your changes!')
}

// THIS IS THE SECTION FOR MY CATEGORIES
const getCategoriesSuccess = (data) => {
  const getCategoriesHtml = tackleMeFrontEndCategory({ categories: data.categories })
  $('.contentCategory').html(getCategoriesHtml)
  $('.user-message').text('This is your category!')
}

const clearCategories = () => {
  $('.contentCategory').empty()
}

const createCategorySuccess = (data) => {
  const createItemHtml = tackleMeFrontEndCategory({item: data.item})
  $('.contentCategory').html(createItemHtml)
  $('form').trigger('reset')
  $('.user-message').text('You added a category!')
}

const deleteCategorySuccess = () => {
  // $('.content').remove()
  $('form').trigger('reset')
  $('.user-message').text('You deleted a category!')
}

const showCategorySuccess = (data) => {
  const showCategoryHtml = tackleMeFrontEndCategory({category: data.category})
  $('.contentCategory').html(showCategoryHtml)
  $('form').trigger('reset')
}
const updateCategorySuccess = (data) => {
  const updateCategoryHtml = tackleMeFrontEndCategory({category: data.category})
  $('.contentCategory').html(updateCategoryHtml)
  $('form').trigger('reset')
  $('.user-message').text('Go check the closet to see your categories!')
}
module.exports = {
  getItemsSuccess,
  clearItems,
  createItemSuccess,
  deleteItemSuccess,
  showItemSuccess,
  updateItemSuccess,
  // SECTION FOR CATEGORIES
  getCategoriesSuccess,
  clearCategories,
  createCategorySuccess,
  deleteCategorySuccess,
  showCategorySuccess,
  updateCategorySuccess
}
