const express = require('express')
const userRouter = require('./users/users.router')

const app = express()

app.use(express.json())

app.get ('/', (req, res) => {
  res.status(200).json({
    message: 'Server Ok!'
  })
})

app.use('/api/v1', userRouter)

app.listen (9000, () => {
  console.log('Server started at: http://localhost:9000')
})


module.exports = app
