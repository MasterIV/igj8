function BigAnomaly(angle, gravity) {
	this.sprite = new AnimationSprite('img/_bigAnomaly.png', 3);
	this.angle = angle;
	this.gravity = gravity;
	this.frameCounter =  new Framecounter(250);
}

BigAnomaly.prototype.getForce = function(  ) {
	return new b2Vec2(Math.cos(this.angle+Math.PI/2)*this.gravity,Math.sin(this.angle+Math.PI/2)*this.gravity);
};

BigAnomaly.prototype.update = function(delta) {
	this.frameCounter.update(delta);
};

BigAnomaly.prototype.draw = function(ctx) {
	this.sprite.rotateCenter(ctx, game.display.width/2, game.display.height/2, this.frameCounter.frame % 3,this.angle);
};
