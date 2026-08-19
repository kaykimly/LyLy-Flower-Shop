import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { flowers as initialFlowers } from './flowers';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function Home() {
  return (
    <div className="bg-white">
      {/* Edge-to-Edge Pink Background Wrapper */}
      <div className="w-full bg-pink-50/60">
        <div className="max-w-7xl mx-auto px-8 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 text-left z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              LyLy Flower Shop
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-500 mb-6">
              Natural & Beautiful Flowers
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              Flowers Speak When Words Fall Short. Through Every Petal And Every Bouquet, We Help You Share Beauty, Kindness, And Heartfelt Emotions With Those You Cherish.
            </p>
            <Link 
              to="/shop" 
              className="bg-gray-900 text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:bg-black active:bg-pink-600 transition inline-block"
            >
              Shop Now
            </Link>
          </div>

          <div className="md:w-1/2 w-full flex justify-end">
            <img 
              src="/home-bg.jpg" 
              alt="LyLy Flower Shop Tulips" 
              className="w-full max-w-xl h-auto rounded-3xl shadow-xl object-cover"
            />
          </div>
          
        </div>
      </div>

      {/* 4 Feature Boxes with Local Image Icons */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <img src="/icon-1.png" alt="Free Delivery" className="w-12 h-12 object-contain" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Free Delivery</h4>
            <p className="text-gray-500 text-xs">On All Orders</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <img src="/icon-2.png" alt="10 Days Returns" className="w-12 h-12 object-contain" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">10 Days Returns</h4>
            <p className="text-gray-500 text-xs">Moneyback Guarantee</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <img src="/icon-3.png" alt="Offer & Gifts" className="w-12 h-12 object-contain" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Offer & Gifts</h4>
            <p className="text-gray-500 text-xs">On All Orders</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
          <img src="/icon-4.png" alt="Secure Payments" className="w-12 h-12 object-contain" />
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Secure Payments</h4>
            <p className="text-gray-500 text-xs">Protected By Paypal</p>
          </div>
        </div>
      </div>

      {/* 3 Circular Category Highlights */}
      <div className="max-w-7xl mx-auto px-8 py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md border-4 border-pink-100 mb-4">
              <img src="/HOME1.jpg" alt="Bright Bloom" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Bright Bloom</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md border-4 border-pink-100 mb-4">
              <img src="/HOME2.jpg" alt="Soft Petals" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Soft Petals</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-md border-4 border-pink-100 mb-4">
              <img src="/HOME3.jpg" alt="Fragrant Vases" className="w-full h-full object-cover hover:scale-105 transition duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Fragrant Vases</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full bg-pink-50/70 py-12 mb-16 text-center border-b border-pink-100/60">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          About <span className="text-pink-600">Us</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">Learn more about our journey and passion for flowers</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          
          <div className="md:w-1/2 space-y-6 w-full">
            <div className="p-3 bg-pink-50/50 rounded-3xl border-2 border-pink-100 shadow-xl overflow-hidden group">
              <div className="overflow-hidden rounded-2xl aspect-video bg-gray-900 shadow-inner">
                <video 
                  src="/video-about.MP4" 
                  controls 
                  autoPlay 
                  loop 
                  muted 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            <div className="text-center py-3 bg-pink-50/70 rounded-2xl border border-pink-200 shadow-sm">
              <h3 className="text-base font-extrabold text-pink-600 uppercase tracking-wider">Best Flowers Sellers</h3>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6 text-left">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              We Carefully Select The Freshest Blooms And Transform Them Into Elegant Arrangements That Inspire Joy, Strengthen Connections, And Create Unforgettable Memories. Our Commitment Is Not Only To Beautiful Flowers But Also To The Emotions They Carry And The Stories They Tell.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              Every Season Brings New Colors, Fragrances, And Blooms. We Carefully Select The Finest Flowers To Share Their Natural Beauty With You.
            </p>
            <Link 
              to="/shop" 
              className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-black active:bg-pink-600 transition shadow"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>

      <div className="bg-gray-50 py-12 border-y border-gray-100 mb-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-3xl font-extrabold text-pink-600 mb-1">1500+</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Bouquets Delivered</p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-pink-600 mb-1">1200+</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Happy Customers</p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-pink-600 mb-1">10+</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-extrabold text-pink-600 mb-1">100%</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Natural & Fresh</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-28">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          
          <div className="md:w-1/2 space-y-6 text-left">
            <h2 className="text-3xl font-bold text-gray-900">Our Floral Journey</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              What Started As A Small, Passionate Dream Has Bloomed Into A Dedicated Sanctuary For Flower Lovers. We Partner Directly With Sustainable, Local Growers To Ensure That Every Stem Cut Is Handled With Ultimate Care And Premium Freshness.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm">
              From Custom Hand-Tied Bridal Bouquets To Corporate Events, Our Florists Put Love And Meticulous Artistry Into Every Single Petal We Arrange For You.
            </p>
            <Link 
              to="/shop" 
              className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-black active:bg-pink-600 transition shadow"
            >
              Our Collection
            </Link>
          </div>

          <div className="md:w-1/2 space-y-6 w-full">
            <div className="p-3 bg-pink-50/50 rounded-3xl border-2 border-pink-100 shadow-xl overflow-hidden group">
              <div className="overflow-hidden rounded-2xl aspect-video bg-gray-900 shadow-inner">
                <video 
                  src="/video-about2.MP4" 
                  controls 
                  autoPlay 
                  loop 
                  muted 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
            <div className="text-center py-3 bg-pink-50/70 rounded-2xl border border-pink-200 shadow-sm">
              <h3 className="text-base font-extrabold text-pink-600 uppercase tracking-wider">Crafted With Love</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Shop({ flowers, addToCart, wishlist, toggleWishlist }) {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full bg-pink-50/70 py-12 mb-16 text-center border-b border-pink-100/60">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Latest <span className="text-pink-600">Products</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">Check out our newest seasonal arrangements and deals.</p>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 pb-24">
        {flowers.length === 0 ? (
          <div className="text-center py-16 text-gray-500">No products available right now. Visit the Admin dashboard to add some!</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flowers.map((flower) => {
              const isWishlisted = wishlist.some(item => item.id === flower.id);
              return (
                <div key={flower.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col justify-between relative">
                  
                  {flower.discount && (
                    <span className="absolute top-4 left-4 z-10 bg-pink-100 text-pink-600 font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                      {flower.discount}
                    </span>
                  )}

                  <button 
                    onClick={() => toggleWishlist(flower)}
                    className={`absolute top-4 right-4 z-10 p-2.5 rounded-full shadow-md transition ${isWishlisted ? 'bg-pink-600 text-white' : 'bg-white/90 text-gray-600 hover:text-pink-600'}`}
                    title="Save to Favorites"
                  >
                    ♥
                  </button>

                  <div>
                    <div className="overflow-hidden h-56 bg-gray-100 relative">
                      <img 
                        src={flower.image} 
                        alt={flower.name} 
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-pink-600 font-bold uppercase tracking-wider">{flower.category}</span>
                      <h3 className="text-xl font-bold text-gray-800 mt-1">{flower.name}</h3>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">{flower.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-50 mt-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-black text-gray-900">${flower.price.toFixed(2)}</span>
                      {flower.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">${flower.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => addToCart(flower)}
                      className="bg-pink-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-700 active:bg-pink-800 transition shadow-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ 
        name: name || email.split('@')[0], 
        email, 
        phone: phone || "+855 98-817-826", 
        address: address || "Prek Pnov, Phnom Penh" 
      });
      navigate("/account");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">👤</div>
          <h2 className="text-2xl font-bold text-gray-900">Create Account or Sign In</h2>
          <p className="text-gray-500 text-sm mt-1">Enter your details to access your profile</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
            <input 
              type="text" 
              placeholder="Ly Ly" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="kaykimly1207@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
            <input 
              type="text" 
              placeholder="+855 98-817-826" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Delivery Address</label>
            <input 
              type="text" 
              placeholder="Prek Pnov, Phnom Penh" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-3.5 rounded-xl hover:bg-pink-700 transition shadow-md text-sm mt-2"
          >
            Save & Continue
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-500 hover:text-pink-600 transition">&larr; Back to Shop</Link>
        </div>
      </div>
    </div>
  );
}

function Account({ user, onLogout }) {
  const displayUser = user || {
    name: "Kaykimly1207",
    email: "kaykimly1207@gmail.com",
    phone: "+855 98-817-826",
    address: "Prek Pnov, Phnom Penh"
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 min-h-screen">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6 relative">
        
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-gray-100 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-2xl uppercase shadow-sm">
              {displayUser.name.slice(0, 2)}
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-lg">{displayUser.name}</h3>
              <p className="text-gray-500 text-sm">{displayUser.email}</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="bg-red-50 text-red-600 px-5 py-2 rounded-xl text-xs font-semibold hover:bg-red-500 hover:text-white transition shadow-sm"
          >
            Sign Out
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Phone Number</span>
            <span className="font-extrabold text-gray-900 text-base">{displayUser.phone}</span>
          </div>
          <div className="p-5 bg-gray-50/80 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider mb-1">Default Delivery Address</span>
            <span className="font-extrabold text-gray-900 text-base">{displayUser.address}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-700">Need to manage store products?</span>
          <Link to="/admin" className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-xs font-semibold hover:bg-pink-600 transition shadow-sm">
            Go to Admin Dashboard &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

function Orders({ orders }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 min-h-screen">
      <div className="bg-pink-50/70 py-10 rounded-3xl mb-8 text-center border border-pink-100">
        <h1 className="text-3xl font-extrabold text-gray-900">My <span className="text-pink-600">Orders</span></h1>
        <p className="text-gray-500 text-sm mt-2">Track your past and active flower deliveries</p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-lg mb-4">You haven't placed any orders yet.</p>
          <Link to="/shop" className="text-pink-600 font-semibold hover:underline">Start Shopping &rarr;</Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Order #{order.id}</span>
                <h4 className="font-bold text-gray-800 text-lg mt-1">{order.items.length} Item(s)</h4>
                <p className="text-gray-500 text-xs mt-1">Placed on: {order.date}</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-gray-900">${order.total.toFixed(2)}</span>
                <div className="mt-1">
                  <span className="bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">Delivered</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Favorites({ wishlist, toggleWishlist, addToCart }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-screen">
      <div className="bg-pink-50/70 py-10 rounded-3xl mb-12 text-center border border-pink-100">
        <h1 className="text-3xl font-extrabold text-gray-900">My <span className="text-pink-600">Favorites</span></h1>
        <p className="text-gray-500 text-sm mt-2">All your saved flower arrangements in one place</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-lg mb-4">Your favorites list is empty.</p>
          <Link to="/shop" className="text-pink-600 font-semibold hover:underline">Browse Products &rarr;</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wishlist.map((flower) => (
            <div key={flower.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col justify-between relative">
              <button 
                onClick={() => toggleWishlist(flower)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-pink-600 text-white shadow-md"
                title="Remove from Favorites"
              >
                ♥
              </button>
              <div>
                <div className="overflow-hidden h-56 bg-gray-100 relative">
                  <img src={flower.image} alt={flower.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-pink-600 font-bold uppercase tracking-wider">{flower.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">{flower.name}</h3>
                  <p className="text-gray-500 text-sm mt-2">{flower.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-50 mt-4">
                <span className="text-2xl font-black text-gray-900">${flower.price.toFixed(2)}</span>
                <button 
                  onClick={() => addToCart(flower)}
                  className="bg-pink-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-pink-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Admin({ flowers, setFlowers }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Bright Bloom");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("/image/HOME1.jpg");

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password!");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const newFlower = {
      id: Date.now(),
      name,
      category,
      price: parseFloat(price),
      description: description || "Fresh seasonal arrangement.",
      image: image
    };

    setFlowers([newFlower, ...flowers]);
    setName("");
    setPrice("");
    setDescription("");
    setImage("/image/HOME1.jpg");
    alert("Product added successfully!");
  };

  const handleDelete = (id) => {
    setFlowers(flowers.filter(f => f.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-200 text-center">
          <div className="text-4xl mb-4">🔐</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Dashboard Login</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your password to manage products.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter password..." 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-center tracking-widest text-lg"
            />
            <button 
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-3.5 rounded-xl hover:bg-pink-600 transition shadow-md"
            >
              Login
            </button>
          </form>
          <div className="mt-6">
            <Link to="/account" className="text-sm text-gray-500 hover:text-pink-600 transition">&larr; Back to Account</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between p-6">
        <div>
          <div className="text-2xl font-black text-gray-900 tracking-tight mb-10">
            Flower<span className="text-pink-600">.</span> <span className="text-xs font-semibold uppercase bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full ml-1">Admin</span>
          </div>
          <nav className="space-y-2">
            <Link to="/admin" className="flex items-center space-x-3 px-4 py-3 bg-pink-50 text-pink-600 rounded-xl font-semibold">
              <span>📊</span>
              <span>Dashboard</span>
            </Link>
            <Link to="/shop" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition">
              <span>🌸</span>
              <span>View Store</span>
            </Link>
          </nav>
        </div>
        <div>
          <button onClick={() => setIsAuthenticated(false)} className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition text-left">
            <span>🚪</span>
            <span>Lock Admin</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Product Management</h1>
            <p className="text-gray-500 text-sm mt-1">Control inventory, upload flower images, or remove outdated stock.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/account" className="bg-gray-900 text-white px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-pink-600 transition">
              Back to Account
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
            <div className="p-4 bg-pink-50 text-pink-600 rounded-2xl text-xl font-bold">📦</div>
            <div>
              <p className="text-gray-500 text-xs uppercase font-semibold">Total Products</p>
              <h3 className="text-2xl font-black text-gray-900">{flowers.length}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
            <div className="p-4 bg-green-50 text-green-600 rounded-2xl text-xl font-bold">⭐</div>
            <div>
              <p className="text-gray-500 text-xs uppercase font-semibold">Shop Status</p>
              <h3 className="text-2xl font-black text-green-600">Active</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl text-xl font-bold">🔒</div>
            <div>
              <p className="text-gray-500 text-xs uppercase font-semibold">Security</p>
              <h3 className="text-2xl font-black text-gray-900">Protected</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Flower Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Pink Tulip Bouquet" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
                >
                  <option value="Bright Bloom">Bright Bloom</option>
                  <option value="Soft Petals">Soft Petals</option>
                  <option value="Fragrant Vases">Fragrant Vases</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Price ($)</label>
                <input 
                  type="number" 
                  step="0.01"
                  placeholder="25.00" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Upload Flower Image</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full text-xs text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-pink-50 file:text-pink-600 hover:file:bg-pink-100 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                  <img src={image} alt="Preview" className="w-12 h-12 rounded-xl object-cover border border-gray-200" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Description</label>
                <textarea 
                  rows="2"
                  placeholder="Short description..." 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 text-sm"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-pink-600 text-white font-semibold py-3 rounded-xl hover:bg-pink-700 transition shadow-sm text-sm"
              >
                Save & Add Product
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Inventory</h2>
            <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
              {flowers.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-xl border border-gray-200" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-pink-600 font-semibold text-xs">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-50 text-red-600 px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-red-500 hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John",
      role: "Happy Customer",
      comment: "I Have Ordered Flowers From Many Places, But The Quality Here Is Exceptional. The Colors Were Vibrant, The Flowers Were Incredibly Fresh, And The Arrangement Felt Elegant And Natural.",
      rating: 5,
      image: "/pic-1.jpg"
    },
    {
      id: 2,
      name: "Emily",
      role: "Happy Customer",
      comment: "From The Moment The Flowers Arrived, I Could See The Attention To Detail And Care That Went Into Every Arrangement. The Blooms Were Fresh, Fragrant, And Absolutely Beautiful.",
      rating: 5,
      image: "/pic-1.jpg"
    },
    {
      id: 3,
      name: "Anna",
      role: "Happy Customer",
      comment: "The Flowers Were Absolutely Beautiful And Incredibly Fresh. Every Bloom Looked Vibrant And Carefully Selected, Creating An Arrangement That Brought Warmth And Elegance To The Room.",
      rating: 5,
      image: "/pic-1.jpg"
    }
  ]);

  const [formName, setFormName] = useState("");
  const [formComment, setFormComment] = useState("");
  const [formRating, setFormRating] = useState("5");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName || !formComment) return;

    const newReview = {
      id: Date.now(),
      name: formName,
      role: "Happy Customer",
      comment: formComment,
      rating: parseInt(formRating),
      image: "/pic-1.jpg"
    };

    setReviews([newReview, ...reviews]);
    setFormName("");
    setFormComment("");
    alert("Thank you! Your review has been submitted successfully.");
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(rev => rev.id !== id));
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full bg-pink-50/70 py-12 mb-16 text-center border-b border-pink-100/60">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Customer's <span className="text-pink-600">Review</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">Discover what our lovely buyers are saying about our flowers</p>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="bg-gradient-to-br from-pink-50/50 to-white border-2 border-pink-100 shadow-xl rounded-3xl p-8 mb-16 text-center max-w-3xl mx-auto backdrop-blur-sm">
          <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">4.9 / 5.0</div>
          <div className="text-pink-500 text-2xl mb-2 tracking-widest">★★★★★</div>
          <p className="text-gray-600 text-sm font-medium">Based On 1,420 Happy Boutique Buyers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-gradient-to-b from-white to-pink-50/30 p-8 rounded-3xl shadow-md border-2 border-pink-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-pink-500 text-lg tracking-wider">
                    {"★".repeat(rev.rating)}
                  </div>
                  <button 
                    onClick={() => handleDelete(rev.id)}
                    className="text-gray-400 hover:text-white hover:bg-red-500 text-xs font-semibold px-2.5 py-1 rounded-full transition shadow-sm"
                    title="Delete review"
                  >
                    ✕ Delete
                  </button>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-pink-100/60">
                <div className="flex items-center space-x-3">
                  <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full object-cover border-2 border-pink-300 shadow-sm" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{rev.name}</h4>
                    <p className="text-pink-600 text-xs font-medium">{rev.role}</p>
                  </div>
                </div>
                <span className="text-4xl text-pink-200 font-serif">“</span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-b from-white to-pink-50/40 p-10 rounded-3xl shadow-xl border-2 border-pink-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Share Your <span className="text-pink-600">Experience</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">We love hearing your feedback!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required
                className="w-full px-4 py-3.5 bg-white border border-pink-200 rounded-2xl text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition shadow-sm"
              />
            </div>

            <div>
              <select 
                value={formRating}
                onChange={(e) => setFormRating(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-pink-200 rounded-2xl text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition shadow-sm"
              >
                <option value="5">★★★★★ (5 Stars)</option>
                <option value="4">★★★★☆ (4 Stars)</option>
                <option value="3">★★★☆☆ (3 Stars)</option>
                <option value="2">★★☆☆☆ (2 Stars)</option>
                <option value="1">★☆☆☆☆ (1 Star)</option>
              </select>
            </div>

            <div>
              <textarea 
                rows="4"
                placeholder="Write Your Review Comments Here..." 
                value={formComment}
                onChange={(e) => setFormComment(e.target.value)}
                required
                className="w-full px-4 py-3.5 bg-white border border-pink-200 rounded-2xl text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition shadow-sm"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-gray-900 text-white font-semibold py-4 rounded-2xl hover:bg-pink-600 active:bg-pink-700 transition shadow-lg"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full bg-pink-50/70 py-12 mb-16 text-center border-b border-pink-100/60">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Contact <span className="text-pink-600">Us</span>
        </h1>
        <p className="text-gray-500 text-sm mt-2">We would love to hear from you. Get in touch with us!</p>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white to-pink-50/30 p-8 md:p-12 rounded-3xl shadow-xl border-2 border-pink-100">
          
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl shadow-md border-2 border-pink-100">
              <img 
                src="/contact.jpg" 
                alt="Contact LyLy Flower Shop" 
                className="w-full h-80 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
                <div className="text-pink-600 text-xl mb-1">📞</div>
                <h4 className="font-bold text-gray-900 text-xs">Phone</h4>
                <p className="text-gray-500 text-xs mt-0.5">+855 98-817-826</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
                <div className="text-pink-600 text-xl mb-1">✉️</div>
                <h4 className="font-bold text-gray-900 text-xs">Email</h4>
                <p className="text-gray-500 text-xs mt-0.5 truncate">Kaykimly1207@gmail.com</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
                <div className="text-pink-600 text-xl mb-1">📍</div>
                <h4 className="font-bold text-gray-900 text-xs">Location</h4>
                <p className="text-gray-500 text-xs mt-0.5">Prek Pnov, Phnom Penh</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-pink-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us A Message</h2>
            <p className="text-gray-500 text-sm mb-6">Have questions or custom bouquet requests? Fill out the form below.</p>

            {submitted ? (
              <div className="bg-pink-50 border border-pink-200 text-pink-700 p-6 rounded-2xl text-center space-y-2">
                <h3 className="font-bold text-lg">Thank You!</h3>
                <p className="text-sm">Your message has been successfully sent. We'll get back to you soon.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-pink-600 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea 
                    rows="4"
                    placeholder="How can we help you?" 
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gray-900 text-white font-semibold py-3.5 rounded-xl hover:bg-pink-600 active:bg-pink-700 transition shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

function Cart({ cart, removeFromCart, checkout }) {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckoutClick = async (totalAmount) => {
    try {
      // Saves the order directly to Firestore database under 'orders' collection
      await addDoc(collection(db, 'orders'), {
        items: cart,
        total: totalAmount,
        createdAt: new Date()
      });

      checkout(totalAmount);
      setOrderSuccess(true);
    } catch (error) {
      console.error("Error saving order: ", error);
      alert("Failed to place order to Firebase. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">Your Shopping Cart</h2>
      
      {orderSuccess && (
        <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-3xl flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">&check;</span>
            <div>
              <h4 className="text-emerald-900 font-bold text-base">Success! Your order has been placed.</h4>
              <p className="text-emerald-700 text-sm">Thank you for shopping with LyLy Flower Shop. We are preparing your flowers now!</p>
            </div>
          </div>
          <button 
            onClick={() => setOrderSuccess(false)}
            className="text-emerald-700 hover:text-emerald-900 font-bold text-sm px-3 py-1"
          >
            &times;
          </button>
        </div>
      )}

      {cart.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <p className="text-gray-500 text-base mb-4 font-normal">Your cart is currently empty.</p>
          <Link to="/shop" className="text-pink-600 font-semibold text-base hover:text-pink-700 transition flex items-center space-x-1">
            <span>Start Shopping</span>
            <span>&rarr;</span>
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {cart.map((item, index) => (
              <div key={index} className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-2xl border border-gray-100" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
                    <p className="text-gray-900 font-semibold text-sm mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-xs font-semibold hover:text-red-700 transition px-3 py-1.5 rounded-lg hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50/70 p-8 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Total Amount</span>
              <div className="text-3xl font-black text-gray-900 mt-0.5">${total.toFixed(2)}</div>
            </div>
            <button 
              onClick={() => handleCheckoutClick(total)}
              className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-semibold hover:bg-black active:bg-pink-600 transition shadow-md text-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function LayoutWrapper({ children, cartCount, wishlistCount, user }) {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";
  const [menuOpen, setMenuOpen] = useState(false);

  if (isAdmin) {
    return children;
  }

  const accountRoute = user ? "/account" : "/login";

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between font-sans">
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-black text-gray-900 tracking-tight">
            Flower<span className="text-pink-600">.</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 font-medium text-gray-600 items-center">
            <Link to="/" className="hover:text-pink-600 transition">Home</Link>
            <Link to="/about" className="hover:text-pink-600 transition">About</Link>
            <Link to="/shop" className="hover:text-pink-600 transition">Products</Link>
            <Link to="/review" className="hover:text-pink-600 transition">Review</Link>
            <Link to="/contact" className="hover:text-pink-600 transition">Contact</Link>
          </div>

          {/* Icon Nav Group */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700">
            <Link to="/favorites" className="relative text-gray-700 hover:text-pink-600 transition" title="Favorites">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative text-gray-700 hover:text-pink-600 transition" title="Cart">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to={accountRoute} className="text-gray-700 hover:text-pink-600 transition" title="User Account">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/favorites" className="relative text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to={accountRoute} className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-lg bg-gray-50 border border-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-800 text-center hover:bg-pink-50 hover:text-pink-600 transition">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-800 text-center hover:bg-pink-50 hover:text-pink-600 transition">About</Link>
            <Link to="/shop" onClick={() => setMenuOpen(false)} className="block w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-800 text-center hover:bg-pink-50 hover:text-pink-600 transition">Products</Link>
            <Link to="/review" onClick={() => setMenuOpen(false)} className="block w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-800 text-center hover:bg-pink-50 hover:text-pink-600 transition">Review</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-800 text-center hover:bg-pink-50 hover:text-pink-600 transition">Contact</Link>
            <Link to={accountRoute} onClick={() => setMenuOpen(false)} className="block w-full py-3 px-4 bg-pink-50 border border-gray-200 rounded-xl font-medium text-pink-600 text-center hover:bg-pink-100 transition">My Account / Login</Link>
          </div>
        )}
      </nav>

      <div className="flex-grow">
        {children}
      </div>

      <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-pink-600 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-pink-600 transition">About</Link></li>
              <li><Link to="/shop" className="hover:text-pink-600 transition">Products</Link></li>
              <li><Link to="/review" className="hover:text-pink-600 transition">Review</Link></li>
              <li><Link to="/contact" className="hover:text-pink-600 transition">Contact</Link></li>
              <li><Link to="/admin" className="hover:text-pink-600 transition">Admin</Link></li>
              <li><Link to="/cart" className="hover:text-pink-600 transition">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Extra Links</h3>
            <ul className="space-y-2">
              <li><Link to={accountRoute} className="hover:text-pink-600 transition">My Account</Link></li>
              <li><Link to="/orders" className="hover:text-pink-600 transition">My Order</Link></li>
              <li><Link to="/favorites" className="hover:text-pink-600 transition">My Favorite</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Location</h3>
            <ul className="space-y-2 text-gray-500">
              <li>📍 Phnom Penh</li>
              <li>📍 Battambong</li>
              <li>📍 Kom Pot</li>
              <li>📍 Siem Reap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-500">
              <li>📞 +855 98-817-826</li>
              <li>✉️ Kaykimly1207@Gmail.Com</li>
              <li>🏠 Prek Pnov, Phnom Penh</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 border-t border-gray-100 pt-6 text-center text-gray-400">
          Created By <span className="text-pink-600 font-bold">Ly Ly</span> | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [flowers, setFlowers] = useState(initialFlowers);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (flower) => {
    setCart([...cart, flower]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const toggleWishlist = (flower) => {
    if (wishlist.some(item => item.id === flower.id)) {
      setWishlist(wishlist.filter(item => item.id !== flower.id));
    } else {
      setWishlist([...wishlist, flower]);
    }
  };

  const handleCheckout = (total) => {
    if (cart.length === 0) return;
    const newOrder = {
      id: Math.floor(100000 + Math.random() * 900000),
      items: [...cart],
      total: total,
      date: new Date().toLocaleDateString()
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
  };

  return (
    <Router>
      <LayoutWrapper cartCount={cart.length} wishlistCount={wishlist.length} user={user}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop flowers={flowers} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
          <Route path="/admin" element={<Admin flowers={flowers} setFlowers={setFlowers} />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} checkout={handleCheckout} />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/account" element={<Account user={user} onLogout={() => setUser(null)} />} />
          <Route path="/orders" element={<Orders orders={orders} />} />
          <Route path="/favorites" element={<Favorites wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}