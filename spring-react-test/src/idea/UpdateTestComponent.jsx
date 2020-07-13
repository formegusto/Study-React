import React, { Component } from 'react'
import ApiService from '../ApiService'

class UpdateTestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            idea_seq : window.localStorage.getItem("update_iseq"),
            project_name : '',
            short_description : '',
            category : '',
            goodsList : [1,2,3,4,5]
        }
        
    }
    
    componentDidMount = () => {
        ApiService.testDetailIdea(window.localStorage.getItem("update_iseq"), window.localStorage.getItem("user"))
                .then(res => {
                    this.setState ({
                        project_name : res.data.project_name,
                        short_description : res.data.short_description,
                        category : res.data.category,
                        goodsList : res.data.goodsList
                    })
                    console.log("로드 완료");
                    console.log(this.state);
                })
                .catch(err => {
                    console.log(err);
                    console.log("허용이 안된 API 입니다");
                })
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

    goUpdate = () => {
        let idea = this.state;

        ApiService.updateIdea(idea);
        window.localStorage.setItem("iseq", this.state.idea_seq);

        this.props.history.push("/detailTest");
    }

    render(){
        return (
            <div>
                이름 : <input type="text" name="project_name" value={this.state.project_name} onChange={this.onChange}/><br/>
                간단요약 : <input type="text" name="short_description" value={this.state.short_description} onChange={this.onChange}/><br/>
                분류 : <input type="text" name="category" value={this.state.category} onChange={this.onChange}/><br/>
                목적 : <input type="text" name="0" value={this.state.goodsList[0].content} onChange={this.onTypeChange}/>
                    <input type="text" name="0" value={this.state.goodsList[0].price} onChange={this.onPriceChange}/>
                    {this.state.goodsList[0].open_status === 1 ? <input type="checkbox" name="0" value={this.state.goodsList[0].open_status} onChange={this.onStatusChange} checked/>
                     : <input type="checkbox" name="0" value={this.state.goodsList[0].open_status} onChange={this.onStatusChange}/>}<br/>
                필요성 : <input type="text" name="1" value={this.state.goodsList[1].content} onChange={this.onTypeChange}/>
                    <input type="text" name="1" value={this.state.goodsList[1].price} onChange={this.onPriceChange}/>
                    {this.state.goodsList[1].open_status === 1 ? <input type="checkbox" name="1" value={this.state.goodsList[1].open_status} onChange={this.onStatusChange} checked/>
                     : <input type="checkbox" name="1" value={this.state.goodsList[1].open_status} onChange={this.onStatusChange}/>}<br/>
                전략 : <input type="text" name="2" value={this.state.goodsList[2].content} onChange={this.onTypeChange}/>
                    <input type="text" name="2" value={this.state.goodsList[2].price} onChange={this.onPriceChange}/>
                    {this.state.goodsList[2].open_status === 1 ? <input type="checkbox" name="2" value={this.state.goodsList[2].open_status} onChange={this.onStatusChange} checked/>
                     : <input type="checkbox" name="2" value={this.state.goodsList[2].open_status} onChange={this.onStatusChange}/>}<br/>
                우수성 : <input type="text" name="3" value={this.state.goodsList[3].content} onChange={this.onTypeChange}/>
                    <input type="text" name="3" value={this.state.goodsList[3].price} onChange={this.onPriceChange}/>
                    {this.state.goodsList[3].open_status === 1 ? <input type="checkbox" name="3" value={this.state.goodsList[3].open_status} onChange={this.onStatusChange} checked/>
                     : <input type="checkbox" name="3" value={this.state.goodsList[3].open_status} onChange={this.onStatusChange}/>}<br/>
                시장분석 : <input type="text" name="4" value={this.state.goodsList[4].content} onChange={this.onTypeChange}/>
                    <input type="text" name="4" value={this.state.goodsList[4].price} onChange={this.onPriceChange}/>
                    {this.state.goodsList[4].open_status === 1 ? <input type="checkbox" name="4" value={this.state.goodsList[4].open_status} onChange={this.onStatusChange} checked/>
                     : <input type="checkbox" name="4" value={this.state.goodsList[4].open_status} onChange={this.onStatusChange}/>}<br/>
                <button onClick={this.goUpdate}>수정하기</button>
            </div>
        );
    }
}

export default UpdateTestComponent;