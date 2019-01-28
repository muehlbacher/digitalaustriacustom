import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';


class Contact extends Component {
    render() {
        return ( 
                                <CSSTransitionGroup     
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={false}
            >
            <div className = "stuff">
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on
                our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
            </CSSTransitionGroup>
        );
    }
}

export default Contact;