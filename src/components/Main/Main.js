import React from "react";
import MainQuest from "./MainQuest";

export default function Main (props){
    const {
        corretas, erradas, medianas, setCorretas, setErradas, setMedianas, baralho, setIcons, icons
    } = props;

    return(
        <main>
            {baralho.map((item, index) => <MainQuest key={index} num={index + 1} questao={item.questao} resposta={item.resposta} corretas={corretas} erradas={erradas} medianas={medianas} setCorretas={setCorretas} setErradas={setErradas} setMedianas={setMedianas} setIcons={setIcons} icons={icons} />)}
        </main>
    );
};