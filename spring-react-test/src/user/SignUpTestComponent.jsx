import React, {Component} from 'react';
import ApiService from '../ApiService';

class SignUpTestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id:'',
            password:'',
            email:'',
            message:''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signupUser = (e) => {
        e.preventDefault();
        
        let user = {
            id:this.state.id,
            password:this.state.password,
            email:this.state.email
        }
        ApiService.signupUser(user)
        .then( res => {
            this.setState({
                message: user.id + "회원정보가 등록되었습니다."
            })
            console.log(this.state.message);
            this.props.history.push('/');
        })
        .catch(err => {
            console.log('saveUser() Error', err);
        });
    }

    signinUser = () => {
        this.props.history.push('/signin')
    }

    render(){
        return(
            <div>
                <h2>SignUp Page</h2>
                <form>
                    <div>
                        <label>ID:</label>
                        <input type="text" name="id" value={this.state.id} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>PASSWORD:</label>
                        <input type="text" name="password" value={this.state.password} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>EMAIL:</label>
                        <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <button onClick={this.signinUser}>Cancle</button>
                    <button onClick={this.signupUser}>SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignUpTestComponent;