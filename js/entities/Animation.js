function Animation(img, frameCount, x, y, lifeTime) {
	this.animation = new AnimationSprite(img, frameCount);
	this.animationDuration = lifeTime;
	this.animationTime = 0;
	this.animationFrameCount = frameCount;
	this.x = x;
	this.y = y;
}

Animation.prototype.draw = function ( ctx ) {
		this.animation.center(ctx, this.x ,this.y , (((this.animationTime/this.animationDuration)*this.animationFrameCount)|0));
};

Animation.prototype.update = function ( delta ) {
	this.animationTime += delta;

	if (this.animationTime >= this.animationDuration) {
		arrayRemove( game.scene.entities, this);
	}
};

function ScreenShake(duration) {

}

ScreenShake.prototype.update = function(delta) {

};

function ScreenFlash(duration) {

}

ScreenFlash.prototype.update = function(delta) {

};