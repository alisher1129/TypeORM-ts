const { getUsers, addUser } = require('../service/userService');

class UserController{

    async getUsers(req, res){
        try {
            const result = await getUsers();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async addUser(req, res){
        try {
            const result = await addUser(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserController();