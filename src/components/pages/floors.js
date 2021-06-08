import React from 'react';
import { useState, useEffect } from 'react';

import {Helmet} from "react-helmet";

import SearchBar from '../single/SearchBar.js';
import SelectBar from '../single/SelectBar.js';

import {LoadEmoPages} from '../single/EmoPage.js';

import './stylesheets/floors.scss';
import {EmoPageList} from '../../resources/info-library.js';
import {levelImage, pageImage, Icons} from '../../resources/info-source.js';

class Floors extends React.Component {
    constructor(props){
        super(props);
        this.state = {
    		search: '',
    		floor: 'History',
            color: '220, 237, 109',
    		abnormality: EmoPageList.slice(0,5),
            EGOPages: '',
    	};

        this.handleChange = this.handleChange.bind(this);

        this.reload = this.reload.bind(this);
    }

    reload() {
		const tempAbno = EmoPageList.slice();

		let i = 0;
		
		while (i < tempAbno.length){
			if ( tempAbno[i].Floor != this.state.floor ){
					tempAbno.splice(i, 1);
			} else {
				i++;
			}
		}

		tempAbno.sort(this.compare)

        let newColor = '';

        // rgba(228, 195, 143 0.5)

        switch(this.state.floor){
            case "History": newColor = "220, 237, 109"; break;
            case "Technological Sciences": newColor = "99, 70, 232"; break;
            case "Literature": newColor = "173, 106, 29"; break;
            case "Art": newColor = "121, 244, 145"; break;
            case "Natural Sciences": newColor = "245, 184, 54"; break;
            case "Language": newColor = "214, 26, 26"; break;
            case "Social Sciences": newColor = "0, 166, 245"; break;
            case "Philosophy": newColor = "69, 68, 12"; break;
            case "Religion": newColor = "222, 215, 215"; break;
            case "General Works": newColor = "255, 255, 255"; break;
        }

		this.setState({
			abnormality: tempAbno,
            color: newColor,
		});
	}

    handleChange(e){
    	this.setState(
            {
    		    [e.target.name]: e.target.value
            },
            () => {
                this.reload();
            }
    	);
  	}

    render () {
        let floorName = ["History", "Technological Sciences", "Literature", "Art",
                        "Natural Sciences", "Language", "Social Sciences",
                        "Philosophy", "Religion", "General Works"];

    return (
        <div id="Floors">
            <Helmet>
				<title>Lor Bookcase - Floors</title>
                <meta name="keywords" content="lor, library of ruina, lor wiki, library of ruina wiki, abnornality pages, abno pages, project moon, projectmoon" />
			</Helmet>

            <h1> The Library </h1>
            {/* <SearchBar search={this.state.search} setSearch={this.handleChange}/> */}
            <div id="SelectNoteTop">
                <SelectBar name="floor" option={floorName} current={this.state.floor} handleChange={this.handleChange}/>
                <div id="Note" > <p> Current Patch: 1.1.0.2a2 </p> </div>
            </div>

            <ul id="EmoPagesList" style={{ marginTop: "4vh" }}>
                <LoadEmoPages abnormality={this.state.abnormality} color={this.state.color}/>
            </ul>
            <br /><br />
        </div>
    )
    }
}

export default Floors;