// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const limit = (str, length) => {
  if (str.length <= length) {
    return str
  } else {
    return str.substring(0, length) + '...'
  }
}
const displayItem = {
  name: 'name',
  description: 'description',
  color: 'color',
  season: 'season',
  status: 'status'
}
const showItem = {
  id: 'id',
  name: 'name',
  description: 'description',
  color: 'color',
  season: 'season',
  status: 'status'
}
const displayCategory = {
  name: 'name',
  description: 'description'
}
module.exports = {
  limit,
  displayItem,
  showItem,
  displayCategory
}
