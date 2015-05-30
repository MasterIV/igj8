var g = {
	urls: [
		'img/mothership1.png',
		'img/mothership2.png',
		'img/mothership3.png',
		'img/gun.png',
		'img/gun_overlay.png',
		'img/shot.png',
		'img/bg.png',
		'img/buyscene_bg.png',
		'img/hitpoint1.png',
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