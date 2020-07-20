import React from 'react';
import ApiService from '../ApiService';

const KaKaoTestComponent = () => {
    const payTest = () => {
        ApiService.payTest()
        .then(res => {
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
        }).catch(err => {
            console.log(err.responseURL);
        })
    }

    return (
        <div>
            <button onClick={payTest}>페이 전송</button>
        </div>
    )
}

export default KaKaoTestComponent;