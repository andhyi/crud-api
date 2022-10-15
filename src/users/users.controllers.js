const uuid = require('uuid')

const userDB = [{
    id: 'ffab9807-66d4-4631-8364-6c8f3dcb7ffc',
	first_name: 'Willy',
	last_name: 'Villaorduña',
	email: 'andhyi@hotmail.com',
	password: 'sabcdefg',
	birthday: '1990/11/20'
},
{
    id: 'ffab9807-66d4-4631-8364-6c8f3dcb7ff9',
	first_name: 'Marco',
	last_name: 'Genio',
	email: 'anroswe@hotmail.com',
	password: 'gfdgfghghvb',
	birthday: '1980/11/20'
}]

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const data = userDB.find(top => top.id === id)
    return data
}

const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }

    userDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}