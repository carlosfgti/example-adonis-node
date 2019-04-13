'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('title', 100).notNullable().unique()
      table.text('description').notNullable()
      table.string('image', 100).nullable()
      table.enu('published', ['0', '1']).defaultTo('1')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
