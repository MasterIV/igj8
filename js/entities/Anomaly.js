function Anomaly(x, y, r, g) {
	this.radius = r;

	this.getForce = function( distance ) {
		var force = (g * 1000) / Math.pow(distance.Length(), 2);
		var vec = distance.Negative();
		vec.Multiply(force);
		return vec;
	};

	this.draw = function(ctx) {
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2 * Math.PI, false);

		ctx.fillStyle = 'rgba(0,0,255,.3)';
		ctx.fill();

		ctx.strokeStyle = 'rgba(0,0,255,.6)';
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
		ctx.stroke();
	};

	this.GetCenterPosition = function() {
		return new b2Vec2(x, y);
	}
}
