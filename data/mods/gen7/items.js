'use strict';
/**@type {{[k: string]: ModdedItemData}} */
let BattleItems = {
	aguavberry: {
		inherit: true,
		desc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -SpD Nature. Single use.",
		onEat(pokemon) {
			this.heal(pokemon.maxhp / 2);
			if (pokemon.getNature().minus === 'spd') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	figyberry: {
		inherit: true,
		desc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -Atk Nature. Single use.",
		onEat(pokemon) {
			this.heal(pokemon.maxhp / 2);
			if (pokemon.getNature().minus === 'atk') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	iapapaberry: {
		inherit: true,
		desc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -Def Nature. Single use.",
		onEat(pokemon) {
			this.heal(pokemon.maxhp / 2);
			if (pokemon.getNature().minus === 'def') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	icestone: {
		inherit: true,
		desc: "Evolves Alolan Sandshrew into Alolan Sandslash and Alolan Vulpix into Alolan Ninetales when used.",
	},
	leafstone: {
		inherit: true,
		desc: "Evolves Gloom into Vileplume, Weepinbell into Victreebel, Exeggcute into Exeggutor or Alolan Exeggutor, Nuzleaf into Shiftry, and Pansage into Simisage when used.",
	},
	magoberry: {
		inherit: true,
		desc: "Restores 1/8 max HP at 1/2 max HP or less; confuses if -Spe Nature. Single use.",
		onEat(pokemon) {
			this.heal(pokemon.maxhp / 2);
			if (pokemon.getNature().minus === 'spe') {
				pokemon.addVolatile('confusion');
			}
		},
	},
	thunderstone: {
		inherit: true,
		desc: "Evolves Pikachu into Raichu or Alolan Raichu, Eevee into Jolteon, and Eelektrik into Eelektross when used.",
	},
	wikiberry: {
		inherit: true,
		desc: "Restores 1/2 max HP at 1/4 max HP or less; confuses if -SpA Nature. Single use.",
		onEat(pokemon) {
			this.heal(pokemon.maxhp / 2);
			if (pokemon.getNature().minus === 'spa') {
				pokemon.addVolatile('confusion');
			}
		},
	},

	"abomasite": {
		inherit: true,
		isNonstandard: null,
	},
	"absolite": {
		inherit: true,
		isNonstandard: null,
	},
	"aerodactylite": {
		inherit: true,
		isNonstandard: null,
	},
	"aggronite": {
		inherit: true,
		isNonstandard: null,
	},
	"alakazite": {
		inherit: true,
		isNonstandard: null,
	},
	"altarianite": {
		inherit: true,
		isNonstandard: null,
	},
	"ampharosite": {
		inherit: true,
		isNonstandard: null,
	},
	"audinite": {
		inherit: true,
		isNonstandard: null,
	},
	"banettite": {
		inherit: true,
		isNonstandard: null,
	},
	"beedrillite": {
		inherit: true,
		isNonstandard: null,
	},
	"blastoisinite": {
		inherit: true,
		isNonstandard: null,
	},
	"blazikenite": {
		inherit: true,
		isNonstandard: null,
	},
	"cameruptite": {
		inherit: true,
		isNonstandard: null,
	},
	"charizarditex": {
		inherit: true,
		isNonstandard: null,
	},
	"charizarditey": {
		inherit: true,
		isNonstandard: null,
	},
	"diancite": {
		inherit: true,
		isNonstandard: null,
	},
	"galladite": {
		inherit: true,
		isNonstandard: null,
	},
	"garchompite": {
		inherit: true,
		isNonstandard: null,
	},
	"gardevoirite": {
		inherit: true,
		isNonstandard: null,
	},
	"gengarite": {
		inherit: true,
		isNonstandard: null,
	},
	"glalitite": {
		inherit: true,
		isNonstandard: null,
	},
	"gyaradosite": {
		inherit: true,
		isNonstandard: null,
	},
	"heracronite": {
		inherit: true,
		isNonstandard: null,
	},
	"houndoominite": {
		inherit: true,
		isNonstandard: null,
	},
	"kangaskhanite": {
		inherit: true,
		isNonstandard: null,
	},
	"latiasite": {
		inherit: true,
		isNonstandard: null,
	},
	"latiosite": {
		inherit: true,
		isNonstandard: null,
	},
	"lopunnite": {
		inherit: true,
		isNonstandard: null,
	},
	"lucarionite": {
		inherit: true,
		isNonstandard: null,
	},
	"manectite": {
		inherit: true,
		isNonstandard: null,
	},
	"mawilite": {
		inherit: true,
		isNonstandard: null,
	},
	"medichamite": {
		inherit: true,
		isNonstandard: null,
	},
	"metagrossite": {
		inherit: true,
		isNonstandard: null,
	},
	"mewtwonitex": {
		inherit: true,
		isNonstandard: null,
	},
	"mewtwonitey": {
		inherit: true,
		isNonstandard: null,
	},
	"pidgeotite": {
		inherit: true,
		isNonstandard: null,
	},
	"pinsirite": {
		inherit: true,
		isNonstandard: null,
	},
	"sablenite": {
		inherit: true,
		isNonstandard: null,
	},
	"salamencite": {
		inherit: true,
		isNonstandard: null,
	},
	"sceptilite": {
		inherit: true,
		isNonstandard: null,
	},
	"scizorite": {
		inherit: true,
		isNonstandard: null,
	},
	"sharpedonite": {
		inherit: true,
		isNonstandard: null,
	},
	"slowbronite": {
		inherit: true,
		isNonstandard: null,
	},
	"steelixite": {
		inherit: true,
		isNonstandard: null,
	},
	"swampertite": {
		inherit: true,
		isNonstandard: null,
	},
	"tyranitarite": {
		inherit: true,
		isNonstandard: null,
	},
	"venusaurite": {
		inherit: true,
		isNonstandard: null,
	},

	"buginiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"darkiniumz": {
		inherit: true,
		isNonstandard: null,
	},
	"dragoniumz": {
		inherit: true,
		isNonstandard: null,
	},
	"electriumz": {
		inherit: true,
		isNonstandard: null,
	},
	"fairiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"fightiniumz": {
		inherit: true,
		isNonstandard: null,
	},
	"firiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"flyiniumz": {
		inherit: true,
		isNonstandard: null,
	},
	"ghostiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"grassiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"groundiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"iciumz": {
		inherit: true,
		isNonstandard: null,
	},
	"lunaliumz": {
		inherit: true,
		isNonstandard: null,
	},
	"normaliumz": {
		inherit: true,
		isNonstandard: null,
	},
	"poisoniumz": {
		inherit: true,
		isNonstandard: null,
	},
	"psychiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"rockiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"solganiumz": {
		inherit: true,
		isNonstandard: null,
	},
	"steeliumz": {
		inherit: true,
		isNonstandard: null,
	},
	"ultranecroziumz": {
		inherit: true,
		isNonstandard: null,
	},
	"wateriumz": {
		inherit: true,
		isNonstandard: null,
	},
};
exports.BattleItems = BattleItems;