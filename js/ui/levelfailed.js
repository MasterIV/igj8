function LevelFailed() {
	this.img = g['img/game_over.png'];
	this.width = this.img.width;
	this.height = this.img.height;
	this.lifetime = 0;

	this.draw = function( ctx ) {
		ctx.drawImage( this.img, 640-this.img.width/2, 360-this.img.height/2 );
	}
	this.update = function ( delta ) {
		if (game.scene.gameover) return;

		this.lifetime += delta;
		if (this.lifetime >= 5000) {
			game.scene.gameover = true;
			game.animation.x = 0;
			game.animation.y = 0;
		}
	}
}