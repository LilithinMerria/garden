import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/flower">Flowers</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Kemal Yapar No.2 <br/>
                            Kyrenia <br/>
                            Northern Cyprus <br/>
                            <i className="fa fa-phone fa-lg"></i>: +905488331446 <br/>
                            <i className="fa fa-fax fa-lg"></i> <br/>
                            <i className="fa fa-envelope fa-lg"></i>:
                            <a href="mailto">ashlynmerria@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="https://google.com/+">
                                <i className="fa fa-google-plus"></i>
                            </a>
                            <a className="btn btn-social-icon btn-facebook" href="https://facebook.com/profile.php?id=">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/">
                                <i className= "fa fa-twitter"></i>
                            </a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://linkedin.com/in">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a className="btn btn-social-icon btn-google" href="https://youtube.com">
                                <i className="fa fa-youtube"></i>
                            </a>
                            <a className="btn btn-social-icon" href="mailto">
                                <i className="fa fa-envelope-o"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p> Copyright 2020 Ashlyn Garden </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;