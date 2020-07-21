import React from 'react';
import ApiService from '../ApiService';

const KaKaoTestComponent = ({history}) => {
    const payTest_2 = () => {
        ApiService.payTest_2()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    const payTest = () => {
        ApiService.payTest()
        .then(res => {
            console.log(res.data);
            
            window.location.href(res.data);
            /*
            let win = window.open(res.data);

            const win_interval = window.setInterval(function() {
                try{
                    if(win === null || win.closed){
                        window.clearInterval(win_interval);
                        win = null;
                        alert('창 close : 결제완료검사');
                    }
                } catch(e) {
                    console.log(e);
                }
            }, 500);
            */
        }).catch(err => {
            console.log(err.responseURL);
        })
    }

    return (
        <div>
            <button onClick={payTest}>페이 전송</button>
            <button onClick={payTest_2}>페이 테스트 2</button>
            <form method="post" action="http://192.168.1.230:8080/kakao/kakaoPay">
                <button type="submit">카카오페이로 결제하기</button>
            </form>
        </div>
    )
}

export default KaKaoTestComponent;