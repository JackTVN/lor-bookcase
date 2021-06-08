import React from 'react';
import { useState, useEffect } from 'react';

import { Icons } from '../../resources/image-icons.js';
import { InvitationList } from '../../resources/info-invitation.js';

import { KeyPageList } from '../../resources/info-key-pages.js';
import { KeyPage } from './KeyPage.js';

import { cardList } from '../../resources/info-source.js';
import { Page, LoadPages } from './Page.js';

import './LoadInvitation.scss'

function LoadEpisodeBtn(props) {
	if (props.amount == 10){
		let floorName = ["Malkuth", "Yesod", "Hod", "Netzach",
                        "Tiphereth", "Gebura", "Chesed",
                        "Binah", "Hokma", "Keter"];

		return (
			floorName.map((floor, index) =>
			<button name={index + 1} key={index} id="episodeChooseBtn" onClick={props.action}
				style={{ backgroundImage: ((props.current == index + 1) ? "linear-gradient(to right, rgba(75, 62, 3, 0.5), transparent)" : "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5))"),
				color: ((props.current == index + 1) ? "#cbbf3d" : "#CE8B54"),
				margin: "0",
			}}
			> <img name={index + 1} src={Icons[floor]} alt={floor} /> </button>
			)
		)
	} else {
		let Option = [];
		let One = "I";

		for (let i = 0; i < props.amount; i++) {
			Option.push(One.repeat(i + 1));
		}

		return (
			Option.map((number, index) =>
				<button name={index + 1} key={index} id="episodeChooseBtn" onClick={props.action}
					style={{ backgroundImage: ((props.current == index + 1) ? "linear-gradient(to right, rgba(75, 62, 3, 0.5), transparent)" : "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5))"),
					color: ((props.current == index + 1) ? "#cbbf3d" : "#CE8B54"),
					margin: "0",
				}}
				> {number} </button>
			)
		)
	}
}

function LoadActBtn(props) {
	let Option = [];

	for (let i = 0; i < props.amount; i++) {
		Option.push(i + 1);
	}

	return (
		Option.map((number, index) =>
			<button name={index + 1} key={index} id="actChooseBtn" onClick={props.action}
				style={{ 
					backgroundImage: ((props.current == index + 1) ? "linear-gradient(to right, transparent, rgba(75, 62, 3, 0.3), transparent)" : "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))"), 
					color: ((props.current == index + 1) ? "#cbbf3d" : "#CE8B54"),
				}}
			> {number} </button>
		)
	)
}


function LoadGuestBtn(props) {
	let Guest = props.guest;

	while (Guest.length < 5) {
		Guest.push(
			{
				Name: "-",
				BookID: "213213204",
				Deck: [],
			}
		)
	}

	return (
		Guest.map((GuestInfo, index) =>
			<button id="guestChooseBtn" name={index + 1} key={index} onClick={props.action}
				style={{ 
					backgroundImage: ((props.current == index + 1) ? "linear-gradient(to right, rgba(75, 62, 3, 0.3), transparent, rgba(75, 62, 3, 0.3))" : "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5))"),
					color: ((props.current == index + 1) ? "#cbbf3d" : "#CE8B54"),
				}}
			>
				{GuestInfo.Name}
			</button>
		)
	)
}

function CheckAvailable(page, id) {
	if (page == undefined) {
		return {
			ID: id,
			Name: id,
			Level: "a",
			Source: "aaaaaa",
			EnemyOnly: "True",
			Rarity: "Paperback",
			Range: "Whatever",
			Cost: "-1",
			Desc: [
				"",
			],
			Dices: [
				{
					Roll: [1, 404],
					Type: "Pierce",
					Desc: "bruh",
				},
			]
		}
	} else return page;
}

function PageCompare(a, b){
	return parseInt(a.Cost) - parseInt(b.Cost);
}

function GetPage(list) {
	let guestPageList = [];

	list.map(id =>
		guestPageList.push( CheckAvailable(cardList.find(page => page.ID == id), id) )
	)

	return guestPageList.sort(PageCompare);
}

function LoadPagesIgnoreLi(props) {
	return (
		props.cont.map((page,index) => <li key={index}> <Page info={page} /> </li>)
	)
}

export default class SubScreenInvitation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentInvitation: this.props.name,
			currentEpisode: 1,
			currentAct: 1,
			currentGuest: 1,
			currentCombatPages: [],
		};

		this.changeEpisode = this.changeEpisode.bind(this);
		this.changeAct = this.changeAct.bind(this);
		this.changeGuest = this.changeGuest.bind(this);
	}

	changeEpisode(e) {
		this.setState(
			{
				currentEpisode: parseInt(e.target.name),
				currentAct: 1,
				currentGuest: 1,
				currentCombatPages: [],
			},
			() => {
				this.reload();
			}
		)
	}

	changeAct(e) {
		this.setState(
			{
				currentAct: parseInt(e.target.name),
				currentGuest: 1,
				currentCombatPages: [],
			},
			() => {
				this.reload();
			}
		)
	}

	changeGuest(e) {
		if (e.target.textContent != "-") {
			this.setState(
				{
					currentGuest: parseInt(e.target.name),
					currentCombatPages: [],
				},
				() => {
					this.reload();
				}
			)
		}
	}

	reload() {
		this.setState({
			currentCombatPages: GetPage(InvitationList.find(element =>
				element.Name == this.state.currentInvitation).Episodes[this.state.currentEpisode - 1].Acts[this.state.currentAct - 1].Enemies[this.state.currentGuest - 1].Deck
			)
		})
	}

	static getDerivedStateFromProps(props, state) {
		if (props.name != state.currentInvitation) {
			return {
				currentInvitation: props.name,
				currentEpisode: 1,
				currentAct: 1,
				currentGuest: 1,
				currentCombatPages: GetPage(InvitationList.find(element =>
					element.Name == props.name).Episodes[0].Acts[0].Enemies[0].Deck
				)
			}
		}

		return null;
	}

	render() {
		if (this.state.currentInvitation == "") {
			return (
				<div style={{ display: "none" }} ></div>
			)
		} else {
			let cont = InvitationList.find(element => element.Name == this.props.name)

			return (
				<div id="subScreen">
					<div id="innerScreen">
						<div id="topRow">
							<p id="invitationName"> {cont.Name} </p>
							<button id="invitationClose" onClick={this.props.removeAct}> <img src={Icons.Close} /> </button>
						</div>
						<div id="midOne">
							<div id="sideEpisode">
								<LoadEpisodeBtn current={this.state.currentEpisode} amount={cont.Episodes.length} action={this.changeEpisode} />
							</div>
							<div id="sideGuest">
								<div id="topActChoose">
									<LoadActBtn current={this.state.currentAct} amount={cont.Episodes[this.state.currentEpisode - 1].Acts.length} action={this.changeAct} />
								</div>
								<div id="guestChoose">
									<LoadGuestBtn current={this.state.currentGuest} guest={cont.Episodes[this.state.currentEpisode - 1].Acts[this.state.currentAct - 1].Enemies} action={this.changeGuest} />
								</div>
								<div id="guestInfo">
									<KeyPage info={KeyPageList.find(keypage => keypage.ID == cont.Episodes[this.state.currentEpisode - 1].Acts[this.state.currentAct - 1].Enemies[this.state.currentGuest - 1].BookID)} />
								</div>
							</div>
							<div id="sideRight">
								<div id="episodeInfo"> {cont.Episodes[this.state.currentEpisode - 1].Name} </div>
								<div id="floorAvail"> Floor Available: {cont.Episodes[this.state.currentEpisode - 1].FloorAvail} </div>
								<div id="guestPage">
									<LoadPagesIgnoreLi cont={this.state.currentCombatPages} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}