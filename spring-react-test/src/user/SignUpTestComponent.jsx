import React, {Component} from 'react';
import ApiService from '../ApiService';

class SignUpTestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            id:'',
            password:'',
            email:'',
            message:'',
            secretCode: '',
            codeForm: '',
            code: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onChage_2 = (e) => {
        [e.target.name] = e.target.value
        this.setState({
            code : e.target.value
        })
    }

    onCheck = (e) => {
        e.preventDefault();

        let code = this.state.code;
        let secCode = this.state.secretCode;
        if(code === secCode){
            alert("아 같네요.");
        } else {
            alert("메일 좀 확인해주시죠? 땡임");
        }
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
            this.props.history.push('/signin');
        })
        .catch(err => {
            console.log('saveUser() Error', err);
        });
    }

    signinUser = () => {
        this.props.history.push('/signin')
    }

    reqSecret = (e) => {
        e.preventDefault();

        let user = {
            id:this.state.id,
            password:this.state.password,
            email:this.state.email
        }
        ApiService.reqSecret(user)
        .then(res => {
            console.log("메일 테스트 완료");
            this.setState({
                secretCode : res.data + "",
                codeForm : <div><input name="code" placeholder="발급받은 코드를 입력해주라" onChange={this.onChage_2}/><button onClick={this.onCheck}>확인하기</button></div>
            })
        })
        .catch(err => {
            console.log("메일 테스트 실패");
        })
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
                        <button onClick={this.reqSecret}>인증번호 요청</button><br/>
                        {this.state.codeForm}
                    </div>
                    <button onClick={this.signinUser}>Cancle</button>
                    <button onClick={this.signupUser}>SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignUpTestComponent;