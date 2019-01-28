import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import './index.css';

class Hero extends Component {
    render(){
        return(

            <div className="hero-image">
                <div className="hero-text">
                <CSSTransitionGroup    
            transitionName="worksTransition-left"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={false}
            >
            <span>
                Unsere Chance auf die beste<br/>
                Zukunft aller Zeiten.<br/>
                </span>

                        
                </CSSTransitionGroup>
            
                <span className="hero-text-small">Heute. Morgen. Übermorgen.</span>
                </div>
                
            </div>
           
        );
    }
}

export default Hero;