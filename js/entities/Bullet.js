function Bullet( world, position, direction ) {
	var velocity = new b2Vec2( direction.x, direction.y );
	velocity.Normalize();

	this.bodyDef.position.Set( position.x + velocity.x*50, position.y + velocity.y*50 );
	this.body = world.CreateBody(this.bodyDef);

	velocity.Multiply(this.speed);
	this.body.SetLinearVelocity(velocity);
}

Bullet.prototype.draw = function( ctx ) {
	var pos = this.body.GetCenterPosition();
	ctx.drawImage( g['img/shot.png'], pos.x-11, pos.y-11 );
};

Bullet.prototype.shape = new b2CircleDef();
Bullet.prototype.shape .density = 0.1;
Bullet.prototype.shape .radius = 10;
//Bullet.prototype.shape .restitution = 1.0;
//Bullet.prototype.shape .mass = 10.0;
//Bullet.prototype.shape .friction = 0;

Bullet.prototype.bodyDef = new b2BodyDef();
Bullet.prototype.bodyDef.AddShape(Bullet.prototype.shape);

Bullet.prototype.speed = 200;
