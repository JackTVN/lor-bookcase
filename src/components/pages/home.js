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
		<div>
			yea ngl I haven't make the "below" part I promise to make this home page better please don't hit me
		</div>
		<div>
			Navigate to the info you need using the header above
		</div>
		<a href="https://twitter.com/ProjMoonStudio"> <img src={Icons.Twitter} style={{ width: "3%", marginTop: "10%"}} /> </a>
	</div>
	);
}

export default Home;