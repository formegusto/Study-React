import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '디폴트태헌'
    }
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
    render(){
        const {name,favoriteNumber,children} = this.props;
        return (
            <div>
                안녕, 나는 {name} 이다. 반갑다 :)<br/>
                나의 Children은 {children}
                이다. <br/>
                내가 좋아하는 숫자는 {favoriteNumber} 이다.
            </div>
        );
    }

}

export default MyComponent;