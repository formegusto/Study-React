import React, { Component } from 'react';
import ApiService from '../ApiService.js'

class PostTestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            project_name : '',
            banker_id : window.localStorage.getItem("user"),
            short_description : '',
            category : '',
            goodsList : [
                {
                    goods_type : 'motivation',
                    open_status : 0,
                    content : '저의 모티베이션 입니다.',
                    price : 0
                },
                {
                    goods_type : 'need',
                    open_status : 0,
                    content : '저의 필요성 입니다.',
                    price : 20000
                },
                {
                    goods_type : 'strategy',
                    open_status : 0,
                    content : '저의 전략 입니다.',
                    price : 20000
                },
                {
                    goods_type : 'markey_analysis',
                    open_status : 0,
                    content : '저의 시장분석 입니다.',
                    price : 20000
                },
                {
                    goods_type : 'competitiveness',
                    open_status : 0,
                    content : '저의 경쟁력 입니다.',
                    price : 20000
                }
            ]
            /*
            motivation : {
                goods_type : 'motivation',
                open_status : true,
                content : '저의 모티베이션 입니다.',
                price : 0
            },
            need : {
                goods_type : 'need',
                open_status : false,
                content : '저의 필요성 입니다.',
                price : 20000
            },
            strategy : {
                goods_type : 'strategy',
                open_status : false,
                content : '저의 전략 입니다.',
                price : 20000
            },
            market_analysis : {
                goods_type : 'markey_analysis',
                open_status : false,
                content : '저의 시장분석 입니다.',
                price : 20000
            },
            competitiveness : {
                goods_type : 'competitiveness',
                open_status : false,
                content : '저의 경쟁력 입니다.',
                price : 20000
            }*/
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(e.target.name);
    }

    onTypeChange = (e) => {
        let targetName = [e.target.name];
        targetName *= 1;
        let goodsList_ = this.state.goodsList;
        goodsList_[targetName].content = e.target.value;
        this.setState({
            goodsList : goodsList_
        });
    }

    onPriceChange = (e) => {
        let targetName = [e.target.name];
        targetName *= 1;
        let goodsList_ = this.state.goodsList;
        goodsList_[targetName].price = e.target.value;
        this.setState({
            goodsList : goodsList_
        });
    }

    onStatusChange = (e) => {
        let targetName = [e.target.name];
        targetName *= 1;
        let goodsList_ = this.state.goodsList;
        console.log(e.target.checked);
        goodsList_[targetName].open_status = e.target.checked ? "1" : "0"
        this.setState({
            goodsList : goodsList_
        });
        console.log(this.state.goodsList[targetName].open_status);
    }

    postData = (e) => {
        e.preventDefault();
        
        let idea = this.state;
        console.log(idea);
        ApiService.testPostIdea(idea)
        .then(res => {
            console.log("보내기 성공");
            this.props.history.push('/');
        })
        .catch(err => {
            console.log("아 에러");
        })
    }

    render(){
        return (
            <div>
                <h2>{this.state.banker_id}의 등록창</h2>
                <form>
                    이름 : <input type="text" name="project_name" value={this.state.project_name} onChange={this.onChange}/><br/>
                    간단요약 : <input type="text" name="short_description" value={this.state.short_description} onChange={this.onChange}/><br/>
                    분류 : <input type="text" name="category" value={this.state.category} onChange={this.onChange}/><br/>
                    목적 : <input type="text" name="0" value={this.state.goodsList[0].content} onChange={this.onTypeChange}/>
                    <input type="text" name="0" value={this.state.goodsList[0].price} onChange={this.onPriceChange}/>
                    <input type="checkbox" name="0" value={this.state.goodsList[0].open_status} onChange={this.onStatusChange}/><br/>
                    필요성 : <input type="text" name="1" value={this.state.goodsList[1].content} onChange={this.onTypeChange}/>
                    <input type="text" name="1" value={this.state.goodsList[1].price} onChange={this.onPriceChange}/>
                    <input type="checkbox" name="1" value={this.state.goodsList[1].open_status} onChange={this.onStatusChange}/><br/> 
                    전략 : <input type="text" name="2" value={this.state.goodsList[2].content} onChange={this.onTypeChange}/>
                    <input type="text" name="2" value={this.state.goodsList[2].price} onChange={this.onPriceChange}/>
                    <input type="checkbox" name="2" value={this.state.goodsList[2].open_status} onChange={this.onStatusChange}/><br/>
                    우수성 : <input type="text" name="3" value={this.state.goodsList[3].content} onChange={this.onTypeChange}/>
                    <input type="text" name="3" value={this.state.goodsList[3].price} onChange={this.onPriceChange}/>
                    <input type="checkbox" name="3" value={this.state.goodsList[3].open_status} onChange={this.onStatusChange}/><br/>
                    시장분석 : <input type="text" name="4" value={this.state.goodsList[4].content} onChange={this.onTypeChange}/>
                    <input type="text" name="4" value={this.state.goodsList[4].price} onChange={this.onPriceChange}/>
                    <input type="checkbox" name="4" value={this.state.goodsList[4].open_status} onChange={this.onStatusChange}/><br/>
                    
                    <button onClick={this.postData}>데이터 보내기</button>
                </form>
            </div>
        );
    }
} 

export default PostTestComponent;