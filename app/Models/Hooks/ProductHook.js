'use strict'

const ProductHook = exports = module.exports = {}

ProductHook.publishedFormat = async (product) => {
    product.published = product.published ? '1' : '0'
}
