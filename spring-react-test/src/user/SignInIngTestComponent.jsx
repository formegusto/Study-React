import React, {Component} from 'react';
import ApiService from '../ApiService';

class SignInIngTestComponent extends Component {
    constructor(props){
       super(props);
       
       this.state = {
           user : 'anonymous',
           idealist : []
       }
    }

    componentDidMount(){
        console.log(this.state.user);
        ApiService.listIdea()
        .then(res => {
            this.setState({
                idealist : res.data
            })
            console.log("list 로드 완료");
            console.log(this.state.idealist);
        })
        .catch(err => {
            console.log("아이디어 로드 중 에러 발생");
        })
        if( window.localStorage.getItem("user") != null ){
            this.setState({
                user:window.localStorage.getItem("user")
            });
        };
    }

    LogOut = () => {
        window.localStorage.removeItem("user");
        this.props.history.push('/signin');
    }

    goPost = () => {
        this.props.history.push('/postTest')
    }

    goDetail = (e) => {
        console.log(e.target.value);
        window.localStorage.setItem("iseq",e.target.value);
        this.props.history.push('/detailTest')
    }

    render() {
        return (
        <div>
                <h2>{this.state.user} 님 환영합니다리~</h2>
                <button onClick={this.goPost}>등록하기</button>
                {this.state.user === 'anonymous' ? <button >너한테 줄 로그아웃은 없음</button> : <button onClick={this.LogOut}>로그아웃</button> }
                {this.state.idealist.map( idea =>
                <div key={idea.idea_seq}>
                            <h2>seq : {idea.idea_seq}</h2>
                            <h2>name : {idea.project_name}</h2>
                            <h2>banker_id : {idea.banker_id}</h2>
                            <h2>short : {idea.short_description}</h2>
                            <h2>category : {idea.category} </h2>
                            <h2>read_count : {idea.read_count} </h2>
                            <h2>Likey : {idea.likey_count} </h2>
                            <button onClick={this.goDetail} value={idea.idea_seq}>이거는 나오냐?</button>
                            <hr/>
                </div>            
                )}
        </div>
        );
    }
}

export default SignInIngTestComponent;