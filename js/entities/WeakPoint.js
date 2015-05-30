function WeakPoint(x, y, carrier, world) {

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.AddShape(WeakPoint.prototype.polygonShape);


	this.body = world.CreateBody(this.bodyDef);

	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(x+15, y+15);
	jointDef.body1 = carrier.body
	jointDef.body2 = this.body;
	world.CreateJoint(jointDef);



}

WeakPoint.prototype = new Entity;

WeakPoint.prototype.polygonShape = new b2PolyDef();
WeakPoint.prototype.polygonShape.vertices = [new b2Vec2(0,0),new b2Vec2(30,0),new b2Vec2(30,30),new b2Vec2(0,30)];
WeakPoint.prototype.polygonShape.vertexCount = WeakPoint.prototype.polygonShape.vertices.length;
WeakPoint.prototype.polygonShape.density = 1.0;
WeakPoint.prototype.polygonShape.radius = 20;
WeakPoint.prototype.polygonShape.restitution = 1.0;
WeakPoint.prototype.polygonShape.friction = 0;


WeakPoint.prototype.draw = function ( ctx ) {
	ctx.fillStyle = 'red';
	ctx.fillRect( this.body.GetCenterPosition().x,this.body.GetCenterPosition().y,30,30);
}

WeakPoint.prototype.update = function ( delta ) {
	//...
	//this.body.ApplyForce(new b2Vec2(300,200));

}