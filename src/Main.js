import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Stuff from './Stuff';
import Stuff2 from './Stuff2';
import Stuff3 from './Stuff3'
import Hero from './Hero';
import './index.css';
import './960_12_col.css'

import { HashLink as Link } from 'react-router-hash-link';
import ScrollableAnchor from 'react-scrollable-anchor';
import "animate.css/animate.min.css";




class Main extends Component {
    render() {
        return (
            <div>
            <ScrollMain />
            </div>
        );
    }
}

class ScrollMain extends Component{
    render(){
        return(
            <div>
                <ScrollableAnchor id={'home'}>
                    <div></div>
                </ScrollableAnchor>
                
                <nav className="nav">
                    <a className="left-header" href="#home">Digital Austria</a>
                    <ul className ="nav-items header">
                        <li><a className="nav-item" href='#stuff'> Gesellschaft</a></li>
                        <li><a className="nav-item" href='#stuff2'> Wirtschaft</a></li>
                        <li><a className="nav-item" href='#stuff3'> Verwaltung</a></li>
                    </ul>
                </nav>
                
                <main className="site-wrapper">
                    <Hero/>

                    <ScrollableAnchor id={'stuff'}>
                        <Stuff/>
                    </ScrollableAnchor>          
                    
                    <ScrollableAnchor id={'stuff2'}>
                        <Stuff2/>
                    </ScrollableAnchor>
                    
                    <ScrollableAnchor id={'stuff3'}>
                        <Stuff3/>
                    </ScrollableAnchor>
                    
                    <Home/>
                </main>
            </div>
            
        );
    }
}

export default Main;