import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInTestComponent from '../user/SignInTestComponent';
import SignUpTestComponent from '../user/SignUpTestComponent';
import SignInIngTestComponent from '../user/SignInIngTestComponent';

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Switch>
                        <Route exact path="/" component={SignInIngTestComponent}/>
                        <Route path="/signin" component={SignInTestComponent}/>
                        <Route path="/signup" component={SignUpTestComponent}/>
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