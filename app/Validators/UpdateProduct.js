'use strict'

class UpdateProduct {
  get rules () {
    const product = this.ctx.request.post()    

    return {
      title: `required|min:3|max:100|unique:products,title,title,${product.title}`,
      description: 'required|min:3|max:100',
    }
  }
}

module.exports = UpdateProduct
