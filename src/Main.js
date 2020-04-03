/*  
    Static main page
*/

// import React
import React, { Component } from "react";
import { // import React Router for SPA
    Route,
    NavLink,
    HashRouter

}   from "react-router-dom"; // defining routing region
// container to load content into & navitation links
import Home from "./Home"; 
import Services from "./Services";
import Prices from "./Prices";
import Testimonials from "./Testimonials";
import About from "./About";

/*
    class Main
    Component: Main.js

*/
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <h1 className="title-header">Anzora's Carpet and Tile Cleaning</h1>
                    </div>
                    <nav className="navbar">
                        <NavLink
                            exact
                            activeClassName="navbar_link-active"
                            className="navbar_link"
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            exact
                            activeClassName="navbar_link-active"
                            className="navbar_link"
                            to="/services"
                        >
                            Services
                        </NavLink>
                        <NavLink
                            exact
                            activeClassName="navbar_link-active"
                            className="navbar_link"
                            to="/prices"
                        >
                            Prices
                        </NavLink>
                        <NavLink
                            exact
                            activeClassName="navbar_link-active"
                            className="navbar_link"
                            to="/testimonials"
                        >
                            Testimonials
                        </NavLink>
                        <NavLink
                            exact
                            activeClassName="navbar_link-active"
                            className="navbar_link"
                            to="/about"
                        >
                            About us
                        </NavLink>
                    
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/services" component={Services}/>
                        <Route path="/Prices" component={Prices}/>
                        <Route path="/Testimonials" component={Testimonials}/>
                        <Route path="/About" component={About}/>
                    </div>
                    <footer className="footer">
                        <h2>Contact us</h2> 

                    </footer>

                </div>

            </HashRouter>

        );
    }
}

export default Main;