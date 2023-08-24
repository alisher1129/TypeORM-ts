import { Profile } from "../entity/Profile";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";


class ProfileService {

    async getProfiles(req, res){
        try {
            const profiles = await AppDataSource.getRepository(Profile).find();
            return profiles;
        } catch (error) {
            console.log(error);
        }
    }


    async addProfile(req, userId){
        try {
            const profileRepository = AppDataSource.getRepository(Profile);
            const userRepository = AppDataSource.getRepository(User);


 
            const user = await userRepository.findOne({
                where:{
                    id:userId,
                }
            })
            const {Marks, Department} = req;
            const newProfile = profileRepository.create({
                Marks,
                Department,
                user,
            })
            await profileRepository.save(newProfile);
            return newProfile;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = new ProfileService();