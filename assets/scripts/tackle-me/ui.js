'use strict'

const tackleMeFrontEnd = require('../templates/item-listing.handlebars')
//  HERE IS WHERE I DISPLAY THE MESSAGE TO THE USERS

const getItemsSuccess = (data) => {
  const getItemsHtml = tackleMeFrontEnd({ items: data.items })
  $('.content').html(getItemsHtml)
}

const clearItems = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

const createItemSuccess = (data) => {
  const createItemHtml = tackleMeFrontEnd({item: data.item})
  $('.content').html(createItemHtml)
}

const deleteItemSuccess = () => {
  $('.content').remove()
}

const showItemSuccess = (data) => {
  const showItemHtml = tackleMeFrontEnd({item: data.item})
  $('.content').html(showItemHtml)
}
const updateItemSuccess = (data) => {
  const updateItemHtml = tackleMeFrontEnd({item: data.item})
  $('.content').html(updateItemHtml)
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
  failure,
  createItemSuccess,
  deleteItemSuccess,
  showItemSuccess,
  updateItemSuccess
}
