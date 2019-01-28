import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ScrollAnimation from 'react-animate-on-scroll';



class Stuff extends Component {
    render() {
        return (                     
        <CSSTransitionGroup     
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionLeave={false}
            >
                <div className = "stuff container_12">
                   
                    <div className ="stuff-text grid_6">
                    <div className="text-wrapper">
                    <ScrollAnimation animateIn="fadeInUp"
                    animateOnce ={true}>
                    <img className="image-svg" src="images/analytics.svg" alt="Gesellschaft Menschen und Zeugs"/>
                    <h5>WIRTSCHAFT</h5>
                    
<h4>Neue Chancen für Wachstum, Jobs und Wohlstand.</h4>
<span className ="text-content">
Wir stellen die Weichen, um unsere Unternehmen beim digitalen Wandel zu begleiten und die 
Wettbewerbsfähigkeit Österreichs zu stärken. Dazu vernetzen wir die innovativen Vorreiter mit den 
etablierten Unternehmen und bauen das Wissen in den Betrieben aus. So werden unsere Unternehmen fit für 
den Wettbewerb und neue Arbeitsplätze in Österreich geschaffen.
</span>
                        <div className="container-1">
                            <a href="#" className="btn btn-1">Mehr erfahren</a>
                            </div>
                            </ScrollAnimation>
                            </div>
                    </div>
                    <div className ="image-column my-column grid_6">
                        <div className ="image-wrapper">
                        <img src="images/digitalaustria2.jpg" alt="Mann mit Kind auf dem Arm" sizes="(max-width: 1502px) 100vw, 1502px"/>
                    </div>
                    </div>
                </div>
        </CSSTransitionGroup>
        );
    }
}

export default Stuff;