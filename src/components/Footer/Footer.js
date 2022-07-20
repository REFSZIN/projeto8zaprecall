import React from "react";
import { Link } from "react-router-dom";
import FooterFollowUp from "./FooterFollowUp";
import FooterResult from "./FooterResult";

export default function Footer(props){
    const { corretas, erradas, medianas, totalQuests , icons } = props;
    const soma = corretas + erradas + medianas;
    const reload = () =>{
        window.location.reload(false)
    }
    return (
        <footer>
            <FooterResult erradas={erradas} soma={soma} totalQuests={totalQuests}/>
            <FooterFollowUp soma={soma} totalQuests={totalQuests} icons={icons}/>
            {soma ===  totalQuests? ( <Link to={"/play"}><button onClick={() => reload()} className="btnreload" >REINICIAR RECALL</button></Link>) : ('')}
        </footer>
    );
};