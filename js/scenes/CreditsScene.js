function CreditsScene() {
	this.bg = new Sprite('img/credits.jpg');
	this.spawn = 2000;

	this.entities = [ new StaticSprite('img/button_blank.png',1280/2, 604),
					  new Button('img/button_blank.png', 'img/shop_button_big_highlight.png', 1280/2 - 374/2, 570, function() {
						  game.scene = new MenuScene;
					  }, 'sounds/menu/button_clicked.mp3'),
						new StaticSprite('img/button_back.png',1280/2, 604)
					 ];

	this.baseUpdate = this.update;
	this.update = function( delta ) {
		this.spawn += delta;
		if (this.spawn > 2000) {
			this.entities.unshift( new CreditsFighter(460 + Math.floor(Math.random() * 240)));
			this.spawn = 0;
		}
		this.baseUpdate(delta);
	}
};

CreditsScene.prototype = new Scene;