import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInTestComponent from '../user/SignInTestComponent';
import SignUpTestComponent from '../user/SignUpTestComponent';
import SignInIngTestComponent from '../user/SignInIngTestComponent';
import PostTestComponent from '../idea/PostTestComponent';
import DetailTestComponent from '../idea/DetailTestComponent';
import UpdateTestComponent from '../idea/UpdateTestComponent';
import LikeyListComponent from '../idea/LikeyListComponent';
import MyListComponent from '../idea/MyListComponent';
import KaKaoTestComponent from '../test/KaKaoTestComponent';
import KaKaoSuccessTestComponent from '../test/KaKaoSuccessTestComponent';

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Switch>
                        <Route exact path="/" component={SignInIngTestComponent}/>
                        <Route path="/signin" component={SignInTestComponent}/>
                        <Route path="/signup" component={SignUpTestComponent}/>
                        <Route path="/postTest" component={PostTestComponent}/>
                        <Route path="/detailTest" component={DetailTestComponent}/>
                        <Route path="/update" component={UpdateTestComponent}/>
                        <Route path="/likeyList" component={LikeyListComponent}/>
                        <Route path="/myList" component={MyListComponent}/>
                        <Route path="/kakaoTest" component={KaKaoTestComponent}/>
                        <Route path="/kakaoPaySuccess" component={KaKaoSuccessTestComponent}/>}
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