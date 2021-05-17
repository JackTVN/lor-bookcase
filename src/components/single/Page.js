import React from 'react';

import {pageImage} from '../../resources/info-source.js';
import {Icons} from '../../resources/image-icons.js';

import './Page.scss';

export class Page extends React.Component {
	constructor(props){
		super(props);
		this.nColor = this.nColor.bind(this);
		this.checkName = this.checkName.bind(this);
	}

	nColor() {
		let nameColor;
		switch(this.props.info.Rarity){
			case "Paperback":
				nameColor = "#338333"
				break;
			case "Hardcover":
				nameColor = "#0080ff"
				break;
			case "Limited":
				nameColor = "#a32cc4"
				break;
			case "Objet D'art":
				nameColor = "#ffff33"
		}
		return nameColor;
	}

	checkName(str) {
		let StartNumber = str.charAt(0);
		if (StartNumber >= '0' && StartNumber <= '9'){
			StartNumber = "C";
		} else {
			StartNumber = "";
		}
		return StartNumber;
	}
	//let Inscreen = 	

	render(){
		let nameColor = this.nColor();
		let SN = this.checkName(this.props.info.Name);
		this.props.info.Dices.map((dice) => {
			if (dice.Type == "Block" || dice.Type == "Evade") { dice.Color = "#87cefb"; }
			else if (dice.Type.charAt(dice.Type.length - 1) == "C" ) { dice.Color = "#ffd301"; }
			else { dice.Color = "#fe5c5c"; }
		});
		return (
			<div id="Page" className="Page" style={{borderColor: nameColor}}>
				<div id="first" className="first" style={{borderColor: nameColor}}>
					<div id="pageName" style={{ textShadow: "1px 1px 3px " + nameColor, color: nameColor}}> <p> {this.props.info.Name} </p> </div>
					<img id="pageImage" src={pageImage[SN + this.props.info.Name.replace(/[^0-9a-zA-ZáàÀāèěìíīúⅠⅡⅢⅣ ]|\s/g, "")]} 
						style={{borderColor: nameColor}} alt={SN + this.props.info.Name.replace(/[^0-9a-zA-ZáàÀāèěìíīúⅠⅡⅢⅣ ]|\s/g, "")}>
					</img>
					<p id="pageRange" > {this.props.info.Range} </p>
					<p id="pageCost" > {this.props.info.Cost} </p>
				</div>
				<div id="second" className="second" style={{borderColor: nameColor}}>
					{this.props.info.Desc.map((desc, index) => <p key={index} id="pageDesc"> {desc} </p>)}
					{this.props.info.Dices.map((dice, index) => 
						<div key={index} id="pageDice"> 
							<span id="diceRoll" style={{ textShadow: "1px 1px 3px " + dice.Color, color: dice.Color}}>{dice.Roll[0]}&#8209;{dice.Roll[1]}&nbsp;</span>
							<img id="diceIcon" src={Icons[dice.Type+'Dice']} alt="dice"></img>
							<span id="diceDesc"> {dice.Desc} </span>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export function LoadPages(props) {
	const [width, setWidth] = React.useState("33%");
	const [height, setHeight] = React.useState("28vw");
	const [font, setFont] = React.useState("1vw");

	React.useEffect(() => {
    	function handleResize() {
      		if (window.innerWidth <= 500){
				setWidth("100%");
				setHeight("74vw");
				setFont("2.7vw");
			} else if (window.innerWidth <= 1000){
				setWidth("50%");
				setHeight("43vw");
				setFont("1.5vw");
			} else if (window.innerWidth <= 1500){
				setWidth("33%");
				setHeight("28vw");
				setFont("1vw");
			} else {
				setWidth("25%");
				setHeight("21vw");
				setFont("0.75vw");
			}
    	}

    	window.addEventListener('resize', handleResize);
		window.addEventListener('load', handleResize);

    	return _ => { window.removeEventListener('resize', handleResize); 
					window.removeEventListener('load', handleResize); 
					}

    });

	return(
		props.pages.slice(0, props.limit).map(page => <li key={page.ID} style={{ fontSize: font, width: width, minWidth: width, height: height}}> <Page info={page}/> </li>)
	);
}