import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './login'
function Main(){
    return (
        <div>
        <Router>
            <Route path="/login/" exact component={Login} />
        </Router>
        </div>

)
}
export default Main