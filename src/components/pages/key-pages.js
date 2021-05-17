import React from 'react';
import { useState, useEffect } from 'react';

import SearchBar from '../single/SearchBar.js';
import SelectBar from '../single/SelectBar.js';

import {LoadKeyPages} from '../single/KeyPage.js';

import './stylesheets/key-pages.scss';
import {KeyPageList} from '../../resources/info-key-pages.js';
import {levelImage, pageImage, Icons} from '../../resources/info-source.js';

class KeyPages extends React.Component {
    constructor(props){
        super(props);
        this.state = {
    		search: '',
			typing: false,
    		typingTimeout: 0,
    		level: 'All',
    		keyPages: KeyPageList.slice().sort(this.Compare),
            factionOption: ["All", "Library", "Rats", "Yun's Office", "Brotherhood of Iron", "Hook Office", 
			"Pierre's Bistro", "Streetlight Office",
			"Zwei Association South Section 6", "Stray Dogs", "Molar Office", 
			"The Carnival", "Full-Stop Office", "Dawn Office", "Gaze Office", "Kurokumo Clan", "The Musicians of Bremen", "Wedge Office", "Love Town", 
			"Rusted Chains", "Workshop-affiliated Fixers",
			"Sweepers", "Shi Association South Section 2", "The 8 o'Clock Circus", "Puppets", "Index Proselytes", "Smiling Faces", "The Crying Children", "WARP Cleanup Crew",
			"Seven Association", "Blade Lineage",
			"The Thumb", "The Reverberation", "Liu Association South Section 2", "Cane Office",
			"The Index", "The Red Mist", "Liu Association South Section 1", "R Corp",
			"Distorted Yan", "The Purple Tear", "Xiao", "Dong-hwan the Grade 1 Fixer", "Binah",
			"Hana Association", "The Black Silence", "The Reverberation Ensemble", "Keter Realization", "The Reverberation Ensemble Distorted"],
			faction: 'All',
			loadLimit: 24,
    	};

        this.handleChange = this.handleChange.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.compare = this.compare.bind(this);
		this.reload = this.reload.bind(this);
    }

    compare = (a,b) => {
        let va, vb;

        return 0;
    }

    reload() {
      const tempPages = KeyPageList.slice();

      let i = 0;
      
      while (i < tempPages.length){
          if ( (this.state.search != null && !tempPages[i].Name.toLowerCase().includes( this.state.search.toLowerCase() ) )
               || (this.state.level != "All" && tempPages[i].Level != this.state.level) ){
                  tempPages.splice(i, 1);
          } else {
              i++;
          }
      }

      tempPages.sort(this.compare)

      this.setState({
          keyPages: tempPages,
      });
  }

    handleChange(event) {
      if (this.state.typingTimeout) {
          clearTimeout(this.state.typingTimeout);
      }

      this.setState({
          [event.target.name]: event.target.value, 
          typing: false,
          loadLimit: 18,
          typingTimeout: setTimeout(
              () => this.reload(), 200
          )
      });
    }

  handleScroll(){
      if(document.documentElement.scrollTop + window.innerHeight + 300 > document.documentElement.scrollHeight)
      {
          let newLimit = this.state.loadLimit + 24;
          if (newLimit > this.state.keyPages.length) { newLimit = this.state.keyPages.length }
          this.setState({loadLimit: newLimit});
      }
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);

  }

  render() {
    let levelName = ["All", "Canard", "Urban Myth", "Urban Legend", "Urban Plague", "Urban Nightmare",
                    "Star of the City", "Impuritas Civitatis"]

    return (
        <div id="keyPages">
            <h1> Key Pages </h1>

            <div id= "searchHelp">
				<SearchBar search={this.state.search} setSearch={this.handleChange} />
				<SelectBar id="selectLevel" name="level" option={levelName} current={this.state.level} handleChange={this.handleChange}/>
				<SelectBar id="selectFaction" name="faction" option={this.state.factionOption} current={this.state.faction} handleChange={this.handleChange}/>
				<button id="advancedSetting">Advanced</button>
			</div>

            <div id= "keyPageList" style={{ marginTop: "12vh" }}>
                <div id="Note"> 
                    <p> Current Patch: 1.0.4.2a_wrongCardFixed2 </p>
                </div>
                <ul id="List">
                    <LoadKeyPages keyPages={this.state.keyPages} limit={this.state.loadLimit}/>
                </ul>
            </div>
        </div>
        );
    }
}

export default KeyPages;