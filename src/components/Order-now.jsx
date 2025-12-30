import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.css';
import heroImg from '../assets/images/hero.png';

const OrderNow = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedProduct, setSelectedProduct] = useState(location.state?.product || null);
    const [quantity, setQuantity] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [loading, setLoading] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        // Scroll to top when product is selected
        if (selectedProduct) {
            window.scrollTo(0, 0);
        }
    }, [selectedProduct]);

    const handleBackToMenu = () => {
        setSelectedProduct(null);
        navigate('/order-now', { state: null });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment processing
        setTimeout(() => {
            setLoading(false);
            setOrderPlaced(true);
        }, 2500);
    };

    // If order is placed successfully
    if (orderPlaced) {
        return (
            <div className="order-success-screen d-flex align-items-center justify-content-center flex-column" style={{ minHeight: '100vh', background: '#fdf5e6' }}>
                <div className="text-center p-5 bg-white rounded-4 shadow" data-aos="zoom-in">
                    <div className="mb-4 text-success display-1"><i className="bi bi-check-circle-fill"></i></div>
                    <h2 className="mb-3">Order Placed Successfully!</h2>
                    <p className="lead mb-4">Your delicious <strong>{selectedProduct.title}</strong> is on its way.</p>
                    <p className="text-muted">Order ID: #{Math.floor(Math.random() * 1000000)}</p>
                    <button onClick={() => navigate('/')} className="btn btn-custom btn-lg mt-3">Back to Home</button>
                </div>
            </div>
        );
    }

    // Default Menu View (If no product selected)
    if (!selectedProduct) {
        // ... (reuse the previous menu implementation here or render a simplified version)
        // For brevity and focus, I'll redirect to Flavors page if they land here directly, or show a simple instruction.
        // Actually, let's keep the menu we built previously but link it to this state logic.

        const products = [
            { id: 1, title: 'Velvet Vanilla', category: 'Classics', price: 199, img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop', color: '#f3e5ab' },
            { id: 2, title: 'Midnight Chocolate', category: 'Classics', price: 249, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop', color: '#5c3a2e' },
            { id: 3, title: 'Strawberry Dream', category: 'Classics', price: 229, img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop', color: '#ffc1cc' },
            { id: 4, title: 'Minty Magic', category: 'Exotic', price: 219, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvuZPQ6LSjWCrndrqgQnNbGamOCLXUWxMo-A&s', color: '#98ff98' },
        ];

        return (
            <div className="order-now-page">
                {/* Simplified Navbar */}
                <nav className="navbar navbar-dark bg-dark fixed-top"><div className="container"><Link className="navbar-brand" to="/">Jigar Icecream</Link></div></nav>
                <div style={{ height: '80px' }}></div>

                <div className="container py-5 text-center">
                    <h2 className="mb-4">Select a Flavor to Order</h2>
                    <div className="row g-4 justify-content-center">
                        {products.map(p => (
                            <div className="col-md-6 col-lg-3" key={p.id}>
                                <div className="card h-100 shadow border-0" onClick={() => setSelectedProduct(p)} style={{ cursor: 'pointer' }}>
                                    <img src={p.img} className="card-img-top" alt={p.title} style={{ height: '200px', objectFit: 'cover' }} />
                                    <div className="card-body">
                                        <h5>{p.title}</h5>
                                        <p className="text-primary fw-bold">₹{p.price}</p>
                                        <button className="btn btn-outline-dark btn-sm">Select</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Checkout View
    return (
        <div className="checkout-page" style={{ background: '#f8f9fa', minHeight: '100vh', overflowX: 'hidden' }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Jigar Icecream</Link>
                    <Link to="/" className="btn btn-sm btn-outline-light ms-auto" onClick={handleBackToMenu}>Back to Menu</Link>
                </div>
            </nav>

            <div className="container" style={{ marginTop: '100px', paddingBottom: '50px' }}>
                <div className="row g-3 g-lg-5">
                    {/* Left Column: Product Details */}
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <div className="sticky-top" style={{ top: '100px' }}>
                            <div className="card shadow-sm border-0 rounded-4 overflow-hidden mb-4">
                                <img src={selectedProduct.img} alt={selectedProduct.title} className="w-100" style={{ height: '300px', objectFit: 'cover' }} />
                                <div className="card-body p-4 bg-white">
                                    <h3 className="card-title fw-bold">{selectedProduct.title}</h3>
                                    <p className="text-muted">{selectedProduct.desc || 'Premium handcrafted ice cream.'}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3 border-top pt-3">
                                        <span className="fs-5">Price</span>
                                        <span className="fs-4 fw-bold text-primary">₹{selectedProduct.price}</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <span className="fs-5">Quantity</span>
                                        <div className="input-group" style={{ width: '120px' }}>
                                            <button className="btn btn-outline-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                            <input type="text" className="form-control text-center" value={quantity} readOnly />
                                            <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top bg-light p-3 rounded">
                                        <span className="fs-4 fw-bold">Total</span>
                                        <span className="fs-3 fw-bold text-success">₹{selectedProduct.price * quantity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Form */}
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing & Delivery Details</h4>
                        <form className="needs-validation" onSubmit={handlePlaceOrder}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control" required placeholder="John" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control" required placeholder="Doe" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Mobile Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text">+91</span>
                                        <input type="tel" className="form-control" required placeholder="9876543210" pattern="[0-9]{10}" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" placeholder="you@example.com" />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" required placeholder="1234 Main St" />
                                </div>
                                <div className="col-md-5">
                                    <label className="form-label">City</label>
                                    <select className="form-select" required>
                                        <option value="">Choose...</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Bangalore</option>
                                        <option>Ahmedabad</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Zip</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>
                            <div className="my-3">
                                <div className="form-check">
                                    <input id="upi" name="paymentMethod" type="radio" className="form-check-input" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} required />
                                    <label className="form-check-label" htmlFor="upi">UPI <span className="badge bg-success ms-2">Fastest</span></label>
                                </div>
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} required />
                                    <label className="form-check-label" htmlFor="credit">Credit/Debit Card</label>
                                </div>
                                <div className="form-check">
                                    <input id="cod" name="paymentMethod" type="radio" className="form-check-input" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} required />
                                    <label className="form-check-label" htmlFor="cod">Cash on Delivery</label>
                                </div>
                            </div>

                            {/* Payment Logic UI */}
                            {paymentMethod === 'upi' && (
                                <div className="card p-3 mb-3 bg-light border-0">
                                    <div className="text-center">
                                        <p className="mb-2 fw-bold">Scan to Pay ₹{selectedProduct.price * quantity}</p>
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=jigar@icecream&pn=JigarIcecream&am=199" alt="UPI QR" className="img-fluid border p-2 bg-white rounded" />
                                        <p className="small text-muted mt-2">Open any UPI app to scan and pay</p>
                                    </div>
                                </div>
                            )}

                            {paymentMethod === 'card' && (
                                <div className="row gy-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Name on card</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Credit card number</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">Expiration</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label">CVV</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                            )}

                            <hr className="my-4" />

                            <button className="w-100 btn btn-custom btn-lg" type="submit" disabled={loading}>
                                {loading ? (
                                    <span><span className="spinner-border spinner-border-sm me-2"></span>Processing Payment...</span>
                                ) : (
                                    `Pay ₹${selectedProduct.price * quantity}`
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Loading Overlay */}
            {loading && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75" style={{ zIndex: 2000 }}>
                    <div className="text-center">
                        <div className="spinner-grow text-primary" role="status"></div>
                        <div className="spinner-grow text-danger mx-2" role="status"></div>
                        <div className="spinner-grow text-warning" role="status"></div>
                        <h4 className="mt-3">Confirming Payment...</h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderNow;
