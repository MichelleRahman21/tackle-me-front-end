'use strict'
const store = require('../store')
const itemHandlebars = require('../templates/item-listing.handlebars')
const categoryHandlebars = require('../templates/category-listing.handlebars')

// USER SIGN-UP SUCCESS AND FAILURE

const signUpSuccess = function (data) {
  store.user = data.user
  $('.user-message').text('Signed up successfully!')
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').show()
}

const signUpFailure = function (data) {
  $('.user-message').text('Error on signing up')
  $('form').trigger('reset')
}
// SING IN SUCCESS AND FAILURE
const signInSuccess = function (data) {
  store.user = data.user
  $('.user-message').text('Sign in success!')
  $('form').trigger('reset')
  $('#change-your-password').show()
  $('.forms-to-hide').show()
  $('.change-password-hide').show()
  $('.hide-sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#getitems').show()
  const getItemsHtml = itemHandlebars({ items: data.items })
  $('.content').html(getItemsHtml)
  // SHOW THE CONTENT FOR CATEGORIES
  $('#getcategories').show()
  const getCategoriesHtml = categoryHandlebars({ categories: data.categories })
  $('.contentCategory').html(getCategoriesHtml)
}

const signInFailure = function (data) {
  $('.user-message').text('Sorry! sign in failed')
  $('form').trigger('reset')
}
// CHANGE PW SUCCESS AND FAILURE
const changePasswordSuccess = function (data) {
  // store.user = data.use
  $('.change-password-message').text('successfully changed password!')
  $('form').trigger('reset')
}
const changePasswordFailure = function (data) {
  $('.change-your-password').text('Error on changing password!')
  $('form').trigger('reset')
}
// SIGN OUT SUCCES AND FAILURE
const signOutSuccess = function () {
  store.user = null

  $('.user-message').text('successfully signed out!')
  $('form').trigger('reset')
  $('#sign-out').hide()
  $('#sign-in').show()
  // get the sign-up out when signing-out
  $('#sign-up').show()
  $('.content').hide()
  $('.contentCategory').hide()
  $('#change-your-password').hide()
  $('.ui').hide()
  $('.content').empty()
  $('.contentCategory').empty()

  // SEE WHAT UI WAS IN THE LAST PROJECT
  // DELETE GAME STUFF
}
const signOutFailure = function () {
  $('.user-message').text('Sign out failed my dear, try again!')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
