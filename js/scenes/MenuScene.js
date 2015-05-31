function MenuScene() {
	this.bg = new Sprite('img/start_screen.jpg');

	this.entities = [ new Button('img/button_blank.png', 'img/button_blank.png', 1280/2 - 374/2, 600, function() {
						  game.nextLevel();

					  }, 'sounds/menu/button_clicked.mp3'),
						new StaticSprite('img/button_start_game.png',1280/2, 634)
					 ];

};

MenuScene.prototype = new Scene;