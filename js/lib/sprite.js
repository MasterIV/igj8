function Sprite( img ) {
	this.img = g[img];
	this.width = this.img.width;
	this.height = this.img.height;
}

Sprite.prototype.draw = function( ctx, x, y ) {
	ctx.drawImage( this.img, x, y );
};

Sprite.prototype.center = function( ctx, x, y ) {
	ctx.drawImage( this.img, x-this.img.width/2, y-this.img.height/2 );
};

Sprite.prototype.area = function( ctx, sx, sy, sw, sh, x, y ) {
	ctx.drawImage( this.img, sx, sy, sw, sh, x, y, sw, sh );
};

function AnimationSprite( img, frames ) {
	this.img = g[img];
	this.h = g[img].height;
	this.w = g[img].width / frames;
	this.f = frames;
}

AnimationSprite.prototype.draw = function( ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x, y, this.w, this.h );
};

AnimationSprite.prototype.center = function( ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x-this.w/2, y-this.h/2, this.w, this.h );
};

AnimationSprite.prototype.rotatecenter = function( ctx, x, y, f, angle, ox, oy ) { // angle in rad
	ctx.save();
	ctx.translate(x, y);
	ctx.translate(this.w/2+ox, this.h/2+ox);
	ctx.rotate(angle/2);
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, -this.w-ox, -this.h-oy, this.w, this.h );
	ctx.restore();
};

AnimationSprite.prototype.rotatecenter = function( ctx, x, y, f, angle, ox, oy ) { // angle in rad
	ctx.save();
	ctx.translate(-x+(f*this.h), -y);
	//ctx.translate(this.w/2+ox, this.h/2+ox);
	ctx.rotate(angle);
	//ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, -this.w-ox, -this.h-oy, this.w, this.h );
	ctx.translate(x-(f*this.h), y);


	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x-this.w/2, y-this.h/2, this.w, this.h );
	ctx.restore();
};