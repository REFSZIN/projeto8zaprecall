import React from "react";
import logo from "../../assets/images/logo.png"

export default function LogoAside(){
    return(
        <>
            <figure>
                <img className="logoAside" src={logo} alt="logo-aside"/>
            </figure>
            <figcaption>ZapRecall</figcaption>
        </>
    );
};