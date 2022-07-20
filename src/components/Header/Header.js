import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
export default function Header () {
    return (
        <header>
            <Link to={"/"}><figure>
                <img className="logoHeader" src={logo} alt="logo"/>
            </figure></Link>
            <Link to={"/"}><figcaption className="descHeader">ZapRecall</figcaption></Link>
        </header>
    );
};