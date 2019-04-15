'use strict'

const Product = use('App/Models/Product')

class ProductController {
    async index ({ request, response, view }) {
        const products = await Product.all()        

        return view.render('products.index', { products: products.toJSON() })
    }

    create ({ response, view }) {
        return view.render('products.create')
    }

    async store ({ request, response }) {
        const data = request.only(['title', 'description', 'published']);

        data.published = data.published ? '1' : '0'

        Product.create(data)

        response.route('products.index')
    }
}

module.exports = ProductController
