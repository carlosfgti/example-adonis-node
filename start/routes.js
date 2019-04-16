'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('products', 'ProductController.index').as('products.index')
Route.post('products', 'ProductController.store').as('products.store')
Route.get('products/create', 'ProductController.create').as('products.create')
Route.get('products/:id/edit', 'ProductController.edit').as('products.edit')
Route.put('products/:id', 'ProductController.update').as('products.update')