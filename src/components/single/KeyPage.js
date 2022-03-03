import React from 'react';
import { useState, useEffect } from 'react';

import { EmoPageImage } from '../../resources/info-library.js';
import { Icons } from '../../resources/image-icons.js';

import { PassiveList } from "../../resources/info-passive.js";

import './KeyPage.scss'

let resList = ["Fatal", "Weak", "Normal", "Endure", "Ineffective"];
let resListAlt = ["Vulnerable", "Weak", "Normal", "Endure", "Resist"];

function LoadPassiveAbilities(props) {
	return (
		props.list.map((text, index) =>
			<li key={index}> {text} </li>
		)
	)
}

class Passive extends React.Component {
	constructor(props) {
		super(props);
		this.GetPassiveInfo = this.GetPassiveInfo.bind(this);
		this.nColor = this.nColor.bind(this);
	}

	nColor(rarity) {
		let nameColor;
		switch (rarity) {
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
				break;
			default:
				nameColor = "51, 131, 51"
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

	render() {
		let passiveInfo = [];
		this.props.passiveIdList.forEach(element => {
			let tempInfo = this.GetPassiveInfo(element);
			if (typeof tempInfo != "undefined" && (tempInfo.Desc != "" || tempInfo.Cost != ""  || tempInfo.Rarity != "" )) {
				passiveInfo.push(tempInfo);
			}
		});

		return (
			passiveInfo.map(passive =>
				<li id="passiveIndi" key={passive.ID} style={{ borderImage: "linear-gradient(to right, rgb(" + passive.Color + ") 80%, transparent) 30" , backgroundImage: "linear-gradient(to bottom right, rgba(" + passive.Color + ", 0.2), 1%, transparent)" }}>
					<p id="passiveCost" style={{ color: "rgb(" + passive.Color + ")", textShadow: "0.03vw 0.03vw 0.12vw " + "rgb(" + passive.Color + ")" }}> {passive.Cost} </p>
					<p id="passiveName" style={{ color: "rgb(" + passive.Color + ")", textShadow: "0.03vw 0.03vw 0.12vw " + "rgb(" + passive.Color + ")" }}> {passive.Name} </p>
					<ul id="passiveAbilitiesList">
						<LoadPassiveAbilities list={passive.Desc} />
					</ul>
				</li>
			)
		);
	}
}

function Story(props) {
	if (props.line.length == 0) return (
		<p id="keyPageStoryline" style={{ color: "#18675d", placeSelf: "center" }}>
			The page's story is unobservable...
		</p>
	)
	return (
		props.line.map((storyline, index) =>
			<p id="keyPageStoryline" key={index}>
				{storyline}
			</p>
		)
	);
}

export class KeyPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: "stat",
		}

		this.nColor = this.nColor.bind(this);
		this.changeContent = this.changeContent.bind(this);
	}

	nColor() {
		let nameColor;
		switch (this.props.info.Rarity) {
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

	changeContent(e) {
		e.preventDefault();

		let newCurrent;

		if (this.state.current == "stat") newCurrent = "story";
		else newCurrent = "stat";

		this.setState({
			current: newCurrent,
		});
	}

	render() {
		let nameColor = this.nColor();

		if (this.state.current == "stat") {
			return (
				<div id="keyPage" style={{ borderImage: "linear-gradient(to bottom right, " + nameColor + " 20%, transparent) 30" }}>
					<div id="keyPageTop" style={{ borderImage: "linear-gradient(to right, " + nameColor + " 80%, transparent) 30" }}>
						<p id="keyPageName" style={{ textShadow: "0.1vw 0.1vw 0.3vw " + nameColor, color: nameColor }}> {this.props.info.Name} </p>
						<button id="changeCurrentInfo" onClick={this.changeContent} >
							<img src={Icons.Swap} />
						</button>
					</div>
					<div id="statFull" style={{ borderImage: "linear-gradient(to right, " + nameColor + " 80%, transparent) 30" }}>
						<div id="stat" style={{ borderImage: "linear-gradient(to bottom, " + nameColor + " 80%, transparent) 30" }}>
							<div id="hp">
								<img id="hpIcon" src={Icons.HP} alt="HPIcon" />
								<p id="hpText"> {this.props.info.HP} </p>
							</div>
							<div id="stg">
								<img id="stgIcon" src={Icons.Stg} alt="StgIcon" />
								<p id="stgText"> {this.props.info.StaggerHP} </p>
							</div>
							<div id="spd">
								<img id="spdIcon" src={Icons.Spd} alt="SpdIcon" />
								<p id="spdText"> {this.props.info.Speed[0]} ~ {this.props.info.Speed[1]} </p>
							</div>
						</div>
						<div id="res" style={{ borderImage: "linear-gradient(to bottom, " + nameColor + " 80%, transparent) 30" }}>
							<div id="hpRes">
								<div id="slashRes">
									<img id="resIcon" src={Icons["SlashDmg" + resListAlt[this.props.info.SResist[0] + 2]]} alt="slashHPResIcon" />
									<p id="resText"> {resList[this.props.info.SResist[0] + 2]} </p>
								</div>
								<div id="pierceRes">
									<img id="resIcon" src={Icons["PierceDmg" + resListAlt[this.props.info.PResist[0] + 2]]} alt="pierceHPResIcon" />
									<p id="resText"> {resList[this.props.info.PResist[0] + 2]} </p>
								</div>
								<div id="bluntRes">
									<img id="resIcon" src={Icons["BluntDmg" + resListAlt[this.props.info.BResist[0] + 2]]} alt="bluntHPResIcon" />
									<p id="resText"> {resList[this.props.info.BResist[0] + 2]} </p>
								</div>
							</div>
							<div id="stgRes">
								<div id="slashRes">
									<img id="resIcon" src={Icons["SlashStg" + resListAlt[this.props.info.SResist[1] + 2]]} alt="slashStgResIcon" />
									<p id="resText"> {resList[this.props.info.SResist[1] + 2]} </p>
								</div>
								<div id="pierceRes">
									<img id="resIcon" src={Icons["PierceStg" + resListAlt[this.props.info.PResist[1] + 2]]} alt="pierceStgResIcon" />
									<p id="resText"> {resList[this.props.info.PResist[1] + 2]} </p>
								</div>
								<div id="bluntRes">
									<img id="resIcon" src={Icons["BluntStg" + resListAlt[this.props.info.BResist[1] + 2]]} alt="bluntStgResIcon" />
									<p id="resText"> {resList[this.props.info.BResist[1] + 2]} </p>
								</div>
							</div>
						</div>
					</div>
					<ul id="passive">
						<Passive passiveIdList={this.props.info.Passive} />
					</ul>
				</div>
			);
		} else {
			return (
				<div id="keyPage" style={{ borderImage: "linear-gradient(to bottom right, " + nameColor + " 20%, transparent) 30" , gridTemplateRows: "14% auto" }}>
					<div id="keyPageTop" style={{ borderImage: "linear-gradient(to right, " + nameColor + " 80%, transparent) 30" }	}>
						<p id="keyPageName" style={{ textShadow: "0.1vw 0.1vw 0.3vw " + nameColor, color: nameColor }}> {this.props.info.Name} </p>
						<button id="changeCurrentInfo" onClick={this.changeContent}>
							<img src={Icons.Swap} />
						</button>
					</div>
					<div id="keyPageStory">
						<Story line={this.props.info.Desc} />
					</div>
				</div>
			)
		}
	}
}

export function LoadKeyPages(props) {
	const [width, setWidth] = React.useState("33%");
	const [height, setHeight] = React.useState("25vw");
	const [font, setFont] = React.useState("1vw");

	React.useEffect(() => {
		function handleResize() {
			if (window.innerWidth <= 500) {
				setWidth("100%");
				setHeight("74vw");
				setFont("2.7vw");
			} else if (window.innerWidth <= 1000) {
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

		return _ => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('load', handleResize);
		}

	});

	return (
		props.keyPages.slice(0, props.limit).map(keyPage =>
			<li id="mainList" key={keyPage.ID} style={{ fontSize: font, width: width, minWidth: width, height: height }}>
				<KeyPage info={keyPage} />
			</li>
		)
	);
}