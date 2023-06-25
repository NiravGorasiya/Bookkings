import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam nibh eget ligula euismod, sit amet consequat enim porta.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-envelope-fill"></i> niravgorasiya101@gmail.com</li>
                            <li><i className="bi bi-telephone-fill"></i> +7069224753</li>
                            <li><i className="bi bi-geo-alt-fill"></i> 123 Street, City, Country</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
