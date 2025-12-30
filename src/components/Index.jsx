import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/style/style.css';
import heroImg from '../assets/images/hero.png';
import IceCreamScene from './IceCreamScene';

const Index = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const flavors = [
        { title: 'Velvet Vanilla', desc: 'Classic creamy perfection.', color: '#f3e5ab', img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop', price: 199 },
        { title: 'Midnight Chocolate', desc: 'Rich, dark, and decadent.', color: '#5c3a2e', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop', price: 249 },
        { title: 'Strawberry Dream', desc: 'Fresh strawberries in every bite.', color: '#ffc1cc', img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop', price: 229 },
        { title: 'Minty Magic', desc: 'Cool mint with chocolate chips.', color: '#98ff98', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuZPQ6LSjWCrndrqgQnNbGamOCLXUWxMo-A&s', price: 219 },
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
                            <li className="nav-item"><Link className="nav-link" to="/about">Our Story</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero-section parallax-window" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="overlay"></div>
                <div className="hero-content text-center" data-aos="zoom-in" data-aos-duration="1500">
                    <h1 className="hero-title text-3d">Scoops of Happiness</h1>
                    <p className="hero-subtitle">Premium Handcrafted Ice Cream</p>
                    <Link to="/flavors" className="btn btn-custom btn-lg mt-4 floating-btn">Taste the Magic</Link>
                </div>
            </section>

            {/* Intro Section - Parallax/3D */}
            <div className="section-spacer"></div>

            {/* Flavors Section */}
            <section id="flavors" className="flavors-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5" data-aos="fade-up">Popular Flavors</h2>
                    <div className="row g-4">
                        {flavors.map((flavor, index) => (
                            <div className="col-md-6 col-lg-3" key={index} data-aos="flip-left" data-aos-delay={index * 100}>
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

            {/* About Section - Parallax */}
            <section id="about" className="about-section parallax-window-small py-5">
                <div className="container">
                    <div className="row align-items-center glass-panel p-5" data-aos="fade-right">
                        <div className="col-lg-6">
                            <h2 className="mb-4">Our Sweet Journey</h2>
                            <p>
                                At Jigar Icecream, we believe in the power of natural ingredients.
                                Started in a small kitchen, our passion for creating the perfect scoop
                                has grown into a love affair with flavor. We use only the freshest
                                milk, real fruits, and premium chocolates to craft our signature tastes.
                            </p>
                            <p>Every batch is churned with love and frozen to perfection.</p>
                        </div>
                        <div className="col-lg-6 text-center">
                            {/* Optional 3D element or additional image could go here */}
                            <div className="floating-cone">🍦</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Icons */}
            <section className="why-choose-us py-5 bg-white">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mb-4" data-aos="fade-up">
                            <div className="icon-box mb-3">
                                <i className="bi bi-award-fill text-primary" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4>Premium Quality</h4>
                            <p className="text-muted">Sourced from the finest local farms.</p>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-box mb-3">
                                <i className="bi bi-heart-fill text-danger" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4>Made with Love</h4>
                            <p className="text-muted">Handcrafted in small batches daily.</p>
                        </div>
                        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box mb-3">
                                <i className="bi bi-truck text-success" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4>Fast Delivery</h4>
                            <p className="text-muted">From our freezer to your doorstep.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center mb-5">What People Say</h2>
                    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" className="rounded-circle mb-3" alt="User" width="80" />
                                <blockquote className="blockquote">
                                    <p className="mb-0">"The best chocolate ice cream I've ever tasted! Absolutely divine."</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mt-2">
                                    John Doe <cite title="Source Title">Ice Cream Lover</cite>
                                </figcaption>
                            </div>
                            <div className="carousel-item text-center">
                                <img src="https://ui-avatars.com/api/?name=Jane+Smith&background=random" className="rounded-circle mb-3" alt="User" width="80" />
                                <blockquote className="blockquote">
                                    <p className="mb-0">"Jigar Icecream's mint flavor is refreshing and unique. Highly recommended!"</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mt-2">
                                    Jane Smith <cite title="Source Title">Food Blogger</cite>
                                </figcaption>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>


            {/* 3D Interactive Experience */}
            <section className="three-d-experience py-5 position-relative">
                <div className="container-fluid p-0">
                    <div className="text-center mb-4">
                        <h2 className="section-title" data-aos="fade-down">Experience the Magic</h2>
                        <p className="text-muted">Interact with our floating flavors!</p>
                    </div>
                    <IceCreamScene />
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section py-5 bg-dark text-white parallax-window" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=2544&auto=format&fit=crop)' }}>
                <div className="overlay"></div>
                <div className="container position-relative z-2">
                    <div className="row text-center">
                        <div className="col-md-3 mb-4" data-aos="zoom-in">
                            <h2 className="display-4 fw-bold text-primary">50+</h2>
                            <p className="text-dark">Unique Flavors</p>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="100">
                            <h2 className="display-4 fw-bold text-danger">10k+</h2>
                            <p className="text-dark">Happy Customers</p>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="200">
                            <h2 className="display-4 fw-bold text-success">5</h2>
                            <p className="text-dark">Awards Won</p>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="zoom-in" data-aos-delay="300">
                            <h2 className="display-4 fw-bold text-warning">2025</h2>
                            <p className="text-dark">Year Established</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5" data-aos="fade-up">Sweet Moments</h2>
                    <div className="row g-2">
                        <div className="col-md-4 col-6" data-aos="fade-right">
                            <img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop" className="img-fluid rounded shadow hover-zoom" alt="Gallery 1" />
                        </div>
                        <div className="col-md-4 col-6" data-aos="fade-up">
                            <img src="https://w0.peakpx.com/wallpaper/702/688/HD-wallpaper-ice-cream-background-beautiful-best-available-for-ice-cream.jpg" className="img-fluid rounded shadow hover-zoom" alt="Gallery 2" />
                        </div>
                        <div className="col-md-4 col-12" data-aos="fade-left">
                            <img src="https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?cs=srgb&dl=pexels-jeshoots-3631.jpg&fm=jpg" className="img-fluid rounded shadow hover-zoom" alt="Gallery 3" />
                        </div>
                        <div className="col-md-6 col-6" data-aos="fade-up">
                            <img src="https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&auto=format&fit=crop" className="img-fluid rounded shadow hover-zoom" alt="Gallery 4" />
                        </div>
                        <div className="col-md-6 col-6" data-aos="fade-up">
                            <img src="https://wallpapercave.com/wp/wp12560287.jpg" className="img-fluid rounded shadow hover-zoom" alt="Gallery 5" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter py-5 text-center text-white" style={{ background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)' }}>
                <div className="container" data-aos="zoom-in">
                    <h2 className="mb-3">Join Our Sweet Community</h2>
                    <p className="mb-4">Subscribe to get the latest flavor updates and exclusive offers!</p>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form className="d-flex">
                                <input className="form-control me-2" type="email" placeholder="Your Email Address" aria-label="Email" />
                                <button className="btn btn-dark" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="footer-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-4" data-aos="fade-up">
                            <h4 className="footer-brand">Jigar Icecream</h4>
                            <p>Melting hearts since 2025. Experience the best quality ice cream made with passion.</p>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <h5>Quick Links</h5>
                            <ul className="footer-links list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/flavors">Menu</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/franchise">Franchise</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <h5>Business Hours</h5>
                            <ul className="list-unstyled text-muted-custom">
                                <li>Mon - Fri: 10:00 AM - 10:00 PM</li>
                                <li>Sat - Sun: 09:00 AM - 11:00 PM</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
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

export default Index;
