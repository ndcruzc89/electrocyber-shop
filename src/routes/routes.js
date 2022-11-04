import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Products from "../pages/products/products";
import Contact from "../pages/contact/contact";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Cart from "../pages/cart/cart";


export default function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}
 
