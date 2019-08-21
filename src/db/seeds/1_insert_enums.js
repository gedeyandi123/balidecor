const { upsert } = require('../utils')
const data = require('./dumb/1_enums')
const uniqueKey = 'enum_key'
const tableName = 'enums'

exports.seed = async function(knex) {
  await upsert(knex, tableName, uniqueKey, data)
}
