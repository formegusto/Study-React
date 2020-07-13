import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080"

class ApiService {
    // userApiService
    shootToken(user){
        return axios.get(USER_API_BASE_URL + '/users/account/token?id=' + user.id + '&password=' + user.password,{ withCredentials: true });
    }
    signinUser(user){
        return axios.post(USER_API_BASE_URL + '/users/account/signin',user, { withCredentials: true });
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
        return axios.post(USER_API_BASE_URL + "/idea/post",idea, {  withCredentials: true });
    }
    listIdea(){
        return axios.get(USER_API_BASE_URL + "/idea/list", { withCredentials: true });
    }
    testDetailIdea(idea_seq,id){
        return axios.get(USER_API_BASE_URL + "/idea/detail?idea_seq=" + idea_seq + "&id=" + id, { withCredentials: true });
    }
    updateIdea(idea){
        return axios.patch(USER_API_BASE_URL + "/idea/update", idea, { withCredentials: true });
    }
}

export default new ApiService();