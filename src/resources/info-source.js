import React from 'react';
import levelCanard from './level-icons/canard.png';
import levelUrbanMyth from './level-icons/urban-myth.png';
import levelUrbanLegend from './level-icons/urban-legend.png';
import levelUrbanPlague from './level-icons/urban-plague.png';
import levelUrbanNightmare from './level-icons/urban-nightmare.png';
import levelStar from './level-icons/star-of-the-city.png';
//import levelImpuritas from './level-icons/impuritas-civitatis.png';

export const levelImage = {
	canard: levelCanard,
	urbanMyth: levelUrbanMyth,
	urbanLegend: levelUrbanLegend,
	urbanPlague: levelUrbanPlague,
	urbanNightmare: levelUrbanNightmare,
	star: levelStar,
	impuritas: levelStar,
}

const cardList = [

/* Canard - Paperback */

{ 
	ID: "1",
	Name: "Evade",
	Rarity: "Paperback",
	Range: "Melee",
	Cost: "0",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [1, 4],
		Type: "Evade",
		Desc: ""
	},
	]
},
{ 
	ID: "2",
	Name: "Light Attack",
	Rarity: "Paperback",
	Range: "Melee",
	Cost: "1",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [2, 3],
		Type: "Pierce",
		Desc: ""
	},
	{ 
		Roll: [1, 4],
		Type: "Blunt",
		Desc: ""
	},
	]
},
{ 
	ID: "3",
	Name: "Light Defense",
	Rarity: "Paperback",
	Range: "Melee",
	Cost: "1",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [1, 5],
		Type: "Evade",
		Desc: ""
	},
	{ 
		Roll: [2, 3],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [1, 2],
		Type: "Slash",
		Desc: ""
	},
	]
},
{ 
	ID: "4",
	Name: "Charge and Cover",
	Rarity: "Paperback",
	Range: "Melee",
	Cost: "2",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [3, 6],
		Type: "Pierce",
		Desc: ""
	},
	{ 
		Roll: [2, 6],
		Type: "Block",
		Desc: ""
	},
	]
},
{ 
	ID: "5",
	Name: "Focused Strikes",
	Rarity: "Paperback",
	Range: "Melee",
	Cost: "3",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [3, 5],
		Type: "Slash",
		Desc: ""
	},
	{ 
		Roll: [3, 5],
		Type: "Slash",
		Desc: ""
	},
	{ 
		Roll: [1, 3],
		Type: "Pierce",
		Desc: ""
	},
	]
},


/* Canard - Hardcover */
/* Canard - Limited */
/* Canard - Objet D'art */
/* Urban Myth - Paperback */
/* Urban Myth - Hardcover */
/* Urban Myth - Limited */
/* Urban Myth - Objet D'art */
/* Urban Legend - Paperback */
/* Urban Legend - Hardcover */
/* Urban Legend - Limited */
/* Urban Legend - Objet D'art */
/* Urban Plague - Paperback */
/* Urban Plague - Hardcover */
/* Urban Plague - Limited */
/* Urban Plague - Objet D'art */
/* Urban Nightmare - Paperback */
/* Urban Nightmare - Hardcover */
/* Urban Nightmare - Limited */
/* Urban Nightmare - Objet D'art */
/* Star of the City - Paperback */
/* Star of the City - Hardcover */
/* Star of the City - Limited */
/* Star of the City - Objet D'art */

{ 
	ID: "605001",
	Name: "Eradication",
	Rarity: "Objet D'art",
	Range: "Mass Summation",
	Cost: "5",
	Desc: [
	" Only usable in the 'Blade Unlocked' state", 
	],
	Dices: [
	{ 
		Roll: [12, 23],
		Type: "Blunt",
		Desc: "[On Hit] Inflict 1 Feeble this Scene",
	},
	]
},
{ 
	ID: "605002",
	Name: "Castigation",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "4",
	Desc: [
	"Only usable in the 'Blade Unlocked' state", "Reduce Power of all opponent's dice clashing against this by 12", 
	],
	Dices: [
	{ 
		Roll: [1, 5],
		Type: "Pierce",
		Desc: "[On Hit] Deal bonus damage and Stagger damage by 7x the unmodified roll",
	},
	{ 
		Roll: [2, 7],
		Type: "Piercec",
		Desc: ""
	},
	]
},
{ 
	ID: "605003",
	Name: "Decapitation",
	Rarity: "Objet D'art",
	Range: "Ranged",
	Cost: "4",
	Desc: [
	"Only usable in the 'Blade Unlocked' state", 
	],
	Dices: [
	{ 
		Roll: [13, 25],
		Type: "Slash",
		Desc: "[On Hit] Inflict 1 Feeble and 8 Bleed next Scene"
	},
	]
},
{ 
	ID: "606001",
	Name: "Raging Storm: Love",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "5",
	Desc: [
	" This page is exhausted on use", 
	],
	Dices: [
	{ 
		Roll: [3, 7],
		Type: "Slash",
		Desc: "[On Hit] Inflict 2 Burn",
	},
	{ 
		Roll: [8, 20],
		Type: "Slash",
		Desc: "[On Hit] Inflict 2 Burn",
	},
	]
},
{ 
	ID: "606002",
	Name: "Flaming Dragon Fist",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "4",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [3, 8],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [13, 28],
		Type: "Blunt",
		Desc: "[On Hit] Inflict 6 Burn",
	},
	]
},
{ 
	ID: "607002",
	Name: "Greater Split: Vertical",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "5",
	Desc: [
	"[On hit] Destroy a Combat page set on another random Speed die of the target.", 
	],
	Dices: [
	{ 
		Roll: [20, 39],
		Type: "Slash",
		Desc: ""
	},
	]
},
{ 
	ID: "607008",
	Name: "Manifest E.G.O",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "2",
	Desc: [
	"Exhausts on use. [On Use] Restore 6 Light; fully recover Stagger Resist. Manifest the E.G.O of the Red Mist next Scene.", 
	],
	Dices: [
	{ 
		Roll: [8, 15],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [8, 15],
		Type: "Evade",
		Desc: ""
	},
	]
},
{ 
	ID: "607021",
	Name: "Great Split: Horizontal",
	Rarity: "Objet D'art",
	Range: "Mass Summation",
	Cost: "6",
	Desc: [
	"", 
	],
	Dices: [
	{ 
		Roll: [28, 42],
		Type: "Slash",
		Desc: "[On Hit] Inflict 5 Bleed next Scene",
	},
	]
},
{ 
	ID: "607022",
	Name: "Great Split: Vertical",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "5",
	Desc: [
	"[On hit] Destroy a Combat page set on another random Speed die of the target", 
	],
	Dices: [
	{ 
		Roll: [20, 39],
		Type: "Slash",
		Desc: "[On Hit] Inflict 3 Bleed next Scene",
	},
	]
},
{ 
	ID: "607203",
	Name: "Degraded Shockwave",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "5",
	Desc: [
	"[On Use] Give 3 Protection to all allies this Scene", 
	],
	Dices: [
	{ 
		Roll: [3, 8],
		Type: "Blunt",
		Desc: ""
	},
	{ 
		Roll: [3, 8],
		Type: "Blunt",
		Desc: ""
	},
	{ 
		Roll: [4, 9],
		Type: "Blunt",
		Desc: "[On Hit] Inflict 1 Feeble this Scene"
	},
	]
},
{ 
	ID: "608001",
	Name: "Feral Knives",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "6",
	Desc: [
	" Only usable at 20+ Charge. [On Hit] Inflict 3 Bleed next Scene", 
	],
	Dices: [
	{ 
		Roll: [4, 9],
		Type: "Pierce",
		Desc: "[On Hit] Deal 5 damage",
	},
	{ 
		Roll: [4, 9],
		Type: "Slash",
		Desc: "[On Hit] Deal 5 Stagger damage",
	},
	{ 
		Roll: [6, 10],
		Type: "Slash",
		Desc: "[On Hit] Inflict 3 Bleed and 1 Fragile this Scene and next Scene",
	},
	]
},
{ 
	ID: "608002",
	Name: "Mind Crush",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "6",
	Desc: [
	" Only usable at 20+ Charge.", 
	],
	Dices: [
	{ 
		Roll: [4, 8],
		Type: "Pierce",
		Desc: "[On Hit] Deal 6 Stagger damage",
	},
	{ 
		Roll: [4, 8],
		Type: "Blunt",
		Desc: "[On Hit] Deal 6 Stagger damage",
	},
	{ 
		Roll: [5, 10],
		Type: "Blunt",
		Desc: "[On Hit] Deal 6 Stagger damage"
	},
	]
},
{ 
	ID: "608003",
	Name: "Ground Smash",
	Rarity: "Objet D'art",
	Range: "Mass Summation",
	Cost: "6",
	Desc: [
	" Only usable at 20+ Charge.", "[On Use] Spend 20 Charge to boost Power of all dice on this page by +10", 
	],
	Dices: [
	{ 
		Roll: [13, 22],
		Type: "Blunt",
		Desc: ""
	},
	]
},
{ 
	ID: "608004",
	Name: "Disposal",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "5",
	Desc: [
	"Only usable at 20+ Charge. This page is exhausted on use. Upon defeating an enemy with this page, add a copy of 'Disposal' to hand and lower its Cost by 1.", "If target's HP is at 50% or lower, deal twice as much damage.", 
	],
	Dices: [
	{ 
		Roll: [15, 30],
		Type: "Slash",
		Desc: "[On Clash Win] Destroy all dice on target's page",
	},
	{ 
		Roll: [10, 20],
		Type: "Slash",
		Desc: "If target has 'Mark', increase damage and Stagger damage by the unmodified roll",
	},
	]
},
{ 
	ID: "608017",
	Name: "Savage Mode",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "2",
	Desc: [
	"This page exhausts on use.", "[On Use] Convert all Ranged pages in the deck into Melee pages. Add a copy of 'Feral Knives' to hand. Starting with the next Scene, all dice this character plays gain +1 Power.", 
	],
	Dices: [
	{ 
		Roll: [2, 7],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [3, 7],
		Type: "Slash",
		Desc: ""
	},
	]
},
{ 
	ID: "609013",
	Name: "Mirage Storm",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "7",
	Desc: [
	"", 
	],
	Dices: [
	{ 
		Roll: [4, 9],
		Type: "Slash",
		Desc: "[On Hit] Deal 5 damage",
	},
	{ 
		Roll: [4, 9],
		Type: "Blunt",
		Desc: "[On Hit] Deal 5 Stagger damage",
	},
	{ 
		Roll: [4, 8],
		Type: "Pierce",
		Desc: "[On Hit] Inflict 3 Bleed and 1 Fragile this Scene and next Scene",
	},
	]
},
{ 
	ID: "610001",
	Name: "Pú Láo",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "2",
	Desc: [
	"", 
	],
	Dices: [
	{ 
		Roll: [6, 9],
		Type: "Blunt",
		Desc: "[On Hit] Inflict 1 Feeble and Disarm next Scene",
	},
	]
},
{ 
	ID: "610005",
	Name: "Yá Zì",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "4",
	Desc: [
	"[On Use] Gain 2 Strength and Endurance next Scene", 
	],
	Dices: [
	{ 
		Roll: [5, 10],
		Type: "Blunt",
		Desc: "[On Hit] Inflict 1 Burn",
	},
	{ 
		Roll: [4, 9],
		Type: "Blunt",
		Desc: "[On Hit] Inflict 1 Burn",
	},
	]
},
{ 
	ID: "610006",
	Name: "Jīn Ní",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "4",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [15, 28],
		Type: "Pierce",
		Desc: "[On Hit] Inflict 2 Burn to all enemies",
	},
	]
},
{ 
	ID: "610009",
	Name: "Tāo Tiè",
	Rarity: "Objet D'art",
	Range: "Mass Summation",
	Cost: "5",
	Desc: [
	"", 
	],
	Dices: [
	{ 
		Roll: [25, 30],
		Type: "Slash",
		Desc: "[On Hit] Inflict 8 Burn",
	},
	]
},
{ 
	ID: "611001",
	Name: "Distorted Blade",
	Rarity: "Objet D'art",
	Range: "Mass Summation",
	Cost: "7",
	Desc: [
	"", 
	],
	Dices: [
	{ 
		Roll: [18, 33],
		Type: "Slash",
		Desc: "[On Hit] Inflict 2 Erosion",
	},
	]
},
{ 
	ID: "611002",
	Name: "Baleful Brand",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "3",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [4, 8],
		Type: "Slash",
		Desc: ""
	},
	{ 
		Roll: [6, 10],
		Type: "Pierce",
		Desc: "[On Hit] Inflict 2 Erosion",
	},
	{ 
		Roll: [5, 9],
		Type: "Block",
		Desc: ""
	},
	]
},
{ 
	ID: "611003",
	Name: "Lock",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "4",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [7, 9],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [12, 19],
		Type: "Blunt",
		Desc: "[On Clash Win] Destroy target's next die",
	},
	]
},
{ 
	ID: "601001",
	Name: "Emotional Turbulence",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "3",
	Desc: [
	"[On Use] All dice on this page gain +1 Power for every 2 Emotion Levels", 
	],
	Dices: [
	{ 
		Roll: [4, 8],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [5, 9],
		Type: "Pierce",
		Desc: "[On Hit] Inflict 2 Burn",
	},
	{ 
		Roll: [4, 9],
		Type: "Slash",
		Desc: "[On Hit] Inflict 1 Burn",
	},
	{ 
		Roll: [3, 7],
		Type: "Blockc",
		Desc: ""
	},
	]
},
{ 
	ID: "601008",
	Name: "Forming Storm",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "4",
	Desc: [
	"[On Use] Remove all dice from this page. Add a Mass Attack page to hand that can only be used next Scene.", "This page is exhausted on use.", 
	],
	Dices: [
	{ 
		Roll: [8, 20],
		Type: "Slash",
		Desc: "[On Hit] Inflict 3 Burn",
	},
	]
},
{ 
	ID: "601009",
	Name: "Tiěshānkào",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "3",
	Desc: [

	],
	Dices: [
	{ 
		Roll: [5, 6],
		Type: "Pierce",
		Desc: ""
	},
	{ 
		Roll: [8, 21],
		Type: "Blunt",
		Desc: "[On Hit] Inflict 1 + (Personal Emotion Level) amount of Burn",
	},
	{ 
		Roll: [3, 7],
		Type: "Piercec",
		Desc: ""
	},
	]
},
{ 
	ID: "601014",
	Name: "Raging Storm: Harm",
	Rarity: "Objet D'art",
	Range: "Mass Individual",
	Cost: "1",
	Desc: [
	" Can only be used this Scene", 
	],
	Dices: [
	{ 
		Roll: [8, 20],
		Type: "Slash",
		Desc: "[On Hit] Inflict 3 Burn",
	},
	]
},
{ 
	ID: "602010",
	Name: "Discipline",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "4",
	Desc: [
	"Dice on this page and the page clashing with it are unaffected by Power gain or loss", 
	],
	Dices: [
	{ 
		Roll: [2, 6],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [4, 8],
		Type: "Block",
		Desc: ""
	},
	{ 
		Roll: [3, 5],
		Type: "Slash",
		Desc: ""
	},
	{ 
		Roll: [3, 7],
		Type: "Blunt",
		Desc: "This die is rolled 3 times",
	},
	]
},
{ 
	ID: "602011",
	Name: "Le Regole",
	Rarity: "Objet D'art",
	Range: "Melee",
	Cost: "3",
	Desc: [
	"[On Use] All allies deal +2 damage with their Offensive dice next Scene", 
	],
	Dices: [
	{ 
		Roll: [5, 11],
		Type: "Pierce",
		Desc: ""
	},
	{ 
		Roll: [5, 10],
		Type: "Slash",
		Desc: ""
	},
	{ 
		Roll: [3, 8],
		Type: "Blockc",
		Desc: ""
	},
	]
},
{ 
	ID: "603001",
	Name: "Energy Beam",
	Rarity: "Objet D'art",
	Range: "Ranged",
	Cost: "4",
	Desc: [
	"Dice abilities on this page only activate if the opponent has Offensive dice", 
	],
	Dices: [
	{ 
		Roll: [13, 21],
		Type: "Pierce",
		Desc: "[On Clash Win] Spend 2 Charge to destroy opponent's next Offensive die",
	},
	]
},


/* Impuritas Civitatis - Paperback */
/* Impuritas Civitatis - Hardcover */
/* Impuritas Civitatis - Limited */
/* Impuritas Civitatis - Objet D'art */

]

export default cardList;