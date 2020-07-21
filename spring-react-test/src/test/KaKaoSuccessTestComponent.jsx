import React from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import ApiService from '../ApiService';
import qs from 'qs';

const KaKaoSuccessTestComponent = ({location}) => {
    useEffect(() => {
        const query = qs.parse(location.search, {
            ignoreQueryPrefix: true
        })
        const pg_token = query.pg_token;
        console.log(pg_token);
        ApiService.paySuccess(pg_token);
    })
    return (
        <div>
            결제성공!
        </div>
    )
}

export default KaKaoSuccessTestComponent;