function HpBar() {
	this.hp = 0;
	this.sprite = new AnimationSprite('img/hp_spritesheet.png', 11);
}

HpBar.prototype.draw = function ( ctx ) {
		this.sprite.center(ctx, 17, 360 , this.hp);
};

HpBar.prototype.setHp = function ( hp ) {
	this.hp = hp;
};


HpBar.prototype.reduce = function ( hp ) {
	game.scene.entities.push( new ScreenShake( 500 ));
	if (typeof hp == 'undefined') hp = 1;
	this.hp -= hp;
	if( this.hp < 1 && game.scene.won == false ) {
		if (!game.scene.lost) {
			game.scene.entities.push( new LevelFailed(640, 360) );

			var retrybg = new StaticSprite('img/button_blank.png',1280/2, 484);
			var retrybutton = new Button('img/button_blank.png', 'img/shop_button_big_highlight.png', 1280/2 - 374/2, 450, function() {
						  // Retry
						  upgrades.pointbuffer = 0;
						  game.level -= 1;
						  game.animation.x = 0;
						  game.animation.y = 0;
						  if (game.level >= 0)
							game.scene = new BuyScene();
						  else
							game.nextLevel();
					  });
			var retryfg = new StaticSprite('img/button_try_again.png',1280/2, 484);

			var menubg = new StaticSprite('img/button_blank.png',1280/2, 555);
			var menubutton = new Button('img/button_blank.png', 'img/shop_button_big_highlight.png', 1280/2 - 374/2, 521, function() {
						  // Main Menu
						  purgeUpgrades();
						  game.level = -1;
						  game.animation.x = 0;
						  game.animation.y = 0;
						  game.scene = scenes.menu;
					  });
			var menufg = new StaticSprite('img/button_main_menu.png',1280/2, 555);

			game.scene.entities.push( retrybg );
			game.scene.entities.push( retrybutton );
			game.scene.entities.push( retryfg );
			game.scene.entities.push( menubg );
			game.scene.entities.push( menubutton );
			game.scene.entities.push( menufg );
			game.scene.lost = true;
		}
	}
};