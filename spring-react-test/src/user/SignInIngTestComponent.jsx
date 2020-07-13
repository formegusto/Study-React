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
        console.log(this.state.user);
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

    goUpdate = (e) => {
        console.log(e.target.value + "번 아이디어 수정창으로 이동합니다.");
        window.localStorage.setItem("update_iseq",e.target.value);
        this.props.history.push('/update');
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
                            <button onClick={this.goDetail} value={idea.idea_seq}>상세 내용 보기</button>
                            {idea.banker_id === this.state.user ? <button onClick={this.goUpdate} value={idea.idea_seq}>수정</button> 
                                                : null}
                            {idea.banker_id === this.state.user ? <button onClick={this.goUpdate} value={idea.idea_seq}>삭제</button> 
                                                : null}
                            <hr/>
                </div>            
                )}
        </div>
        );
    }
}

export default SignInIngTestComponent;