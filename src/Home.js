import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';


class Home extends Component {
    render () {
        return(
                    <CSSTransitionGroup     
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={false}
            >
            <div className ="stuff">

                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

            </div>
            </CSSTransitionGroup>
        );
    }
}

export default Home;
