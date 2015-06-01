function CreditsFighter(y) {
	this.sprite = 'img/fighter' + (Math.floor(Math.random() * 5)+1) + '.png';
	this.x = 1310;
	this.y = y;
	this.speed = 50 + Math.floor(Math.random() * 71);

	this.update = function( delta ) {
		this.x -= this.speed * delta / 1000;
		if (this.x < -60)
			arrayRemove(game.scene.entities, this);
	}

	this.draw = function( ctx ) {
		ctx.drawImage( g[this.sprite], this.x, this.y );
	}
}