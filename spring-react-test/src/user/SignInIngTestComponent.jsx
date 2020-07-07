import React, {Component} from 'react';

class SignInIngTestComponent extends Component {
    constructor(props){
       super(props);
       
       this.state = {
           user : window.localStorage.getItem("user")
       }
    }

    componentDidMount(){
        console.log(this.state.user);
    }

    LogOut = () => {
        window.localStorage.removeItem("user");
        this.props.history.push('/signin');
    }

    render() {
        return (
        <div>
            {this.state.user ? (
                <div>
                <h2>{this.state.user} 님 환영합니다리~</h2>
                <button onClick={this.LogOut}>Log Out</button>
            </div>
            ) : (
                <h1>{this.props.history.push('/signin')}</h1>
            )}
        </div>
        );
    }
}

export default SignInIngTestComponent;