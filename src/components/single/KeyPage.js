import React from 'react';
import { useState, useEffect } from 'react';

import {EmoPageImage} from '../../resources/info-library.js';
import {Icons} from '../../resources/image-icons.js';

import {PassiveList} from "../../resources/info-passive.js";

import './KeyPage.scss'

class LoadPassiveAbilities extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			this.props.list.map((text,index) =>
				<li key={index}> {text} </li>
			)
		)
	}
}

class Passive extends React.Component {
	constructor(props){
		super(props);
		this.GetPassiveInfo = this.GetPassiveInfo.bind(this);
		this.nColor = this.nColor.bind(this);
	}

	nColor(rarity) {
		let nameColor;
		switch(rarity){
			case "Paperback":
				nameColor = "51, 131, 51"
				break;
			case "Hardcover":
				nameColor = "0, 128, 255"
				break;
			case "Limited":
				nameColor = "163, 44, 196"
				break;
			case "Objet D'art":
				nameColor = "255, 255, 51"
		}
		return nameColor;
	}

	GetPassiveInfo(id) {
		let tempInfo = PassiveList.find(element => element.ID == id);
		if (typeof tempInfo != "undefined") {
			tempInfo.Color = this.nColor(tempInfo.Rarity);
		}
		return tempInfo;
	}

	render(){
		let passiveInfo = [];
		this.props.passiveIdList.forEach(element => {
			let tempInfo = this.GetPassiveInfo(element);
			if (typeof tempInfo != "undefined") {
				if (tempInfo.Cost != "")
					passiveInfo.push(tempInfo);
			}
		});

		return(
			passiveInfo.map(passive => 
				<li id="passiveIndi" key={passive.ID} style={{ borderColor: "rgb(" + passive.Color + ")", backgroundImage: "linear-gradient(to bottom right, rgba(" + passive.Color + ", 0.1), 1%, transparent)" }}> 
					<p id="passiveCost" style={{ color: "rgb(" + passive.Color + ")", textShadow: "0.05vw 0.05vw 0.2vw " + "rgb(" + passive.Color + ")" }}> {passive.Cost} </p>
					<p id="passiveName" style={{ color: "rgb(" + passive.Color + ")", textShadow: "0.05vw 0.05vw 0.2vw " + "rgb(" + passive.Color + ")" }}> {passive.Name} </p>
					<ul id="passiveAbilitiesList">
						<LoadPassiveAbilities list={passive.Desc}/>
					</ul>
				</li>
			)
		);
	}
}

class KeyPage extends React.Component {
	constructor(props){
		super(props);
		this.nColor = this.nColor.bind(this);
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

	render(){
		let nameColor = this.nColor();
		let resList = ["Fatal", "Weak", "Normal", "Endure", "Ineffective"];
		return (
			<div id="keyPage" style={{borderColor: nameColor}}>
				<p id="keyPageName" style={{ textShadow: "0.1vw 0.1vw 0.3vw " + nameColor, color: nameColor}}> {this.props.info.Name} </p>
				<div id="statFull" style={{borderColor: nameColor}}>
					<div id="stat" style={{borderColor: nameColor}}>
						<div id="hp">
							<img id="hpIcon" src={Icons.HP} alt="HPIcon"/>
							<p id="hpText"> {this.props.info.HP} </p>
						</div>
						<div id="stg">
							<img id="stgIcon" src={Icons.Stg} alt="StgIcon"/>
							<p id="stgText"> {this.props.info.StaggerHP} </p>
						</div>
						<div id="spd">
							<img id="spdIcon" src={Icons.Spd} alt="SpdIcon"/>
							<p id="spdText"> {this.props.info.Speed[0]} ~ {this.props.info.Speed[1]} </p>
						</div>
					</div>
					<div id="res" style={{borderColor: nameColor}}>
						<div id = "hpRes">
							<div id="slashRes">
								<img id="resIcon" src={Icons.SlashDmgRes[this.props.info.SResist[0] + 2]} alt="slashHPResIcon"/>
								<p id="resText"> { resList[this.props.info.SResist[0] + 2] } </p>
							</div>
							<div id="pierceRes">
								<img id="resIcon" src={Icons.PierceDmgRes[this.props.info.PResist[0] + 2]} alt="pierceHPResIcon"/>
								<p id="resText"> { resList[this.props.info.PResist[0] + 2] } </p>
							</div>
							<div id="bluntRes">
								<img id="resIcon" src={Icons.BluntDmgRes[this.props.info.BResist[0] + 2]} alt="bluntHPResIcon"/>
								<p id="resText"> { resList[this.props.info.BResist[0] + 2] } </p>
							</div>
						</div>
						<div id = "stgRes">
							<div id="slashRes">
								<img id="resIcon" src={Icons.SlashStgRes[this.props.info.SResist[1] + 2]} alt="slashStgResIcon"/>
								<p id="resText"> { resList[this.props.info.SResist[1] + 2] } </p>
							</div>
							<div id="pierceRes">
								<img id="resIcon" src={Icons.PierceStgRes[this.props.info.PResist[1] + 2]} alt="pierceStgResIcon"/>
								<p id="resText"> { resList[this.props.info.PResist[1] + 2] } </p>
							</div>
							<div id="bluntRes">
								<img id="resIcon" src={Icons.BluntStgRes[this.props.info.BResist[1] + 2]} alt="bluntStgResIcon"/>
								<p id="resText"> { resList[this.props.info.BResist[1] + 2] } </p>
							</div>
						</div>
					</div>
				</div>
				<ul id="passive" datascrollthumb={nameColor} >
					<Passive passiveIdList={this.props.info.Passive} />
				</ul>
			</div>
		);
	}
}

export function LoadKeyPages(props) {
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
		props.keyPages.map(keyPage => 
            <li id="mainList" key={keyPage.ID} style={{ fontSize: font, width: width, minWidth: width, height: height}}> 
				<KeyPage info={keyPage}/> 
			</li>
		)
	);
}