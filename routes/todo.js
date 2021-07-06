const { Router } = require('express')
const Todo = require('../models/todo')

const router = Router()

//method get
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll()
        res.status(200).json(todos)
    } catch (e) {
        res.status(500).json({
            message: e
        })
    }
})

//method post
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        })
        res.status(201).json({todo})
    } catch (e) {
        res.status(500).json({
            message: e
        })
    }
})

//method put
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByPk(+req.params.id)
        todo.done = req.body.done
        await todo.save()
        res.status(200).json({todo})
    } catch (e) {
        res.status(500).json({
            message: e
        })
    }
})

//method delete
router.delete('/:id', async (req, res) => {
    try {
        const todos = await Todo.findAll({
            where: {
                id: +req.params.id
        }
    })
    const todo = todos[0]
    await todo.destroy()
    res.status(204).json({})
    } catch (e) {
        res.status(500).json({
            message: e
        })
    }
})

module.exports = router