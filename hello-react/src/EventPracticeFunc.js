import React, { useState } from 'react';

const EventPracticeFunc = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const onClick = e => {
        alert(form.username + ': ' + form.message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };
    const handleKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                value={form.username}
                placeholder="Free is Good :)"
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                value={form.message}
                placeholder="Free is Good :)"
                onChange={onChange}
                onKeyPress={handleKeyPress}        
            />
            <button onClick={onClick}>비워라!</button>
        </div>
    );
}

export default EventPracticeFunc;