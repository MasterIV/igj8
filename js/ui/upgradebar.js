/* click to upgrade! */

function UpgradeBar(outline, x, y, boxcount) {
	this.boxsize = 40;
	this.boxcount = boxcount;
	this.x = x;
	this.y = y - this.boxsize / 1.5;
	this.area = new Rect( new V2( this.x, this.y ), new V2( this.x+this.boxcount*this.boxsize, this.y+this.boxsize));

	this.outline = outline;
	this.outlinehover = '#ffff55';
	this.linewidth = 2;
	this.inlinegrey = '#cccccc';
	this.inlinered = '#ff5555';
}

UpgradeBar.prototype.draw = function( ctx, level ) {
	ctx.lineWidth = this.linewidth;

	if (this.area.inside( mouse )) {
		ctx.strokeStyle = this.outlinehover;
		ctx.strokeRect(this.x - this.linewidth, this.y - this.linewidth, this.boxsize * this.boxcount + this.linewidth*2, this.boxsize + this.linewidth*2);
		if (level < this.boxcount)
			level++;
	}
	ctx.strokeStyle = this.outline;
	for (var i = 0; i < this.boxcount; i++) {
		if (level > i)
			ctx.fillStyle = this.inlinered;
		else
			ctx.fillStyle = this.inlinegrey;
		ctx.fillRect(this.x + i * this.boxsize, this.y, this.boxsize, this.boxsize);
		ctx.strokeRect(this.x + i * this.boxsize, this.y, this.boxsize, this.boxsize);
	}
};

UpgradeBar.prototype.click = function ( pos, mother ) {
	if (this.area.inside( pos ))
		mother.clicked( this );
}