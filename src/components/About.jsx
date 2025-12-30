import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/style/style.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const teamMembers = [
        { name: 'Jigar Patel', role: 'Founder', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop' },
        { name: 'Sarah Lee', role: 'Flavor Arch.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop' },
        { name: 'Mike Brown', role: 'Ops Wizard', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop' },
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
                            <li className="nav-item"><Link className="nav-link active" to="/about">Our Story</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ height: '76px', backgroundColor: '#2c3e50' }}></div>

            {/* Bento Grid Section */}
            <section className="about-bento py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h1 className="fw-bold display-4">Inside the Scoop</h1>
                        <p className="lead text-muted">Discover the world of Jigar Icecream through our bento story.</p>
                    </div>

                    <div className="bento-grid">
                        {/* 1. Main Story Tile (Large) */}
                        <div className="bento-tile tile-large tile-bg-img"
                            style={{ backgroundImage: 'url(https://thumbs.dreamstime.com/b/various-varieties-ice-cream-cones-various-varieties-ice-cream-cones-mint-blueberry-strawberry-pistachio-cherry-158155767.jpg)' }}
                            data-aos="fade-right">
                            <div className="tile-overlay">
                                <h2 className="display-4 fw-bold">Our Sweet Beginnings</h2>
                                <p className="fs-5">It all started in a small kitchen with a big dream: to create the perfect scoop. From Jigar's first experiment in 2020 to melting hearts worldwide today.</p>
                            </div>
                        </div>

                        {/* 2. Video Tile (Wide) */}
                        <div className="bento-tile tile-wide bg-dark text-white" data-aos="fade-left">
                            <div className="ratio ratio-16x9 h-100">
                                <iframe
                                    src="https://www.youtube.com/embed/Jx7N5Svuw9I?si=1WmegsbjyWyjt3GQ"
                                    title="Making Ice Cream"
                                    allowFullScreen
                                    style={{ border: 'none' }}
                                ></iframe>
                            </div>
                        </div>

                        {/* 3. Stat Tile 1 */}
                        <div className="bento-tile bg-white d-flex align-items-center justify-content-center text-center p-4" data-aos="zoom-in">
                            <div>
                                <h3 className="display-4 fw-bold text-primary">50+</h3>
                                <p className="text-muted text-uppercase fw-bold ls-1">Unique Flavors</p>
                            </div>
                        </div>

                        {/* 4. Stat Tile 2 */}
                        <div className="bento-tile bg-white d-flex align-items-center justify-content-center text-center p-4" data-aos="zoom-in" data-aos-delay="100">
                            <div>
                                <h3 className="display-4 fw-bold text-danger">10k+</h3>
                                <p className="text-muted text-uppercase fw-bold ls-1">Happy Customers</p>
                            </div>
                        </div>

                        {/* 5. Values Tile (Tall) */}
                        <div className="bento-tile tile-tall bg-info text-white tile-content" data-aos="fade-up">
                            <h3>Core Values</h3>
                            <ul className="list-unstyled mt-3 fs-5">
                                <li className="mb-3">🍦 <strong>Quality First:</strong> Only the finest ingredients.</li>
                                <li className="mb-3">❤️ <strong>Made with Love:</strong> Handcrafted daily.</li>
                                <li className="mb-3">🌍 <strong>Sustainable:</strong> Eco-friendly packaging.</li>
                                <li className="mb-3">🤝 <strong>Community:</strong> Giving back to locals.</li>
                            </ul>
                        </div>

                        {/* 6. Team Tile (Large) */}
                        <div className="bento-tile tile-wide bg-white tile-content" data-aos="fade-up">
                            <h3 className="mb-4">Meet the Scoop Squad</h3>
                            <div className="d-flex justify-content-around align-items-center flex-wrap">
                                {teamMembers.map((member, index) => (
                                    <div className="text-center mx-2" key={index}>
                                        <img src={member.img} alt={member.name} className="rounded-circle mb-2" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                                        <h6 className="fw-bold mb-0">{member.name}</h6>
                                        <small className="text-muted">{member.role}</small>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 7. Franchise Link (Small) */}
                        <div className="bento-tile bg-warning text-dark d-flex align-items-center justify-content-center text-center p-4" data-aos="zoom-in">
                            <Link to="/contact" className="text-decoration-none text-dark">
                                <h4 className="fw-bold">Join Us</h4>
                                <p className="mb-0">Start a franchise <i className="bi bi-arrow-right"></i></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Copied from Index.jsx */}
            <footer id="contact" className="footer-section py-5">
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

export default About;
