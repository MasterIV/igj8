function CarrierShip(x, y) {


	this.sprite = new Sprite('img/mothership.png');
	/*
	this.bodyDef = new Box2D.b2BodyDef;
	this.bodyDef.set_type(Box2D.b2_dynamicBody);
	this.bodyDef.set_position(new Box2D.b2Vec2(x,y));
	this.bodyDef.set_angle(0);


	this.body = world.CreateBody(this.bodyDef);

	this.polygonShape = new Box2D.b2PolygonShape;
	this.polygonShape.SetAsBox(10,10);

	this.fixDef = new Box2D.b2FixtureDef;
	this.fixDef.set_shape(this.polygonShape);
	this.fixDef.set_density(1);
	//this.fixDef.set_density(1);
	//this.fixDef.set_mass(1);

//	this.body.SetLinearVelocity( new Box2D.b2Vec2( 30, 0 ));
	this.body.ResetMassData();

	//
	this.body.ApplyLinearImpulse(new Box2D.b2Vec2(xspeed,yspeed));


	this.fixture = this.body.CreateFixture(this.fixDef);
	*/
}

CarrierShip.prototype = new Entity;


CarrierShip.prototype.draw = function ( ctx ) {

	this.sprite.center(ctx, 100,100);
}

CarrierShip.prototype.update = function ( delta ) {
	//...
	//this.body.ApplyForce(new Box2D.b2Vec2(300,200));

}