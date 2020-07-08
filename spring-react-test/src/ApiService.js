import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080"

class ApiService {
    // userApiService
    signinUser(user){
        return axios.post(USER_API_BASE_URL + '/users/account/signin',user);
    }
    signupUser(user){
        return axios.post(USER_API_BASE_URL + "/users/account/signup", user);
    }
    returnUser(){
        return axios.get(USER_API_BASE_URL + '/users/test/returnUser');
    }
    returnTest(){
        return axios.get(USER_API_BASE_URL + "/users/test/returnTest");
    }
    reqSecret(user){
        return axios.post(USER_API_BASE_URL + "/users/account/signup/reqsecret",user);
    }

    // ideaApiService
    testPostIdea(idea){
        return axios.post(USER_API_BASE_URL + "/idea/posts",idea);
    }
    listIdea(){
        return axios.get(USER_API_BASE_URL + "/idea/list");
    }
    testDetailIdea(idea_seq,id){
        return axios.get(USER_API_BASE_URL + "/idea/details?idea_seq=" + idea_seq + "&id=" + id);
    }
}

export default new ApiService();