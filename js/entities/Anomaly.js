function Anomaly(x, y, r, g) {
	this.radius = r;

	if (g > 0) {
		var sprite = new AnimationSprite('img/_pullAnomaly.png', 25);
	} else {
		var sprite = new AnimationSprite('img/_repulseAnomaly.png', 25);
	}

	var counter = new Framecounter(50);

	this.getForce = function( distance ) {
		var force = (g * 2000) / Math.pow(distance.Length(), 2);
		var vec = distance.Negative();
		vec.Multiply(force);
		return vec;
	};

	this.update = function(delta) {
		counter.update(delta);
	};

	this.draw = function(ctx) {
		sprite.center(ctx, x, y, counter.frame % 25);
	};

	this.GetCenterPosition = function() {
		return new b2Vec2(x, y);
	}
}
