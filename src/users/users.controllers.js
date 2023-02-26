const usersDB = []
baseId = 1

const getAllUsers = async () => {
  return await usersDB
}

const findUserById = async (id) => {
  const filterdUser = await usersDB.find(user => user.id === id)
  return filterdUser
}

const createUser = async (userObj) => {
  const newUser = {
    id: baseId++,
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: userObj.password,
    age: userObj.age
  }

  await usersDB.push(newUser)

  return newUser
}

module.exports = {
  getAllUsers,
  findUserById,
  createUser
}