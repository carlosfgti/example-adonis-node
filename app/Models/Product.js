'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    static boot () {
        super.boot()

        // this.addHook('beforeCreate', 'ProductHook.publishedFormat')
        // this.addHook('beforeUpdate', 'ProductHook.publishedFormat')
        this.addHook('beforeSave', 'ProductHook.publishedFormat')
    }

    getPublished (published) {
        return  published == '1' ? 'Published' : 'Draft'
    }

}

module.exports = Product
