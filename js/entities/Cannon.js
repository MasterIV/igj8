function Cannon( x, y ) {
	this.position = new V2(x, y);
	this.rotation = 0;
	this.cooldown = {pull: 0, push: 0, laser: 0, rocket: 0};
	this.weapon = 'laser';
	this.shooting = false;
	this.lastWeapon = 'laser';
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

	for( var w in this.cooldown )
		if( this.cooldown[w] > 0 )
			this.cooldown[w] -= delta;

	if( this.cooldown[this.weapon] <= 0 && this.shooting ) {
		this.cooldown[this.weapon] = this.getCooldown( this.weapon );
		switch( this.weapon ) {
			case 'rocket': game.scene.fire( this.position, true ); break;
			case 'pull':
				game.scene.anomaly( 100, 1000 );
				this.weapon = this.lastWeapon;
				this.shooting = false;
				break;
			case 'push':
				game.scene.anomaly( 100, -1000 );
				this.weapon = this.lastWeapon;
				this.shooting = false;
				break;
			default: game.scene.fire( this.position );
		}
	}
};

Cannon.prototype.mousedown = function() {
	this.shooting = true;
};

Cannon.prototype.mouseup = function() {
	this.shooting = false;
};

Cannon.prototype.getCooldown = function ( w ) {
	switch( w ) {
		case 'pull': return 2000 - upgrades.normal[UPGR_FRATE] * 300;
		case 'push': return 2000 - upgrades.normal[UPGR_FRATE] * 300;
		case 'rocket': return 2000 - upgrades.normal[UPGR_FRATE] * 300;
		default: return 200; // return 1000 - upgrades.normal[UPGR_FRATE] * 150;
	}
};