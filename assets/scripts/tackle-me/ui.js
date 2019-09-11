'use strict'

const tackleMeFrontEnd = require('../templates/item-listing.handlebars')
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
// EXAMPLES
// const signUpSuccess = function (data) {
//   store.user = data.user
//   $('.user-message').text('Signed up successfully!')
//   $('form').trigger('reset')
//   $('#sign-up').hide()
//   $('#sign-in').show()
// }
module.exports = {
  getItemsSuccess,
  clearItems,
  // failure,
  createItemSuccess,
  deleteItemSuccess,
  showItemSuccess,
  updateItemSuccess
}
