'use strict'

class StoreUpdateCategory {
  get rules () {
    const category = this.ctx.request.post()    

    return {
      title: `required|min:3|max:100|unique:categories,title,title,${category.title}`,
      description: 'required|min:3|max:100',
    }
  }
}

module.exports = StoreUpdateCategory
