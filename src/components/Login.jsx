import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/style/style.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isLogin ? 'Welcome back! Logging you in...' : 'Account created! Welcome to the family.');
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
                            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ height: '76px', backgroundColor: '#2c3e50' }}></div>

            {/* Login Section */}
            <div className="login-page-wrapper">
                {/* Background Shapes */}
                <div className="login-bg-shape shape-1"></div>
                <div className="login-bg-shape shape-2"></div>

                <div className="auth-card" data-aos="zoom-in" data-aos-duration="1200">
                    <h2 className="text-center fw-bold mb-4">{isLogin ? 'Welcome Back!' : 'Join the Club'}</h2>

                    {/* Toggle Switch */}
                    <div className="auth-toggle-wrapper">
                        <div className={`auth-slider ${!isLogin ? 'slide-right' : ''}`}></div>
                        <button
                            className={`auth-toggle-btn ${isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(true)}
                        >
                            Log In
                        </button>
                        <button
                            className={`auth-toggle-btn ${!isLogin ? 'active' : ''}`}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        {!isLogin && (
                            <div className="form-floating dark-mode mb-3" data-aos="fade-up">
                                <input type="text" className="form-control auth-form-input" id="name" placeholder="John Doe" required />
                                <label htmlFor="name">Full Name</label>
                            </div>
                        )}

                        <div className="form-floating dark-mode mb-3" data-aos="fade-up" data-aos-delay="100">
                            <input type="email" className="form-control auth-form-input" id="email" placeholder="name@example.com" required />
                            <label htmlFor="email">Email Address</label>
                        </div>

                        <div className="form-floating dark-mode mb-4" data-aos="fade-up" data-aos-delay="200">
                            <input type="password" className="form-control auth-form-input" id="password" placeholder="Password" required />
                            <label htmlFor="password">Password</label>
                        </div>

                        {!isLogin && (
                            <div className="form-floating dark-mode mb-4" data-aos="fade-up" data-aos-delay="300">
                                <input type="password" className="form-control auth-form-input" id="confirmPassword" placeholder="Confirm Password" required />
                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>
                        )}

                        <div className="d-grid" data-aos="fade-up" data-aos-delay={isLogin ? 300 : 400}>
                            <button type="submit" className={`btn btn-lg auth-btn ${isLogin ? 'btn-light text-dark' : 'btn-outline-light'}`}>
                                {isLogin ? 'Sign In' : 'Create Account'}
                            </button>
                        </div>
                    </form>

                    {isLogin && (
                        <div className="text-center mt-3">
                            <a href="#" className="text-decoration-none text-light opacity-75 small">Forgot Password?</a>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer - Copied from Index.jsx */}
            <footer className="footer-section py-5 bg-footer position-relative z-2">
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

export default Login;
