import React, {Component} from 'react';
import ApiService from '../ApiService';

class SignInTestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id:'',
            password:'',
            message:''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signinUser = (e) => {
        e.preventDefault();
        
        let user = {
            id:this.state.id,
            password:this.state.password,
        }
        ApiService.signinUser(user)
        .then( res => {
            this.setState({
                message: res.data.id + "님 로그인 성공 시그널을 받았습니다."
            })
            window.localStorage.setItem("user", this.state.id);
            console.log(this.state.message);
            this.props.history.push('/');
        })
        .catch(err => {
            console.log('saveUser() Error', err);
        });
    }

    signupUser = () => {
        this.props.history.push('/signup')
    }

    returnTest = () => {
        this.props.history.push('/returnTest');
    }

    render(){
        return(
            <div>
                <h2>SignIn Page</h2>
                <form>
                    <div>
                        <label>ID:</label>
                        <input type="text" name="id" value={this.state.id} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>PASSWORD:</label>
                        <input type="text" name="password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <button onClick={this.signinUser}>SignIn</button>
                    <button onClick={this.signupUser}>SignUp</button>
                    <button onClick={this.returnTest}>returnTest</button>
                </form>
            </div>
        )
    }
}

export default SignInTestComponent;