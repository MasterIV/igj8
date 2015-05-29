function Bullet( world, position, direction ) {
	//var velocity = new Box2D.b2Vec2( direction.x, direction.y );
	//velocity.Normalize();
	//velocity.op_mul(this.speed);

	var velocity = new Box2D.b2Vec2( 200.0, 0.0 );

	this.bodyDef.set_position(new Box2D.b2Vec2( position.x, position.y ));
	this.body = world.CreateBody(this.bodyDef);
	this.body.CreateFixture(this.fixtureDef);
	this.body.SetLinearVelocity(velocity);
}

Bullet.prototype.draw = function( ctx ) {
	var pos = this.body.GetWorldCenter();
	ctx.drawImage( g['img/shot.png'], pos.get_x()-11, pos.get_y()-11 );
};

Bullet.prototype.bodyDef = new Box2D.b2BodyDef();
Bullet.prototype.bodyDef.set_type(Box2D.b2_dynamicBody);

Bullet.prototype.shape = new Box2D.b2CircleShape();
Bullet.prototype.shape.set_m_radius( 11.0 );

Bullet.prototype.fixtureDef = new Box2D.b2FixtureDef();
Bullet.prototype.fixtureDef.set_shape( Bullet.prototype.shape );
Bullet.prototype.fixtureDef.set_friction( 1.0 );
Bullet.prototype.fixtureDef.set_density( 1.0 );
Bullet.prototype.fixtureDef.set_restitution( 0.1 );


Bullet.prototype.speed = 5000;
