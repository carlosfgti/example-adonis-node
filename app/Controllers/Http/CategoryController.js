'use strict'

const { validate }  = use('Validator')
const Helpers = use('Helpers')

const Category = use('App/Models/Category')
const { createSlug } = use('App/Helpers/helpers')

class CategoryController {

    async index ({ request, view }) {
        const page = request.input('page', 1)
        const totalPage = request.input('totalPage', 10)
        
        const categories = await Category.query()
                                        .orderBy('id', 'DESC')
                                        .paginate(page, totalPage)
                                        
        return view.render('categories.index', {
            data: categories.toJSON()
        })
    }

    async show ({ params, view }) {
        const category = await Category.find(params.id)

        return view.render('categories.show', {
            category: category.toJSON()
        })
    }

    create ({ view }) {
        return view.render('categories.create')
    }

    async store ({ request, response, session }) {
        const data = request.only(['title', 'description'])

        await Category.create(data)

        session.flash({success: 'Category Created Success'})

        response.route('categories.index')
    }

    async edit ({ params, view }) {
        const category = await Category.find(params.id)

        return view.render('categories.edit', {
            category: category.toJSON()
        })
    }

    async update ({ params, request, response, session }) {
        const data = request.only(['title', 'description']);

        const category = await Category.findOrFail(params.id)
        category.merge(data)
        category.save()

        session.flash({success: 'Category Updated Success'})

        response.route('categories.index')
    }

    async destroy ({ params, response, session }) {
        const category = await Category.findOrFail(params.id)

        await category.delete()

        session.flash({success: 'Category Deleted Success'})

        response.route('categories.index')
    }
}

module.exports = CategoryController
