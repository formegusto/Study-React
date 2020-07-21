import axios from 'axios';
import cors from 'cors';

const USER_API_BASE_URL = "http://192.168.1.230:8080"

class ApiService {
    

    // userApiService
    signinUser(user){
        return axios.post(USER_API_BASE_URL + '/users/account/signin',user, { withCredentials: true });
    }
    signupUser(user){
        return axios.post(USER_API_BASE_URL + "/users/account/signup", user , { withCredentials: true });
    }
    reqSecret(user){
        return axios.post(USER_API_BASE_URL + "/users/account/signup/reqsecret",user, { withCredentials: true });
    }
    logoutUser(){
        return axios.post(USER_API_BASE_URL + "/users/account/logout", '',{ withCredentials:true });
    }

    // ideaApiService
    testPostIdea(idea){
        return axios.post(USER_API_BASE_URL + "/idea/post",idea, {  withCredentials: true });
    }
    listIdea(){
        return axios.get(USER_API_BASE_URL + "/idea/list", { withCredentials: true });
    }
    testDetailIdea(idea_seq){
        return axios.get(USER_API_BASE_URL + "/idea/detail?idea_seq=" + idea_seq, { withCredentials: true });
    }
    testDetailUpIdea(idea_seq){
        return axios.get(USER_API_BASE_URL + "/idea/detailUp?idea_seq=" + idea_seq, { withCredentials: true });
    }
    updateIdea(idea){
        return axios.patch(USER_API_BASE_URL + "/idea/update", idea, { withCredentials: true });
    }
    purchaseGoods(goodsSeqList){
        return axios.post(USER_API_BASE_URL + "/idea/purchase", goodsSeqList, { withCredentials: true });
    }
    likey(likey){
        return axios.post(USER_API_BASE_URL + "/idea/likey",likey,{ withCredentials:true });
    }
    unLikey(likey){
        return axios.post(USER_API_BASE_URL + "/idea/unlikey",likey,{ withCredentials:true });
    }
    doYouLike(likey){
        return axios.post(USER_API_BASE_URL + "/idea/doYouLike",likey,{ withCredentials:true });
    }
    getLikeyList(){
        return axios.get(USER_API_BASE_URL + "/idea/list/likey", { withCredentials:true });
    }
    getMyList(){
        return axios.get(USER_API_BASE_URL + "/idea/list/my", { withCredentials: true });
    }
    searchList(search){
        return axios.get(USER_API_BASE_URL + "/idea/list/search?type=" + search.type + "&keyword=" + search.keyword, {withCredentials : true});
    }

    payTest(){
        return axios.post(USER_API_BASE_URL + "/kakaoPay", "",
            {
                withCredentials: true,
            });
    }
    payTest_2(){
        return axios.post("https://kapi.kakao.com/v1/payment/ready",
            {
                cid: "TC0ONETIME",
                partner_order_id: "1001",
                partner_user_id: "gorany",
                item_name: "갤럭시S9",
                quantity: "1",
                total_amount: "2100",
                tax_free_amount: "100",
                approval_url: "http://localhost:3000/kakaoPaySuccess",
                cancel_url: "http://localhost:8080/kakaoPayCancel",
                fail_url: "http://localhost:8080/kakaoPaySuccessFail",
            },
            {
                headers : {
                    'Authorization': "KakaoAK 1a5a5ce44928a8933b2976817b6bf16c",
                    'Accept': "application/json;charset=UTF-8",
                    'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8",
                },
                withCredentials: true,
                credentials: true,
            },
            );
    }
    paySuccess(pg_token){
        return axios.get("http://192.168.1.230:8080/kakaoPaySuccess?pg_token=" + pg_token,{withCredentials:true});
    }
}

export default new ApiService();