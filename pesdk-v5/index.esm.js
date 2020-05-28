if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/production/index.js')
} else {
  module.exports = require('./esm/development/index.js')
}