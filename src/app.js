const express = require('express')

const app = express()

const userRouter = require('./users/users.router')

app.use(express.json)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server ok!'})
})

app.use('/', userRouter)

app.listen(11000, () => {
    console.log('Server stated at port 11000')
})