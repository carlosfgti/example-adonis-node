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

        await Product.create(data)

        response.route('products.index')
    }

    async edit ({ params, view }) {
        const product = await Product.find(params.id)

        return view.render('products.edit', {
            product: product.toJSON()
        })
    }

    async update ({ params, request, response }) {
        const data = request.only(['title', 'description', 'published']);
        data.published = data.published ? '1' : '0'

        await Product.query()
                        .where('id', params.id)
                        .update(data)

        response.route('products.index')
    }
}

module.exports = ProductController
