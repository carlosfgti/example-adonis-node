'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    static boot () {
        super.boot()

        this.addHook('beforeCreate', async (productInstance) => {
            productInstance.published = productInstance.published ? '1' : '0'
        })
    }

    getPublished (published) {
        return  published == '1' ? 'Published' : 'Draft'
    }

}

module.exports = Product
