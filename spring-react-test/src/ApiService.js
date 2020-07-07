import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080"

class ApiService {
    signinUser(user){
        return axios.post(USER_API_BASE_URL + '/users/account/signin',user);
    }
    signupUser(user){
        return axios.post(USER_API_BASE_URL + "/users/account/signup", user);
    }
}

export default new ApiService();