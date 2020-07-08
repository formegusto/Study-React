import React, { Component } from 'react';
import ApiService from '../ApiService.js'

class ReturnTestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            user : {
                id:'',
                password:'',
                email:''
            },
            test : {
                num:'',
                str:''
            }
        }
    }

    readUser = () => {
        ApiService.returnUser()
        .then(res => {
            console.log(res.data);
            this.setState({
                user : res.data
            });
        })
        .catch(err => {
            console.log("유저 에러다..");
        })
    }

    readTest = () => {
        ApiService.returnTest()
        .then(res => {
            this.setState({
                test : res.data
            });
        })
        .catch(err => {
            console.log("테스트 에러다..");
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.user.id}</h1>
                <h2>{this.state.test.num}</h2>
                <button onClick={this.readUser}>유저 읽기</button>
                <button onClick={this.readTest}>테스트 읽기</button>
            </div>
        )
    }
}

export default ReturnTestComponent;