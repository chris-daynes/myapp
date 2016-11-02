
exports.up = function (knex, Promise) {
  console.log('creating users')
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('quote')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
