'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    getPublished (published) {
        return  published == '1' ? 'Published' : 'Draft'
    }

}

module.exports = Product
