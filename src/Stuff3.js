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
                    <div className ="image-column my-column grid_6">
                        <div className ="image-wrapper">
                            <img src="images/digitalaustria3.jpg" alt="Mann mit Kind auf dem Arm" sizes="(max-width: 1502px) 100vw, 1502px"/>
                        </div>
                    </div>
                    <div className ="stuff-text grid_6">
                    <div className="text-wrapper">
                    <ScrollAnimation animateIn="fadeInUp"
                    animateOnce ={true}>
                        <img className="image-svg" src="images/capitol.svg" alt="Gesellschaft Menschen und Zeugs"/>
                       

<h5>VERWALTUNG</h5>
                        
                        <h4>Vom Vater Staat zum Partner Staat.</h4>
                        <span className ="text-content">
                        Österreichs Verwaltung gehört zu den Besten in Europa. 
                        Damit das auch in Zukunft so bleibt, wandelt sich der klassische Behördengang vom electronic zum 
                        mobile government. Wir wollen, dass die Amtswege so einfach und serviceorientiert wie möglich sind. 
                        Österreich wird Vorreiter und Vorbild in Europa für innovative und bürgernahe Verwaltung.
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