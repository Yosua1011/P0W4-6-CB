/**
1. Fox Activities
Buatlah sebuah class Fox yang menerima parameter awal 
berupa species dan favouriteFood. Fox memiliki property/atrribute 
yaitu species dan favouriteFood, dan mempunyai method atau function sebagai berikut:
howl() : function ini akan mereturn sebuah string yang berisi: 
“Howl! I’m a/an <species> Fox !!!” Pastikan jika nama species huruf 
depannya merupakan huruf hidup/vokal, gunakan an. Jika nama species 
huruf depannya merupakan konsonan/huruf mati, gunakan a.
meet(foxObj) : function yang menerima object fox lain ini akan mereturn string yang berisi:
“hello nice to meet you” apabila nama spesies fox berbeda dengan 
nama species fox yang menjadi parameter.
“Hey brother!” apabila nama spesies fox sama dengan nama species fox yang menjadi parameter.
changeGenetics(newSpecies):  functionyangmenerimaparameterstringyang
berisinama spesies baru, dan akan mengubah nama spesies Fox tersebut.
**/

class Fox {
	constructor (species, favouriteFood) {
		this.species = species;
		this.favouriteFood = favouriteFood;
	}

	howl(species) {
		if (species[0] === 'a' | species[0] === 'A') {
			return 'Howl! Im an ' + species;
		}
	}

	setSpecies(newSpecies) {
		this.species = newSpecies;
	}

	getData(){
		console.log('Species : ' + this.species);
		console.log('favouriteFood: ' + this.favouriteFood);
	}
}

var rubah = new Fox('Elephant', 'bananas');
rubah.howl();
