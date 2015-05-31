function LoseScene() {
	this.bg = new Sprite('img/start_screen.jpg');
	var gameover = new Sprite('img/game_over.png');

	this.entities = [
		{draw: function(ctx) { gameover.center( ctx, 640, 500 ); }}
	];

	this.click = function() {
		game.level = -1;
		purgeUpgrades();
		game.scene = scenes.menu;
	}
}

LoseScene.prototype = new Scene();