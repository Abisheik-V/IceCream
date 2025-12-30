import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/style/style.css';

const Franchise = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const features = [
        {
            icon: 'bi-aspect-ratio',
            title: 'Centralized Control',
            desc: 'Maintain brand consistency while adapting to local markets. Our platform allows global updates with local flexibility.'
        },
        {
            icon: 'bi-phone',
            title: 'Mobile-First Design',
            desc: 'Capture the 70% of local searches happening on mobile. Our site is optimized for every device, everywhere.'
        },
        {
            icon: 'bi-graph-up-arrow',
            title: 'Robust Analytics',
            desc: 'Data-driven decisions made easy. Track KPIs from corporate down to the individual store level.'
        },
        {
            icon: 'bi-bricks',
            title: 'Modular Scalability',
            desc: 'Grow without growing pains. Our architecture is built to add new locations and features effortlessly.'
        }
    ];

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
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ height: '76px', backgroundColor: '#2c3e50' }}></div>

            {/* Hero Section */}
            <section className="franchise-hero parallax-window">
                <div className="container position-relative z-2" data-aos="fade-up">
                    <h1 className="display-3 fw-bold mb-3">Build Your Legacy</h1>
                    <p className="lead fs-3 mb-5 text-light">Join the fastest growing premium ice cream network.</p>
                    <Link to="/contact" className="btn btn-custom btn-lg rounded-pill shadow-lg px-5">Request Consultation</Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-5 bg-light">
                <div className="container py-4">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h2 className="section-title">The Jigar Advantage</h2>
                        <p className="lead text-muted">Why our franchise model is built for success</p>
                    </div>
                    <div className="row g-4">
                        {features.map((feature, index) => (
                            <div className="col-md-6 col-lg-3" key={index} data-aos="flip-up" data-aos-delay={index * 100}>
                                <div className="feature-card text-center">
                                    <div className="feature-icon">
                                        <i className={`bi ${feature.icon}`}></i>
                                    </div>
                                    <h4 className="fw-bold mb-3">{feature.title}</h4>
                                    <p className="text-muted">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-5">
                <div className="container py-4">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Steps to Ownership</h2>
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-md-4" data-aos="fade-right">
                            <div className="step-card">
                                <div className="step-number">1</div>
                                <h4>Apply</h4>
                                <p className="text-muted">Submit your application and financial qualifications.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="step-card">
                                <div className="step-number">2</div>
                                <h4>Connect</h4>
                                <p className="text-muted">Meet our team and discover our culture.</p>
                            </div>
                        </div>
                        <div className="col-md-4" data-aos="fade-left">
                            <div className="step-card">
                                <div className="step-number">3</div>
                                <h4>Launch</h4>
                                <p className="text-muted">Secure your location and start training!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-5 text-center">
                <div className="container position-relative z-2">
                    <h2 className="display-4 fw-bold mb-4" data-aos="zoom-in">Ready to Scoop?</h2>
                    <p className="lead mb-4">Taking the first step is easy. Let's build something sweet together.</p>
                    <Link to="/contact" className="btn btn-light btn-lg rounded-pill px-5 shadow-lg text-dark fw-bold" data-aos="zoom-in" data-aos-delay="200">
                        Apply to Franchise
                    </Link>
                </div>
            </section>

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

export default Franchise;
