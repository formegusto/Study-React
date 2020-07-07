import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('소상공인은 힘들어요..');
    const onClickEnter = () => setMessage('반갑다 이놈!');
    const onClickLeave = () => setMessage('잘가라!');

    const [color, setColor] = useState('black');

    const [object, setObject] = useState({ a:1, b:2, c:3 });
    const nextObject = {...object, b:100};
    const onClickObject = () => setObject(nextObject);

    const [array, setArray] = useState([
        { id:1, value:true },
        { id:2, value:true },
        { id:3, value: false }  
    ]);
    let nextArray = array.concat({id: 4});
    nextArray.filter(item => item.id !== 2);
    nextArray.map(item => (item.id === 1 ? { ...item, value: false} : item));
    const onClickArray = () => setArray(nextArray);
    const showArray = () => console.log(array);

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={ {color} }>{message}</h1>
            <button style={{ color:'red ' }} onClick={() => setColor('red')}>빨간니트</button>
            <button style={{ color:'green' }} onClick={() => setColor('green')}>초록맨투맨</button>
            <button style={{ color:'blue' }} onClick={() => setColor('blue')}>파란색슬리브</button>
            <button onClick={() => onClickObject()}>{object.b}</button>
            <button onClick={() => onClickArray()}>배열 바꿀거야!</button>
            <button onClick={() => showArray()}>심심한데 배열 내용이나 볼까?</button>
        </div>
    );
}

export default Say