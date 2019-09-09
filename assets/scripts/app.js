'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/items/events')
// const itemEvents = require('./auth/tackle-me/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
// event listener for sign-up form with JQuery
  // itemEvents.addHandlers()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('.createItem').on('submit', authEvents.onCreate)
  // $('#get-example').on('submit', authEvents.onGet)
  // $('#get-example-id').on('submit',authEvents.onGetId)
  // $('#get-examples-ids').on('submit',authEvents.onGetIds)
  // $('#delete-example').on('submit',authEvents.onDeleteExample)
})
