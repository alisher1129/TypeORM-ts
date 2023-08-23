import { Profile } from "../entity/Profile";
import { AppDataSource } from "../data-source";


class ProfileService {

    async getProfiles(req, res){
        try {
            const profiles = await AppDataSource.getRepository(Profile).find();
            return profiles;
        } catch (error) {
            console.log(error);
        }
    }

    async addProfile(req, res){
        try {
            const newProfile = await AppDataSource.getRepository(Profile).create(req);
            const result = await AppDataSource.getRepository(Profile).save(newProfile);
            return newProfile;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new ProfileService();