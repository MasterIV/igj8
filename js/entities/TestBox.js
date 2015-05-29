function TestBox(x, y, world) {
	this.position = new V2(x,y);

	this.bodyDef = new Box2D.b2BodyDef;
	this.bodyDef.type = Box2D.b2_dynamicBody;
	//this.bodyDef.position.set(this.position.x, this.position.y);
	this.bodyDef.angle = 0;

	//this.body = new Box2D.b2Body(this.bodyDef);

	this.fixDef = new Box2D.b2FixtureDef;
}

TestBox.prototype = new Box2DEntity;


TestBox.prototype.draw = function ( ctx ) {
	//...
}

TestBox.prototype.update = function ( delta ) {
	//...
}