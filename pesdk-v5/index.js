if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/production/index.js')
} else {
  module.exports = require('./cjs/development/index.js')
}