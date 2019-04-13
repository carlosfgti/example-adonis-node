'use strict'

class ProductController {
    index ({ request, response, view }) {
        return view.render('products.index')
    }
}

module.exports = ProductController
