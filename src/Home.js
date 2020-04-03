import React, { Component } from "react";
import { Slide } from './lib';
import './Home.css';



class Home extends Component {
    constructor() {
        super();
        this.state = {
            slideImages: [
                'pics/cc1.jpg',
                'pics/cc2.jpg',
                'pics/cc3.jpg'
            ]
        }
    }
    render() {
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            pauseOnHover: true,
            onChange: (oldIndex, newIndex) => {
                console.log(
                    `Slide transition finished from ${oldIndex} to ${newIndex}`
                );
            }
        };

        const { slideImages } = this.state;
        return (
            <div className="slide-container">
                <Slide {...properties}>
                    {slideImages.map((each, index) => (
                        <div key={index} className="each-slide">
                            <div style={{ backgroundImage: `url(${each})`}}>
                                <span>Slide {index + 1}</span>
                            </div>
                        </div>
                    ))}
                </Slide>

            </div>
        );
    }
}

export default Home;