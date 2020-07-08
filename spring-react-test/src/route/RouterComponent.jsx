import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInTestComponent from '../user/SignInTestComponent';
import SignUpTestComponent from '../user/SignUpTestComponent';
import SignInIngTestComponent from '../user/SignInIngTestComponent';
import ReturnTestComponent from '../test/ReturnTestComponent';
import PostTestComponent from '../idea/PostTestComponent';
import DetailTestComponent from '../idea/DetailTestComponent';

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Switch>
                        <Route exact path="/" component={SignInIngTestComponent}/>
                        <Route path="/signin" component={SignInTestComponent}/>
                        <Route path="/signup" component={SignUpTestComponent}/>
                        <Route path="/returnTest" component={ReturnTestComponent}/>
                        <Route path="/postTest" component={PostTestComponent}/>
                        <Route path="/detailTest" component={DetailTestComponent}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    color: 'blue',
    margin: '10px'
}

export default AppRouter;