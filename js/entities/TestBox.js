function TestBox(x, y, world) {
	this.position = new V2(x,y);

	this.bodyDef = new Box2D.b2BodyDef;
	this.bodyDef.set_type(Box2D.b2_dynamicBody);
	this.bodyDef.set_position(this.position.x, this.position.y);
	this.bodyDef.set_angle(0);


	this.body = world.CreateBody(world);

	this.polygonShape = new Box2D.b2PolygonShape;
	this.polygonShape.SetAsBox(1,1);

	this.fixDef = new Box2D.b2FixtureDef;
	this.fixDef.set_shape(this.polygonShape);
	this.fixDef.set_density(1);

	this.fixture = this.body.CreateFixture(this.fixDef);
}

TestBox.prototype = new Box2DEntity;


TestBox.prototype.draw = function ( ctx ) {
	ctx.rect(this.body.get_position().x, this.body.get_position().y, 10,10)
}

TestBox.prototype.update = function ( delta ) {
	//...
}