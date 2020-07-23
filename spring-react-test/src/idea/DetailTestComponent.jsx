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
            competitiveness : {},
            goodsSeqList : [],
            do_you_like : '',
            goodsList: [
                {
                    goods_seq : 31
                },
                {
                    goods_seq : 32
                },
                {
                    goods_seq : 34
                },
            ]
        }
    }
    componentDidMount = () => {
        ApiService.testDetailIdea(this.state.idea_seq)
        .then(res => {
            this.setState({
                idea : res.data,
                motivation : res.data.goodsList[0],
                need : res.data.goodsList[1],
                strategy : res.data.goodsList[2],
                market_analysis : res.data.goodsList[3],
                competitiveness : res.data.goodsList[4],
                goodsSeqList : []
            })
            console.log(this.state.goodsSeqList);
            console.log(this.state.idea);
            console.log(this.state.idea.goodsList[0].content);
        })
        .catch(err => {

        })
        let likey = {
            idea_seq : this.state.idea_seq
        }
        ApiService.doYouLike(likey)
        .then(res => {
            this.setState({
                do_you_like : res.data
            })
        })
        .catch(err => {
            console.log("에러다 이마");
        })
    }

    goHome = () => {
        window.localStorage.removeItem("iseq");
        this.props.history.push("/")
    }

    goUpdate = () => {
        this.props.history.push("/update");
    }

    goAllPurchase = (e) => {
        let goodsSeqList_ = this.state.goodsSeqList;
        console.log(goodsSeqList_);
        ApiService.purchaseGoods(goodsSeqList_);
        this.props.history.push("/detailTest");
    }

    goPurchase = (e) => {
        let goodsSeqList_ = [e.target.value];
        ApiService.purchaseGoods(goodsSeqList_);
        this.props.history.push("/detailTest");
    }

    goGoodsSeq = (e) => {
        console.log("넣빼 전 ===> " + this.state.goodsSeqList);
        let goodsSeqList_ = this.state.goodsSeqList;
        console.log(e.target.checked);
        if(e.target.checked === true){
            goodsSeqList_.push(e.target.value);
            this.setState ( {
                goodsSeqList : goodsSeqList_
            })
            console.log("리스트에 넣자");
            console.log("넣고 난 후 ===> " + this.state.goodsSeqList);
        } else {
            console.log("리스트에서 빼자");
            let index = goodsSeqList_.indexOf(e.target.value);
            goodsSeqList_.splice(index,1);
            this.setState ( {
                goodsSeqList : goodsSeqList_
            })
            console.log("뺀후 ===> " + this.state.goodsSeqList);
        }
    }

    goLikey = () => {
        let likey = {
            idea_seq : this.state.idea_seq
        }
        ApiService.likey(likey);
    }

    gounLikey = () => {
        let likey = {
            idea_seq : this.state.idea_seq
        }
        ApiService.unLikey(likey);
    }

    onSubmit = () => {
        window.localStorage.setItem("goodsSeqList", this.state.goodsSeqList);
    }

    render() {
        return (
            <div>
                <h2>seq : {this.state.idea.idea_seq}</h2>
                <h2>name : {this.state.idea.project_name}</h2>
                <h2>short : {this.state.idea.short_description}</h2>
                <h2>motivation : {this.state.motivation.open_status ? 
                    this.state.motivation.content : <div><button value={this.state.motivation.goods_seq} onClick={this.goPurchase}>구매하고 봐라 나의 몸값은 ${this.state.motivation.price} 원이다.</button><input type="checkbox" value={this.state.motivation.goods_seq} onChange={this.goGoodsSeq}/></div> } </h2>
                <h2>need : {this.state.need.open_status ? 
                    this.state.need.content :<div><button value={this.state.need.goods_seq} onClick={this.goPurchase}>구매하고 봐라 나의 몸값은 ${this.state.need.price} 원이다.</button><input type="checkbox" value={this.state.need.goods_seq} onChange={this.goGoodsSeq}/></div> } </h2>
                <h2>strategy : {this.state.strategy.open_status ? 
                    this.state.strategy.content : <div><button value={this.state.strategy.goods_seq} onClick={this.goPurchase}>구매하고 봐라 나의 몸값은 ${this.state.strategy.price} 원이다.</button><input type="checkbox" value={this.state.strategy.goods_seq} onChange={this.goGoodsSeq}/></div> } </h2>
                <h2>market_analysis : {this.state.market_analysis.open_status ? 
                    this.state.market_analysis.content : <div><button value={this.state.market_analysis.goods_seq} onClick={this.goPurchase}>구매하고 봐라 나의 몸값은 ${this.state.market_analysis.price} 원이다.</button><input type="checkbox" value={this.state.market_analysis.goods_seq} onChange={this.goGoodsSeq}/></div> } </h2>
                <h2>competitiveness : {this.state.competitiveness.open_status ? 
                    this.state.competitiveness.content : <div><button value={this.state.competitiveness.goods_seq} onClick={this.goPurchase}>구매하고 봐라 나의 몸값은 ${this.state.competitiveness.price} 원이다.</button><input type="checkbox" value={this.state.competitiveness.goods_seq} onChange={this.goGoodsSeq}/></div> } </h2>
                <hr/>
                <button onClick={this.goHome}>집가자..</button>
                <button onClick={this.goUpdate}>수정하기</button>
                <button onClick={this.goAllPurchase}>전체 구매</button>
                <form onSubmit={this.onSubmit} method="post" action="http://192.168.1.230:8080/purchase">
                    <input type="hidden" value={this.state.goodsSeqList} name="purchaseList"/>
                    <button type="submit">체크 구매</button>
                </form>
                <button onClick={this.goPurchase}>체크한거 사기</button>
                {this.state.do_you_like === 1 ? <button onClick={this.gounLikey}>안좋아졌어요</button>
                    : <button onClick={this.goLikey}>좋아요 누르기</button>} 
            </div>
        )
    }
}

export default DetailTestComponent;