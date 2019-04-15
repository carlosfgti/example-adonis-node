'use strict'

const Product = use('App/Models/Product')

class ProductController {
    async index ({ request, response, view }) {
        const products = await Product.all()        

        return view.render('products.index', { products: products.toJSON() })
    }

    create ({ view }) {
        return view.render('products.create')
    }
}

module.exports = ProductController
