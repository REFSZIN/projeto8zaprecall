import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Playball&display=swap');

/* 	
	font-family: 'Lexend Deca', sans-serif;
	font-family: 'Playball', cursive;
    font-family: 'Righteous', cursive;
	font-family: 'Roboto', sans-serif; 
    font-family: 'Recursive', sans-serif;
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
*/

*, *:before, *::after{
    box-sizing: border-box;
	scroll-behavior: smooth;
	word-wrap: break-word;
	word-break: break-all;
}
a{
    text-decoration: none;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#root::-webkit-scrollbar {
  display: none;
}
body{
    height: 100vh;
		width: 100vw;
		background: rgb(251,107,107);
    background: radial-gradient(circle, rgba(251,107,107,1) 0%, rgb(196, 70, 95) 100%);
    border: 1px solid #DBDBDB;
    border-bottom: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
}
.root{
    width: 80%;
    height: 100%;
}

header{
    margin-top: 40px;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
}
header .logoHeader{
    width: 70px;
    height: 90px;
    margin-right: 10px;
}
header .descHeader, aside figcaption{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    color: #FFFFFF;
}

aside{
    width: 100%;
    padding-bottom: 30vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    animation: zoomIn 1s;
}
.logoAside{
    margin-top: 110%;
    width: 144px;
    height: 170px;
}
.metaZap,.selectDeck{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    align-content: center;
    flex-wrap: nowrap;
}
.btnAside{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 2px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 9px;
}
.inputDeck,.inputZaps{
    margin-top: 26px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    width: 246px;
    height: 43px;
    background: #FFFFFF;
    border-radius: 5px;
    color: #FB6B6B;
    opacity: 0.9;
    border: none;
}
datalist{
    background-color: #D70900;
}
.inputZaps::placeholder, .inputDeck::placeholder{
    padding-left: 10px;
}
.inputDeck{
    margin-bottom: 30px;
}
main{
    width: 100%;
    height: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 170px;
    overflow-y: scroll;
    overflow: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;  
    position: relative;
}
main .quest{
    max-width: 100%;
    min-width: 100%;
    display: inline-flex;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgb(0 0 0 / 15%);
    margin-bottom: 16px;
    flex-direction: column;
    align-items: center;
    align-content: stretch;
    flex-wrap: nowrap;
    margin-left: 10%;
    margin-right: 10%;
    animation: flipInX 1s;
    border-radius: 5px;
}
.numberQuest{
    max-width: 100%;
    min-width: 70%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    background: #FFFFFF;
    border-radius: 5px;
}
.question{
    position: relative;
    max-width: 120%;
    min-width: 100%;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    display: inline-flex;
    max-height: 120px;
    min-height: 66px;
    background: #FFFFFF;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    animation: fadeIn 1s;
}
.questMid, .numberQuest{
    max-width: 500.12px;
    min-width: 100%;   
    max-height: 120px;
    min-height: 46px;
    border-radius: 5px;
}
.questMid{
    max-width: 100%;
    min-width: 100%;
    padding-top: 2px;
    padding-left: 2px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
}
.questLate{
    max-width: 500px;
    min-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    height: 120px;
    min-height: 76px;
    animation: jackInTheBox 1s;
    border-radius: 5px;
}
.options{
    position: relative;
    bottom: -10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
}
h6{
    margin-top: 10px;
    margin-bottom: 10px;
}
.btnQuestRed,.btnQuestGreen,.btnQuestOrange{
    width: 30%;
    height: 37px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    background: #FF3030;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
}
.btnQuestGreen{
    background: #2FBE34;
}
.btnQuestOrange{
    background: #FF922E;
		line-height: 10px;
}
footer{
    text-align: center;
    width: 100%;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 3px -10px 6px rgba(0, 0, 0, 0.05);
    position: fixed;
    bottom: 0px;
    left: 0px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 5px;
    animation: fadeInUpBig 1s;
}
footer .result{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
}
footer .resultMsg{
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
}
footer .followUp{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
}
footer .btnreload{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    width: 167px;
    height: 32px;
    background: #FB6B6B;
    border-radius: 5px;
    color: #FFFFFF;
}
footer .resultMsg img{
    margin-right: 10px;
    width: 23px;
    height: 23px;
}
h2{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}
h3{
    margin-bottom: 10px;
}
.result h4{
    width: 150px;
}
h5{
    margin: 4px;
}
ion-icon[name="checkmark-circle"]{
    color: green;
}
ion-icon[name="close-circle"]{
    color: red;
}
ion-icon[name="help-circle"]{
    color: orange;
}
ion-icon[name="refresh"]{
    position: relative;
}
ion-icon[name="refresh"]{
    position: absolute;
    right: 0px;
    width: 10%;
    bottom: 10px;
    cursor: pointer;
}
.play, button{
    cursor: pointer;
}
#display{
    display: none;
}
.clickedcorret{
    text-decoration-line: line-through;
    color : green;
}
.clickedrong{
    text-decoration-line: line-through;
    color : red;
}
.clickedmaybe{
    text-decoration-line: line-through;
    color : orange;
}
@media (max-width: 935px) {
    main {
        width: 95%;
				margin-left: 2%;
				
    }
    ion-icon[name="refresh"]{
        position: absolute;
        width: 10%;
        right: 0px;
        bottom: 5px;
        cursor: pointer;
    }

}
*, *:before, *::after{
    box-sizing: border-box;
	scroll-behavior: smooth;
	word-wrap: break-word;
	word-break: break-all;
}
`