import React from 'react';
import { useState, useEffect } from 'react';

import {Helmet} from "react-helmet";

import './stylesheets/home.scss';

import {Icons} from '../../resources/image-icons.js';

function Home() {
	return (
	<div id="Home">
		<Helmet>
			<title>Lor Bookcase - Library of Ruina Wiki</title>
		</Helmet>

		<h1> Welcome to LoR Bookcase, a source of info related to Library of Ruina, a game developed and published by Project Moon.</h1>
		<div id="navHelp">
			Navigate to the info you need using the header above
		</div>
		<div id="pmLink">
			<a href="https://twitter.com/ProjMoonStudio"> <img src={Icons.Twitter} style={{ width: "30%"}} /> </a>
			<a href="https://www.youtube.com/channel/UCpqyr6h4RCXCEswHlkSjykA"> <img src={Icons.Youtube} style={{ width: "30%"}} /> </a>
			<a href="https://www.twitch.tv/projectmoonofficial"> <img src={Icons.Twitch} style={{ width: "30%"}} /> </a>
		</div>
		
	</div>
	);
}

export default Home;