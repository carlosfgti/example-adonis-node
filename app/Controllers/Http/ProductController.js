'use strict'

const Product = use('App/Models/Product')

class ProductController {
    async index ({ request, view }) {
        const page = request.input('page', 1)
        const totalPage = request.input('totalPage', 10)
        
        const products = await Product.query()
                                        .paginate(page, totalPage)

        return view.render('products.index', {
            products: products
        })
    }

    async show ({ params, view }) {
        const product = await Product.find(params.id)

        return view.render('products.show', {
            product: product.toJSON()
        })
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

    async destroy ({ params, response }) {
        await Product.query()
                        .where('id', params.id)
                        .delete()

        response.route('products.index')
    }
}

module.exports = ProductController
