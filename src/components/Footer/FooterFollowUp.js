import React from 'react';
export default function FooterFollowUp (props){
    const { soma, totalQuests, icons } = props;
    

    return(
        <section className="followUp">
            <h3>{soma}/{totalQuests} CONCLUÍDOS</h3>
            <article className="iconsMarkHist">
                {
                    icons.map((icon, index) => (<ion-icon key={index} name={icon}></ion-icon>))
                }
            </article>
        </section>
    );
};