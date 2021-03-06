function LevelComplete() {
	this.img = g['img/win.png'];
	this.width = this.img.width;
	this.height = this.img.height;
	this.lifetime = 0;

	this.draw = function( ctx ) {
		ctx.drawImage( this.img, 640-this.img.width/2, 360-this.img.height/2 );
	}
	this.update = function ( delta ) {
		this.lifetime += delta;
		if (this.lifetime >= 3000) {
			upgrades.points += upgrades.pointbuffer;
			upgrades.pointbuffer = 0;
			game.scene = new BuyScene();
		}
	}
}