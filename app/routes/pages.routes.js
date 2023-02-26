module.exports = app => {
    const pages = require("../controllers/pages.controller")

    const router = require("express").Router()

    router.post('/', pages.create)
    router.get('/content/:content', pages.getPage)
    router.get('/', pages.getAll)
    router.patch('/:id', pages.update)

    app.use('/api/pages', router)
}