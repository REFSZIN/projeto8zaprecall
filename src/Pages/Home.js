
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { quests } from "../assets/data/indexdata";

export default function App (){
    const [ corretas, setCorretas ] = useState(0);
    const [ erradas, setErradas ] = useState(0);
    const [ medianas, setMedianas ] = useState(0);
    const [ icons, setIcons ] = useState([]);
    const totalQuests = quests.length;
    const baralho = quests.sort(() => Math.random() - 0.5);
    
    return(
        <>
            <Header />
            <Main corretas={corretas} erradas={erradas} medianas={medianas} setCorretas={setCorretas} setErradas={setErradas} setMedianas={setMedianas} baralho={baralho} setIcons={setIcons} icons={icons} />
            <Footer corretas={corretas} erradas={erradas} medianas={medianas} totalQuests={totalQuests} icons={icons} />
        </>
    )
}