import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './login'
import Menu from './menu'
function Main(){
    return (
        <Router>
            <Route path="/login" exact component={Login} />
            <Route path="/home" exact component={Menu} />
    </Router>
)
}
export default Main