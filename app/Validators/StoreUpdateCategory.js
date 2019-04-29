'use strict'

class StoreUpdateCategory {
  get rules () {
    const categoryId = this.ctx.params.id

    return {
      title: `required|min:3|max:100|unique:categories,title,id,${categoryId}`,
      description: 'required|min:3|max:100',
    }
  }
}

module.exports = StoreUpdateCategory
