function Cannon( x, y ) {
	this.position = new V2(x, y);
	this.rotation = 0;
	this.cooldown = 0;
	this.weapon = 0;
	this.shooting = false;
}

Cannon.prototype.draw = function ( ctx ) {
	ctx.save();
	ctx.translate(this.position.x, this.position.y );
	ctx.rotate( this.rotation - Math.PI*.5 );
	ctx.drawImage(g['img/gun.png'], -30, -30);
	ctx.restore();
	ctx.drawImage(g['img/gun_overlay.png'], this.position.x-30, this.position.y-30 );
};

Cannon.prototype.update = function ( delta ) {
	this.rotation = Math.atan2( this.position.x - mouse.x, this.position.y - mouse.y) * - 1;
	if( this.cooldown > 0 ) {
		this.cooldown -= delta;
	} else if( this.shooting ) {
		switch( this.weapon ) {
			case 1:
				this.cooldown = this.getSuckingCooldown();
				game.scene.anomaly( 100, 1000 );
				break;
			default:
				this.cooldown = this.getNormalCooldown();
				game.scene.fire( this.position );
		}
	}
};

Cannon.prototype.mousedown = function() {
	this.shooting = true;
};

Cannon.prototype.mouseup = function() {
	this.shooting = false;
};

Cannon.prototype.getNormalCooldown = function () {
	return 200;
	// - 150 for every upgrade point
	return 1000 - upgrades.normal[UPGR_FRATE] * 150;
}
Cannon.prototype.getSuckingCooldown = function () {
	// Regular cooldown 2000ms
	// - 300 for every upgrade point
	return 2000 - upgrades.normal[UPGR_FRATE] * 300;
}