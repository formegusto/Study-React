import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터에 온 것을 환영한다 후후</p>
            {showDetail && <p>detail 값을 true로 하셨군요.. 흠ㅁ.ㅁㅁ..</p>}
        </div>
    );
}

export default About;