import React, { Component } from 'react'; 
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends Component {
    render(){
        return(
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Garden</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ashlyn Garden</h1>
                                <p>We might think we are nurturing our garden, but 
                                    of course it's our garden that is really nurturing us
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;