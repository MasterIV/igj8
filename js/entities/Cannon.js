function Cannon( x, y ) {
	this.position = new V2(x, y);
	this.rotation = 0;
	this.cooldown = 0;
}

Cannon.prototype.draw = function ( ctx ) {
	ctx.save();
	ctx.translate(this.position.x, this.position.y );
	ctx.rotate( this.rotation - Math.PI*.5 );
	ctx.drawImage(g['img/gun.png'], -30, -30);
	ctx.restore();
};

Cannon.prototype.update = function ( delta ) {
	this.rotation = Math.atan2( this.position.x - mouse.x, this.position.y - mouse.y) * - 1;
	if( this.cooldown > 0 ) this.cooldown -= delta;
};

Cannon.prototype.click = function() {
	if( this.cooldown <= 0 ) {
		this.cooldown = 500;
		game.scene.fire( this.position );
	}
};