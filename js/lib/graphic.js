var g = {
	urls: [
		'img/mothership1.png',
		'img/mothership2.png',
		'img/mothership3.png',
		'img/mothership4.png',
		'img/mothership5.png',
		'img/ship_medium1.png',
		'img/ship_medium2.png',
		'img/ship_medium3.png',
		'img/ship_medium4.png',
		'img/ship_medium5.png',
		'img/fighter1.png',
		'img/fighter2.png',
		'img/fighter3.png',
		'img/fighter4.png',
		'img/fighter5.png',
		'img/shield_top.png',
		'img/shield_bottom.png',
		'img/fighter4.png',
		'img/_fighterBurning.png',
		'img/_fighterDestroyed.png',
		'img/_fighterSpawn.png',
		'img/_destroyerCharge.png',
		'img/_destroyerShot_16fps.png',
		'img/gun.png',
		'img/gun_overlay.png',
		'img/shot.png',
		'img/_rocketShot.png',
		'img/_shotCollision.png',
		'img/bg.png',
		'img/buyscene_bg.jpg',
		'img/hitpoint_green.png',
		'img/hitpoint_yellow.png',
		'img/hitpoint_red.png',
		'img/hitpoint_red_fortified.png',
		'img/hitpoint_yellow_fortified.png',
		'img/hp_spritesheet.png',
		'img/background1.jpg',
		'img/background2.jpg',
		'img/_normalShot.png',
		'img/_bigAnomaly.png',
		'img/_pullAnomaly.png',
		'img/_repulseAnomaly.png',
		'img/_weakspotDestroyed.png',
		'img/_mothershipDestroyed.png',
		'img/shop_button_small.png',
		'img/shop_menu_plasma.png',
		'img/shop_menu_rocket.png',
		'img/shop_menu_repulse.png',
		'img/shop_menu_pull.png',
		'img/shop_menu_hull.png',
		'img/shop_button_big.png',
		'img/shop_button_big_highlight.png',
		'img/shop_button_small_highlight.png',
		'img/main_UI_weapons.png',
		'img/main_UI_anomalies.png',
		'img/skill_selected.png',
		'img/win.png',
		'img/arrow.png',
		'img/textbox_l.png',
		'img/textbox_r.png',
		'img/character_1.png',
		'img/character_2.png',
		'img/character_3.png',
		'img/character_4.png',
		'img/character_5.png',
		'img/character_6.png',
		'img/character_name_1.png',
		'img/character_name_2.png',
		'img/character_name_3.png',
		'img/character_name_4.png',
		'img/character_name_5.png',
		'img/character_name_6.png',
		'img/shop_menu_hull.png',
		'img/button_blank.png',
		'img/button_start_game.png'
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