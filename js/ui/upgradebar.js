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

UpgradeBar.prototype.draw = function( ctx, level, cost ) {
	var show = false;
	if (this.area.inside( mouse )) {
		if (level < this.boxcount) {
			level++;
			show = true;
		}
	}
	for (var i = 0; i < this.boxcount; i++) {
		if (i >= level) return;
		if (show && i == (level-1) && cost > upgrades.points) {
			ctx.fillStyle = 'rgba(255,100,100,.4)';
		} else {
			ctx.fillStyle = 'rgba(100,255,100,.4)';
		}
		var x = this.x + i * this.boxX + i * this.boxSpacing;
		var y = this.y;
		if (i >= 3) {
			y += 74;
			x = this.x + (i-3) * this.boxX + (i-3) * this.boxSpacing;
		}
		ctx.fillRect(x, y, this.boxX, this.boxY);
	}
};

UpgradeBar.prototype.click = function ( pos, mother ) {
	if (this.area.inside( pos ))
		mother.clicked( this );
}