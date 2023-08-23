const { getProfiles, addProfile } = require('../service/profileService');

class ProfileController{

    async getProfile(req, res){
        try {
            const result = await getProfiles();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }

    async addProfile(req, res){
        try {
            const result = await addProfile(req.body,req.params.userId);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ProfileController();