'use strict'

const { validate }  = use('Validator')
const Helpers = use('Helpers')

const Product = use('App/Models/Product')

class ProductController {
    async index ({ request, view }) {
        const page = request.input('page', 1)
        const totalPage = request.input('totalPage', 10)
        
        const products = await Product.query()
                                        .paginate(page, totalPage)
                                        
        return view.render('products.index', {
            data: products.toJSON()
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

    async store ({ request, response, session }) {
        const data = request.only(['title', 'description', 'published']);
        
        const rules = {
            title: 'required|unique:products|min:3|max:100',
            description: 'required|min:3|max:100',
        }

        const validation = await validate(data, rules)

        if (validation.fails()) {
            session
                .withErrors(validation.messages())
                .flashAll()

            return response.redirect('back')
        }

        const productImage = request.file('image', {
            types: ['image'],
            size: '1mb'
        })
        
        if (productImage) {
            await productImage.move('public/uploads/products')

            if (!productImage.moved()) {
                session
                    .withErrors({
                        image: productImage.error().message
                    })
                    .flashAll()

                return response.redirect('back')
            }

            data.image = productImage.clientName
        }

        await Product.create(data)

        session.flash({success: 'Product Created Success'})

        response.route('products.index')
    }

    async edit ({ params, view }) {
        const product = await Product.find(params.id)

        return view.render('products.edit', {
            product: product.toJSON()
        })
    }

    async update ({ params, request, response, session }) {
        const data = request.only(['title', 'description', 'published']);

        // Host bug update (bug with method save too):
        data.published = data.published ? '1' : '0'

        await Product.query()
                        .where('id', params.id)
                        .update(data)       

        session.flash({success: 'Product Updated Success'})

        response.route('products.index')
    }

    async destroy ({ params, response, session }) {
        await Product.query()
                        .where('id', params.id)
                        .delete()

        session.flash({success: 'Product Deleted Success'})

        response.route('products.index')
    }
}

module.exports = ProductController
