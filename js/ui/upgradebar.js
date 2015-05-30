/* click to upgrade! */

function UpgradeBar(x, y, boxcount) {
	this.boxX = 84;
	this.boxY = 47;
	this.boxcount = boxcount;
	this.boxSpacing = 51;
	this.x = x;
	this.y = y;
	this.area = new Rect( new V2( this.x, this.y ), new V2( this.x+this.boxcount*this.boxX+this.boxSpacing*(this.boxcount-1), this.y+this.boxY));
}

UpgradeBar.prototype.draw = function( ctx, level ) {
	if (this.area.inside( mouse )) {
		if (level < this.boxcount)
			level++;
	}
	for (var i = 0; i < this.boxcount; i++) {
		if (i >= level) return;
		ctx.fillStyle = 'rgba(100,255,100,.4)';
		ctx.fillRect(this.x + i * this.boxX + i * this.boxSpacing, this.y, this.boxX, this.boxY);
	}
};

UpgradeBar.prototype.click = function ( pos, mother ) {
	if (this.area.inside( pos ))
		mother.clicked( this );
}