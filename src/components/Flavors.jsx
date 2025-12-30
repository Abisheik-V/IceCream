import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/style/style.css';

const Flavors = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const allFlavors = [
        { title: 'Velvet Vanilla', desc: 'Classic creamy perfection.', color: '#f3e5ab', img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop', price: 199 },
        { title: 'Midnight Chocolate', desc: 'Rich, dark, and decadent.', color: '#5c3a2e', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop', price: 249 },
        { title: 'Strawberry Dream', desc: 'Fresh strawberries in every bite.', color: '#ffc1cc', img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop', price: 229 },
        { title: 'Minty Magic', desc: 'Cool mint with chocolate chips.', color: '#98ff98', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuZPQ6LSjWCrndrqgQnNbGamOCLXUWxMo-A&s', price: 219 },
        { title: 'Blueberry Bliss', desc: 'Bursting with real blueberries.', color: '#a29bfe', img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=500&auto=format&fit=crop', price: 239 },
        { title: 'Cookie Crumble', desc: 'Vanilla with crunchy cookie bits.', color: '#dfe6e9', img: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?w=500&auto=format&fit=crop', price: 209 },
        { title: 'Mango Tango', desc: 'Tropical mango madness.', color: '#ffeaa7', img: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop', price: 259 },
        { title: 'Pistachio Power', desc: 'Nutty and nice.', color: '#55efc4', img: 'https://www.pocketfriendlyrecipes.com/wp-content/uploads/2025/05/Pistachio-Ice-Cream-19.jpg', price: 269 },
        { title: 'Caramel Crunch', desc: 'Salted caramel with toffee.', color: '#fab1a0', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn9FwjA673vtBV8e8HLS65L5t-q73TSdqK2g&s', price: 229 },
        { title: 'Coffee Kick', desc: 'For the coffee lovers.', color: '#b2bec3', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&auto=format&fit=crop', price: 199 },
        { title: 'Raspberry Ripple', desc: 'Tangy and sweet.', color: '#fd79a8', img: 'https://images.unsplash.com/photo-1626263468007-a9e0cf83f1ac?w=500&auto=format&fit=crop', price: 219 },
        { title: 'Lemon Zest', desc: 'Refreshing citrus burst.', color: '#fdcb6e', img: 'https://www.occasionallyeggs.com/wp-content/uploads/2021/03/Lemon-Ice-Cream-13.jpg', price: 189 },
    ];

    return (
        <div className="ice-cream-app">
            {/* Navbar - Copied from Index.jsx */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
                <div className="container">
                    <Link className="navbar-brand jigar-brand" to="/">Jigar Icecream</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/flavors">Flavors</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Spacer for fixed navbar */}
            <div style={{ height: '100px', backgroundColor: '#fdf5e6' }}></div>

            {/* All Flavors Section */}
            <section className="flavors-page-section py-5">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-down">
                        <h1 className="section-title display-4">All Stories of Flavor</h1>
                        <p className="lead text-muted">Explore our complete collection of handcrafted happiness.</p>
                    </div>

                    <div className="row g-4">
                        {allFlavors.map((flavor, index) => (
                            <div className="col-md-6 col-lg-3" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                                <div className="flavor-card box-3d" style={{ '--card-color': flavor.color }}>
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <img src={flavor.img} alt={flavor.title} className="img-fluid rounded-circle mb-3 shadow" style={{ width: '150px', height: '150px', objectFit: 'cover', border: '4px solid white' }} />
                                            <h3>{flavor.title}</h3>
                                        </div>
                                        <div className="card-back">
                                            <p>{flavor.desc}</p>
                                            <Link to="/order-now" state={{ product: flavor }} className="btn btn-sm btn-light">Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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

export default Flavors;
