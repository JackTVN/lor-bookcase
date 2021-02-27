import React from 'react';
import { useState, useEffect } from 'react';

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
    		floor: 'Literature',
    		abnoPages: EmoPageList.slice(0,15),
            EGOPages: '',
    	};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
    	this.setState({
    		[e.target.name]: e.target.value}
    	);
  	}

    render () {
        let floorName = ["History", "Technological Science", "Literature", "Art",
                        "Natural Science", "Language", "Social Science",
                        "Philosophy", "Religion", "General Works"];
    return (
        <div id="Floors">
            <h1> The Library </h1>
            <SearchBar search={this.state.search} setSearch={this.handleChange}/>
            <SelectBar name="floor" option={floorName} current={this.state.floor} handleChange={this.handleChange}/>

            <div id="Note" style={{ marginTop: "12vh" }} > <p> Current Patch: 1.0.4.2a_wrongCardFixed2 </p> </div>
            <ul id="EmoPagesList">
                <LoadEmoPages abnoPages={this.state.abnoPages}/>
            </ul>
            <br /><br />
        </div>
    )
    }
}

export default Floors;