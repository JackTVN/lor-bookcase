import React from 'react';
import './Header.css';

function Header() {
	return (
	<div className="Header">
		<nav>
			<a href="./#/">Home</a> 
			<a href="./#/floors">The Library</a>
			<a href="./#/invitation">Invitation</a> 
			<a href="./#/key-pages">Key Pages</a> 
			<a href="./#/combat-pages">Combat Pages</a> 	
  			<a href="./#/about">About</a>
		</nav>
	</div>
	);
}

export default Header;