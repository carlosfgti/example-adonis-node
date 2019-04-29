'use strict'

class UpdateProduct {
  get rules () {
    const product = this.ctx.request.post()    

    return {
      title: `required|min:3|max:100|unique:products,title,title,${product.title}`,
      description: 'required|min:3|max:100',
    }
  }

  get messages () {
    return {
      'title.required': 'Precisa informar o título',
      'title.min': 'Quantidade mínima de 3 caracteres',
      'title.max': 'Quantidade mínima de 100 caracteres',
      'title.unique': 'O título deve ser único',

      'description.required': 'A descrição deve ser informado',
      'description.min': 'Quantidade mínima de 3 caracteres',
      'description.max': 'Quantidade mínima de 100 caracteres',
    }
  }
}

module.exports = UpdateProduct
