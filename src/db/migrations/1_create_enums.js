const tableName = 'enums'

exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable(tableName, t => {
      t.uuid('id').primary()

      t.string('enum_category').notNull()
      t.string('enum_key').notNull()
      t.string('enum_value').notNull()
      t.integer('enum_order').notNull()

      t.unique('enum_key')
      t.timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNull()
      t.timestamp('updated_at').nullable()
    }),
  ])
}

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable(tableName)])
}
