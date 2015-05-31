function MenuScene() {
	this.bg = new Sprite('img/background1.jpg');

	this.entities = [ new Button('img/button_blank.png', 'img/button_blank.png', 1280/2 - 374/2, 720/2 -70/2, function() {
						  game.scene = new PreUniverseScene(levels.level0);
					  }, 'sounds/menu/button_clicked.mp3'),
						new StaticSprite('img/button_start_game.png',1280/2, 720/2)
					 ];

};

MenuScene.prototype = new Scene;