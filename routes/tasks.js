const express = require('express')
const Task = require('../models/Task')
const router = express.Router()

// @desc Auth with Google
// @route GET /auth/google
router.get('/allTasks/', async (req, res) => {
    const tasks = await Task.find()
    .exec()
    .then(tasks => {
        if (tasks) {
            console.log(tasks)
            res.status(200).json(tasks)
        } else {
            res.send("Not Tasks Found");
        }
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/', async (req, res) => {
    console.log(req.body);
    await Task.create(req.body)
    .then(task => {    
        res.status(201).json(task);
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

module.exports = router