function Bullet( world, position, direction, rocket ) {
	var velocity = new b2Vec2( direction.x, direction.y );
	velocity.Normalize();

	this.bodyDef.position.Set( position.x + velocity.x*50, position.y + velocity.y*50 );
	this.body = world.CreateBody(this.bodyDef);

	velocity.Multiply(this.speed);
	this.body.SetLinearVelocity(velocity);

	var f = rocket ? 5 : 16;
	var sprite = rocket ? new AnimationSprite('img/_rocketShot.png', f) : new AnimationSprite('img/_normalShot.png', f);
	var counter = new Framecounter(50);


	this.damage = rocket ? getNormalDamage() : getNormalDamage();

	this.draw = function( ctx ) {
		var pos = this.body.GetCenterPosition();
		var vel = this.body.GetLinearVelocity();
		var angle = Math.atan2( vel.x, vel.y ) * -1 + Math.PI;
		sprite.rotateCenter( ctx, pos.x, pos.y, counter.frame%f, angle );
	};

	this.update = function( delta ) {
		counter.update(delta);
		var pos = this.body.GetCenterPosition();
		if( pos.x > 1300 || pos.y < -20 || pos.y > 740 )
			game.scene.removeBullet( this );
	};
}

Bullet.prototype.shape = new b2CircleDef();
Bullet.prototype.shape .density = 0.1;
Bullet.prototype.shape .radius = 10;
Bullet.prototype.shape.categoryBits = 0x0022;
Bullet.prototype.shape.maskBits = 0x0024;

Bullet.prototype.bodyDef = new b2BodyDef();
Bullet.prototype.bodyDef.AddShape(Bullet.prototype.shape);

Bullet.prototype.speed = 400;

