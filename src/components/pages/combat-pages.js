import React from 'react';
import './combat-pages.css';
import cardList from '../../resources/info-source.js';
import {levelImage} from '../../resources/info-source.js';

//import objetDartCardBase from '../../resources/combat-pages/rarity/objet-dart/other/objet-dart-base.svg';
//import objetDartCardRange from '../../resources/combat-pages/rarity/objet-dart/type/melee.svg';
//import pageBg from '../../resources/combat-pages/BG.svg';



function Page(props) {
	let nameColor;

	switch(props.info.Rarity){
		case "Paperback":
			nameColor = "#338333"
			break;
		case "Hardcover":
			nameColor = "#6291EC"
			break;
		case "Limited":
			nameColor = "#670178"
			break;
		case "Objet D'art":
			nameColor = "#ffff33"
	}

	return (
		// Let's not touch image for now
		//<div className="Page">
		//	<img className="pageBg" src={pageBg} />
		//	<img className="cardBase" src={objetDartCardBase} />
		//	<img className="cardRange" src={objetDartCardRange} />
		//</div>
		<div id="Page" className="Page" style={{borderColor: nameColor}}>
			<div id="first" className="first" style={{border: "3px solid " + nameColor}}>
				<p id="PageName" className="PageName" style={{ color: nameColor}} > {props.info.Name} </p>
				<p className="PageRangeCost" style={{ color: "orange"}} > {props.info.Range} &nbsp; | &nbsp; {props.info.Cost} </p>
				{props.info.Desc.map(desc => <p className="PageDesc"> {desc} </p>)}
			</div>
			<div id="second" className="second" style={{border: "1px solid " + nameColor}}>
				{props.info.Dices.map(dice => 
					<p className="PageDice"> {dice.Roll[0]} &#8209; {dice.Roll[1]} &nbsp;|&nbsp; {dice.Type} &nbsp;|&nbsp; {dice.Desc}</p>
				)}
			</div>
		</div>
	);
}

class LoadCombatPages extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			pages: [],
		};
	}

	addIfFit = (value) => {
		if (!this.state.pages.find(page => page.Name == value.Name) && value.Name.includes(this.props.search)){
			this.state.pages.push(value);
		}
	}

	render() {
		cardList.forEach(this.addIfFit);

		return(
			this.state.pages.map(page => <li key={page.ID}> <Page info={page}/> </li>)
		);
	}
}

class CombatPages extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		search: '',
    		level: 'all',
    	};

    	this.handleChange = this.handleChange.bind(this);
  	}

  	handleChange(event) {
    	this.setState({[event.target.name]: event.target.value});
  	}

	render() {
	return (
		<div className="Main">
			<h1> Combat Pages </h1>
			<img src={levelImage.canard}></img>
			<img src={levelImage.urbanMyth}></img>
			<img src={levelImage.urbanLegend}></img>
			<img src={levelImage.urbanPlague}></img>
			<img src={levelImage.urbanNightmare}></img>
			<img src={levelImage.star}></img>
			<br />
			<input autocomplete="off" name="search" type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search.." /><br /><br />
			<div className="settingRow">
				<select name="level" value={this.state.level} onChange={this.handleChange}>
					<option value="all">All</option>
					<option value="canard">Canard</option>
	            	<option value="urban-myth">Urban Myth</option>
	            	<option value="urban-legend">Urban Legend</option>
	            	<option value="urban-plague">Urban Plague</option>
	            	<option value="urban-nightmare">Urban Nightmare</option>
	            	<option value="star-of-the-city">Star of the City</option>
	            	<option value="impuritas-civitatis">Impuritas Civitatis</option>
				</select>
				<button className="advancedSetting">Advance</button>
			</div>
			<br />
			<br />
			<br />
			<div className= "pageList">
				<ul className="List">
					<LoadCombatPages search={this.state.search} level={this.state.level} />
				</ul>
			</div>
		</div>
		);
	}
}

export default CombatPages;