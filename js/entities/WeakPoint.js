function WeakPoint(x, y, carrier, world) {



	this.polygonShape = new b2PolyDef();
	//this.polygon.SetAsBox(1,1);
	this.points = [];
	this.points.push(new b2Vec2(0,0));
	this.points.push(new b2Vec2(30,0));
	this.points.push(new b2Vec2(30,30));
	this.points.push(new b2Vec2(0,30));

	this.polygonShape.vertices = this.points;
	this.polygonShape.vertexCount = this.points.length;
	this.polygonShape.density = 1.0;
	this.polygonShape.radius = 20;
	this.polygonShape.restitution = 1.0;
	this.polygonShape.friction = 0;

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.AddShape(this.polygonShape );


	this.body = world.CreateBody(this.bodyDef);

	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(x+15, y+15);
	jointDef.body1 = carrier.body
	jointDef.body2 = this.body;
	world.CreateJoint(jointDef);



}

WeakPoint.prototype = new Entity;


WeakPoint.prototype.draw = function ( ctx ) {
	ctx.fillStyle = 'red';
	ctx.fillRect( this.body.GetCenterPosition().x,this.body.GetCenterPosition().y,30,30);
}

WeakPoint.prototype.update = function ( delta ) {
	//...
	//this.body.ApplyForce(new b2Vec2(300,200));

}