function Bullet( world, position, direction ) {
	var velocity = new b2Vec2( direction.x, direction.y );
	velocity.Normalize();

	this.bodyDef.position.Set( position.x + velocity.x*50, position.y + velocity.y*50 );
	this.body = world.CreateBody(this.bodyDef);

	velocity.Multiply(this.speed);
	this.body.SetLinearVelocity(velocity);

	var sprite = new AnimationSprite('img/_normalShot.png', 16);
	var counter = new Framecounter(50);

	this.draw = function( ctx ) {
		var pos = this.body.GetCenterPosition();
		sprite.center( ctx, pos.x, pos.y, counter.frame%16 );
	};

	this.update = function( delta ) {
		counter.update(delta);
	};
}

Bullet.prototype.shape = new b2CircleDef();
Bullet.prototype.shape .density = 0.1;
Bullet.prototype.shape .radius = 10;

Bullet.prototype.bodyDef = new b2BodyDef();
Bullet.prototype.bodyDef.AddShape(Bullet.prototype.shape);

Bullet.prototype.speed = 200;
