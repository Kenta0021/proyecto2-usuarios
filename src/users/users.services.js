const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
  userControllers.getAllUsers()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}

const getuserById = (req, res) => {
  const id = Number(req.params.id)

  userControllers.findUserById(id)
    .then(data => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({message: 'Invalid Id'})
      }
    })
    .catch(error => {
      res.status(400).json(error)
    })
}

const postNewUser = (req, res) => {
  const userObj = req.body
  
  userControllers.createUser(userObj)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
}

module.exports = {
  getAllUsers,
  getuserById,
  postNewUser
}