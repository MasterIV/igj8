function Cannon( x, y ) {
	this.position = new V2(x, y);
	this.rotation = Math.PI/2;
	this.cooldown = {pull: 0, push: 0, laser: 0, rocket: 0};
	this.weapon = 'laser';
	this.shooting = false;
	this.lastWeapon = 'laser';

	this.pullPreviewSprite = new AnimationSprite('img/_pullAnomaly.png', 25);
	this.pushPreviewSprite = new AnimationSprite('img/_repulseAnomaly.png', 25);
	this.counter = new Framecounter(50);

}

Cannon.prototype.draw = function ( ctx ) {
	ctx.save();
	ctx.translate(this.position.x, this.position.y );
	ctx.rotate( this.rotation - Math.PI*.5 );
	ctx.drawImage(g['img/gun.png'], -30, -30);
	ctx.restore();
	ctx.drawImage(g['img/gun_overlay.png'], this.position.x-30, this.position.y-30 );

	ctx.globalAlpha = 0.5;
	if (this.weapon == 'push') {
		this.pushPreviewSprite.center(ctx,mouse.x,mouse.y,this.counter.frame%25);
	}
	if (this.weapon == 'pull') {
		this.pullPreviewSprite.center(ctx,mouse.x,mouse.y,this.counter.frame%25);
	}
	ctx.globalAlpha = 1;
};

Cannon.prototype.update = function ( delta ) {
	this.counter.update(delta);
	this.rotation = Math.atan2( this.position.x - mouse.x, this.position.y - mouse.y) * - 1;

	for( var w in this.cooldown )
		if( this.cooldown[w] > 0 )
			this.cooldown[w] -= delta;

	if( this.cooldown[this.weapon] <= 0 && this.shooting ) {
		this.cooldown[this.weapon] = this.getCooldown( this.weapon );
		switch( this.weapon ) {
			case 'rocket': game.scene.fire( this.position, true, getDestroyerDamage() ); break;
			case 'pull':
				game.scene.anomaly( 100+getSuckingEffect(), 1000 );
				this.weapon = this.lastWeapon;
				this.shooting = false;
				break;
			case 'push':
				game.scene.anomaly( 100+getPushingEffect(), -1000 );
				this.weapon = this.lastWeapon;
				this.shooting = false;
				break;
			default:
				game.scene.fire( this.position, false, getNormalDamage() );
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
		case 'pull': return getSuckingCooldown();
		case 'push': return getPushingCooldown();
		case 'rocket': return getDestroyerRate();
		default: return getNormalRate();
	}
};