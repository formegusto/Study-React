import React, { Component } from 'react';
import ApiService from '../ApiService';

class DetailTestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            idea_seq : window.localStorage.getItem("iseq"),
            idea : {},
            motivation : {},
            need : {},
            strategy : {},
            market_analysis : {},
            competitiveness : {}
        }
    }
    componentDidMount = () => {
        ApiService.testDetailIdea(this.state.idea_seq, window.localStorage.getItem("user"))
        .then(res => {
            this.setState({
                idea : res.data,
                motivation : res.data.goodsList[0],
                need : res.data.goodsList[1],
                strategy : res.data.goodsList[2],
                market_analysis : res.data.goodsList[3],
                competitiveness : res.data.goodsList[4]
            })
            console.log(this.state.idea);
            console.log(this.state.idea.goodsList[0].content);
        })
        .catch(err => {

        })
    }

    goHome = () => {
        window.localStorage.removeItem("iseq");
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
                <h2>seq : {this.state.idea.idea_seq}</h2>
                <h2>name : {this.state.idea.project_name}</h2>
                <h2>short : {this.state.idea.short_description}</h2>
                <h2>motivation : {this.state.motivation.open_status === 1 ? 
                    this.state.motivation.content : "가려졌다 수고해라" }  </h2>
                <h2>need : {this.state.need.open_status === 1 ? 
                    this.state.need.content : "가려졌다 수고해라" } </h2>
                <h2>strategy : {this.state.strategy.open_status === 1 ? 
                    this.state.strategy.content : "가려졌다 수고해라" } </h2>
                <h2>market_analysis : {this.state.market_analysis.open_status === 1 ? 
                    this.state.market_analysis.content : "가려졌다 수고해라" } </h2>
                <h2>competitiveness : {this.state.competitiveness.open_status === 1 ? 
                    this.state.competitiveness.content : "가려졌다 수고해라" } </h2>
                <hr/>
                <button onClick={this.goHome}>집가자..</button>
            </div>
        )
    }
}

export default DetailTestComponent;