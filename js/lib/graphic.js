var g = {
	urls: [
		'img/mothership1.png',
		'img/mothership2.png',
		'img/mothership3.png',
		'img/fighter1.png',
		'img/fighter2.png',
		'img/fighter3.png',
		'img/fighter4.png',
		'img/_fighterBurning.png',
		'img/_fighterDestroyed.png',
		'img/gun.png',
		'img/gun_overlay.png',
		'img/shot.png',
		'img/_shotCollision.png',
		'img/bg.png',
		'img/buyscene_bg.png',
		'img/hitpoint1.png',
		'img/hp_spritesheet.png',
		'img/background1.jpg',
		'img/background2.jpg',
		'img/_normalShot.png',
		'img/_pullAnomaly.png',
		'img/_repulseAnomaly.png',
		'img/_weakspotDestroyed.png',
	],

	add: function( url ) {
		this.urls.push( url );
	},

	load: function( callback ) {
		var total = 0, loaded = 0;

		function complete() {
			if( ++loaded >= total ) callback();
		}

		while( this.urls.length ) {
			var url = this.urls.shift();
			if( typeof this[url] == 'undefined' ) {
				total++;
				this[url] = new Image();
				this[url].onload = complete;
				this[url].src = url;
			}
		}

		if( total == 0 ) callback();
	}
}