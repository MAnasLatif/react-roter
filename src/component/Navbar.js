import React from 'react'
import { NavLink , useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const gotoHome = () =>{
        navigate("/")
    }

    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/post/post_data">Post Link</NavLink></li>
            <button onClick={() => {navigate(-1)}}>Go To Back</button>
            <button onClick={gotoHome}>Go To Home</button>
            <button onClick={() => {navigate(+1)}}>Go To Forward</button>
        </ul>
    )
}
