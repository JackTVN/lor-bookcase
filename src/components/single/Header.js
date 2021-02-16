import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

function Header() {
	return (
	<div className="Header">
		<nav>
			<a href="/">Home</a> 
			<a href="/combat-pages">Combat Pages</a> 
  			<a href="/key-pages">Key Pages</a> 
  			<a href="/invitation">Invitation</a> 
  			<a href="/about">About</a>
		</nav>
	</div>
	);
}

export default Header;