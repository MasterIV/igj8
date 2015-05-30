function CarrierShip(x, y, world, definition) {

	this.sprite = new Sprite('img/mothership.png');


	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.set(x,y);


	this.body = world.CreateBody(this.bodyDef);

	this.polygonShape = new b2PolygonShape;
	//this.polygon.SetAsBox(1,1);
	this.points = [];
	for(var i =0;i<definition.polygon[0].length;i++) {
		console.log(definition.polygon[0][i].x,definition.polygon[0][i].y);
		this.points.push(new b2Vec2(definition.polygon[0][i].x,definition.polygon[0][i].y));
	}

	console.log(this.points);
	this.polygonShape.Set(this.points, this.points.length);

	this.fixDef = new b2FixtureDef;
	this.fixDef.set_shape(this.polygonShape);



	//this.fixDef.set_density(1);
	//this.fixDef.set_density(1);
	//this.fixDef.set_mass(1);

	this.body.SetLinearVelocity( new b2Vec2( -10, 0 ));
	//this.body.ResetMassData();

	//
	//this.body.ApplyLinearImpulse(new b2Vec2(xspeed,yspeed));


	this.fixture = this.body.CreateFixture(this.fixDef);

}

CarrierShip.prototype = new Entity;


CarrierShip.prototype.draw = function ( ctx ) {

	this.sprite.center(ctx, this.body.GetWorldCenter().get_x(),this.body.GetWorldCenter().get_y());
}

CarrierShip.prototype.update = function ( delta ) {
	//...
	//this.body.ApplyForce(new b2Vec2(300,200));

}