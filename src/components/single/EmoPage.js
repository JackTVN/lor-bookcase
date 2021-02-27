import React from 'react';
import { useState, useEffect } from 'react';

import {pageImage} from '../../resources/info-source.js';
import {Icons} from '../../resources/image-icons.js';

export class EmoPage extends React.Component {
	constructor(props){
		super(props);
		this.nColor = this.nColor.bind(this);
	}
	nColor() {
		let nameColor;
		switch(this.props.info.State){
			case "Awakening":
				nameColor = "#338333"
				break;
			case "Breakdown":
				nameColor = "#0080ff"
		}
		return nameColor;
	}

	render(){
		let nameColor = this.nColor();
		return (
			<div id="emoPage" style={{borderColor: nameColor}}>
				<div id="first" className="first" style={{borderColor: nameColor}}>
					<div id="emoPageName" style={{ textShadow: "1px 1px 3px " + nameColor, color: nameColor}}> <p> {this.props.info.Name} </p> </div>
					<img id="emoPageImage" src={pageImage[this.props.info.Name.replace(/[^0-9a-zA-ZáàÀāèěìíīúⅠⅡⅢⅣ ]|\s/g, "")]} 
						style={{borderColor: nameColor}} alt={this.props.info.Name.replace(/[^0-9a-zA-ZáàÀāèěìíīúⅠⅡⅢⅣ ]|\s/g, "")}>
					</img>
					<p id="emoPageFlavorText" > {this.props.info.Flavor} </p>
				</div>
				<div id="second" className="second" style={{borderColor: nameColor}}>
					<p id="emoPageDesc"> {this.props.info.Desc} </p>
				</div>
			</div>
		);
	}
}

export function LoadEmoPages(props) {
	const [width, setWidth] = React.useState("33%");
	const [height, setHeight] = React.useState("25vw");
	const [font, setFont] = React.useState("1vw");

	React.useEffect(() => {
    	function handleResize() {
      		if (window.innerWidth <= 500){
				setWidth("100%");
				setHeight("74vw");
				setFont("2.7vw");
			} else if (window.innerWidth <= 1000){
				setWidth("50%");
				setHeight("37vw");
				setFont("1.5vw");
			} else if (window.innerWidth <= 1500){
				setWidth("33%");
				setHeight("25vw");
				setFont("1vw");
			} else if (window.innerWidth <= 1800){
				setWidth("25%");
				setHeight("19vw");
				setFont("0.85vw");
			} else if (window.innerWidth <= 2200){
				setWidth("20%");
				setHeight("15vw");
				setFont("0.7vw");
			} else { setWidth("16.6%"); setHeight("12vw"); setFont("0.55vw"); } 
    	}

    	window.addEventListener('resize', handleResize);
		window.addEventListener('load', handleResize);

    	return _ => { window.removeEventListener('resize', handleResize); 
					window.removeEventListener('load', handleResize); 
					}

    });

	return(
		props.abnoPages.map(page => <li key={page.ID} style={{ fontSize: font, width: width, minWidth: width, height: height}}> <EmoPage info={page}/> </li>)
	);
}