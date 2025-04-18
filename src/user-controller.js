const User = require('./user-model')
const getUsers = async (req, res) => {
    let users;

    if (req.params.id) {
        users = User.findById(req.params.id);
    } else {
         users = await User.find();
    }
    res.send(JSON.stringify(users));

}

const createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.send(user);
}

module.exports = {
    getUsers, createUser,
}