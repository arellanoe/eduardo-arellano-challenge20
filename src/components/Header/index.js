import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
    return (
        <HashRouter>
  
    

    <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>

        </div>
    </HashRouter>
    )
}
}

export default Header;