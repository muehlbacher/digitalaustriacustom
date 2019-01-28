import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ScrollAnimation from 'react-animate-on-scroll';



/* 
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
                <div className = "stuff">
                    <div className ="image-wrapper">
                        <img src="images/digitalaustria1.jpg" alt="Mann mit Kind auf dem Arm" sizes="(max-width: 1502px) 100vw, 1502px"/>
                    </div>
                    <div className ="stuff-text">
                        <h2>STUFF</h2>
                        <p>Mauris sem velit, vehicula eget sodales vitae,
                        rhoncus eget sapien:</p>
                        <ol>
                        <li>Nulla pulvinar diam</li>
                        <li>Facilisis bibendum</li>
                        <li>Vestibulum vulputate</li>
                        <li>Eget erat</li>
                        <li>Id porttitor</li>
                        </ol>
                    </div>
                </div>
        </CSSTransitionGroup>
        );
    }
} */


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
                <div className = "stuff container_12 stuff-1">
                    <div className ="image-column my-column grid_6">
                        <div className ="image-wrapper">
                            <img src="images/digitalaustria1.jpg" alt="Mann mit Kind auf dem Arm" sizes="(max-width: 1502px) 100vw, 1502px"/>
                        </div>
                    </div>
                    <div className ="stuff-text grid_6">
                    <div className="text-wrapper">
                    <ScrollAnimation animateIn="fadeInUp"
                    animateOnce ={true}>
                        <img className="image-svg" src="images/users-group.svg" alt="Gesellschaft Menschen und Zeugs"/>
                       

<h5>GESELLSCHAFT</h5>
                        
                        <h4>Mehr Lebensqualität für alle Generationen.</h4>
                        <span className ="text-content">
                        Mit Information und Weiterbildung sorgen wir
                        dafür, dass alle im Land - unabhängig von 
                        Bildungsgrad, Alter oder Geschlecht - von der 
                        Digitalisierung profitieren können. Wir machen die 
                        Bürgerinnen und Bürger fit für neue Technologien, 
                        um ihre Lebensqualität zu erhöhen.
                        </span>

                       
                        <div className="container-1">
                            <a href="#" className="btn btn-1">Mehr erfahren</a>
                            </div>
                            </ScrollAnimation>
                            </div>
                    </div>

                    
                    </div> 
        </CSSTransitionGroup>
        );
    }
}

export default Stuff;