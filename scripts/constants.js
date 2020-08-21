const path = require('path')

const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 9000
const isDev = process.env.NODE_ENV !== 'production'

const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.resolve(PROJECT_PATH).name

module.exports = {
  isDev,
  PROJECT_PATH,
  PROJECT_NAME,
  SERVER_HOST,
  SERVER_PORT,
}
