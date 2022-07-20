import React from "react";
import { Link } from "react-router-dom";
export default function AsideInputs (){
    
    return(
        <>
            <input className="inputZaps" placeholder="Digite sua meta de zaps..." type="number" name="numerosZaps"/>
            <input className="inputDeck"  placeholder="Escolha seu deck" type="search" list="deck"/>
            <datalist id="deck" name="decklist" form="frameworks">
                <option value="JavaScript">JavaScript</option>
                <option value="CSS">CSS</option>
                <option value="ReactNative">ReactNative</option>
                <option value="SAP">SAP</option>
            </datalist>
            <Link to="/play"><button className="btnAside" type="submit">Iniciar Recall!</button></Link>
        </>
    );
};