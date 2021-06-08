import React from 'react';
import { useState, useEffect } from 'react';

import {EmoPageImage} from '../../resources/info-library.js';
import {Icons} from '../../resources/image-icons.js';

import './EmoPage.scss'

export class EmoPage extends React.Component {
	constructor(props){
		super(props);
		this.nColor = this.nColor.bind(this);
	}

	nColor() {
		let nameColor;
		switch(this.props.info.State){
			case "Awakening":
				nameColor = "#88b115"
				break;
			case "Breakdown":
				nameColor = "#ed2d05"
		}
		return nameColor;
	}

	render(){
		let nameColor = this.nColor();
		return (
			<div id="emoPage" style={{borderColor: nameColor}}>
				<div id="first" className="first" style={{borderColor: nameColor}}>
					<div id="emoPageLevel" style={{ textShadow: "2px 1px 3px " + nameColor, color: nameColor}}> <p> {this.props.info.Level} </p> </div>
					<div id="emoPageName" style={{ textShadow: "1px 1px 3px " + nameColor, color: nameColor}}> <p> {this.props.info.Name} </p> </div>
					<img id="emoPageImage" src={EmoPageImage[this.props.info.Name.replace(/[^0-9a-zA-ZáàÀāèěìíīúⅠⅡⅢⅣ ]|\s/g, "")]} 
						style={{borderColor: nameColor}} alt={this.props.info.Name.replace(/[^0-9a-zA-ZáàÀāèěìíīúⅠⅡⅢⅣ ]|\s/g, "")}>
					</img>
					<p id="emoPageFlavorText" > {this.props.info.Flavor} </p>
				</div>
				<div id="second" className="second" style={{borderColor: nameColor}}>
					{this.props.info.Desc.map((desc, index) => 
						<p key={index} id="emoPageDesc" style={{ color: nameColor, textShadow: "0px 0px 4px " + nameColor }}> {desc} </p>
					)}
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
			} else {
				setWidth("33%");
				setHeight("25vw");
				setFont("1vw");
			}
    	}

    	window.addEventListener('resize', handleResize);
		window.addEventListener('load', handleResize);

    	return _ => { window.removeEventListener('resize', handleResize); 
					window.removeEventListener('load', handleResize); 
					}

    });

	return(
		props.abnormality.map(abno => 
			<li key={abno.Abnormality} id="abno" style={{ backgroundImage: "linear-gradient( rgba(" + props.color + ", 0.15) 40%, transparent)", borderColor: "rgb(" + props.color + ")" }}>
				<div id="abnoName"> {abno.Abnormality} </div>
				<ul id="abnormality">
					<li key={abno.EmoPage[0].ID} style={{ fontSize: font, width: width, minWidth: width, height: height}}> <EmoPage info={abno.EmoPage[0]}/> </li>
					<li key={abno.EmoPage[1].ID} style={{ fontSize: font, width: width, minWidth: width, height: height}}> <EmoPage info={abno.EmoPage[1]}/> </li>
					<li key={abno.EmoPage[2].ID} style={{ fontSize: font, width: width, minWidth: width, height: height}}> <EmoPage info={abno.EmoPage[2]}/> </li>
				</ul>
			</li>
		)
	);
}