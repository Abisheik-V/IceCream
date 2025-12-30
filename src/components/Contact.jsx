import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/style/style.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent sweetly.');
    };

    return (
        <div className="ice-cream-app">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
                <div className="container">
                    <Link className="navbar-brand jigar-brand" to="/">Jigar Icecream</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/flavors">Flavors</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ height: '76px', backgroundColor: '#2c3e50' }}></div>

            {/* Expressive Contact Section */}
            <div className="contact-wrapper position-relative py-5">
                {/* Animated Background Blobs */}
                <div className="animated-blob blob-1"></div>
                <div className="animated-blob blob-2"></div>
                <div className="animated-blob blob-3"></div>

                <div className="container position-relative z-2">
                    <div className="row align-items-center" style={{ minHeight: '80vh' }}>
                        {/* Left Side: Creative Text & Info */}
                        <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                            <h1 className="display-3 fw-bold mb-4">Let's Create Something <span className="text-danger">Sweet</span></h1>
                            <p className="lead text-muted mb-5">Have a flavor idea? Want to franchise? Or just want to say hi? We're all ears (and spoons).</p>

                            <div className="row g-4">
                                <div className="col-md-6 text-center contact-info-item">
                                    <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        <h5 className="fw-bold mt-3">Visit Us</h5>
                                        <p className="text-muted small">123 Sweet Street, Dessert City</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center contact-info-item">
                                    <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                                        <i className="bi bi-envelope-open-heart-fill"></i>
                                        <h5 className="fw-bold mt-3">Email Us</h5>
                                        <p className="text-muted small">hello@jigaricecream.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Glassmorphism Form */}
                        <div className="col-lg-5 offset-lg-1" data-aos="zoom-in" data-aos-delay="200">
                            <div className="contact-card">
                                <h3 className="mb-4 fw-bold">Send a Message</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-4 form-floating-custom">
                                        <input type="text" className="form-control" id="name" placeholder="Name" required />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                    <div className="form-floating mb-4 form-floating-custom">
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-5 form-floating-custom">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="message" style={{ height: '150px' }} required></textarea>
                                        <label htmlFor="message">Your Message</label>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-dark btn-lg rounded-pill shadow-lg">Send Message <i className="bi bi-send-fill ms-2"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Copied from Index.jsx */}
            <footer className="footer-section py-5 position-relative z-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <h4 className="footer-brand">Jigar Icecream</h4>
                            <p>Melting hearts since 2025. Experience the best quality ice cream made with passion.</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h5>Quick Links</h5>
                            <ul className="footer-links list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/flavors">Menu</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/franchise">Franchise</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h5>Business Hours</h5>
                            <ul className="list-unstyled text-muted-custom">
                                <li>Mon - Fri: 10:00 AM - 10:00 PM</li>
                                <li>Sat - Sun: 09:00 AM - 11:00 PM</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h5>Get in Touch</h5>
                            <p><i className="bi bi-geo-alt-fill"></i> 123 Sweet Street, Dessert City</p>
                            <p><i className="bi bi-telephone-fill"></i> +1 234 567 8900</p>
                            <p><i className="bi bi-envelope-fill"></i> hello@jigaricecream.com</p>
                            <div className="social-icons mt-3">
                                <a href="#" className="me-2"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="me-2"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="me-2"><i className="bi bi-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <hr className="footer-divider" />
                    <div className="text-center copyright">
                        <p>&copy; 2025 Jigar Icecream. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
