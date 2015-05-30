function CarrierShip(x, y, world, definition) {

	this.sprite = new Sprite('img/mothership.png');


	this.polygonShape = new b2PolyDef();
	this.points = [];
	for(var i =0;i<definition.polygon[0].length;i++) {
		this.points.push(new b2Vec2(definition.polygon[0][i].x,definition.polygon[0][i].y));
	}

	this.polygonShape.vertices = this.points;
	this.polygonShape.vertexCount = this.points.length;
	this.polygonShape.density = 1.0;
	this.polygonShape.radius = 20;
	this.polygonShape.restitution = 1.0;
	this.polygonShape.friction = 0;

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(this.polygonShape );


	this.body = world.CreateBody(this.bodyDef);
	this.body.SetLinearVelocity( new b2Vec2( -50, 0 ));

	this.entities = [];
	for(var i =0;i<definition.weak_points.length;i++) {
		var weakPoint = new WeakPoint(definition.weak_points[i].x + x,definition.weak_points[i].y + y, this, world);
		this.entities.push(weakPoint);
	}


}

CarrierShip.prototype = new Entity;


CarrierShip.prototype.draw = function ( ctx ) {

	this.sprite.center(ctx, this.body.GetCenterPosition().x,this.body.GetCenterPosition().y);

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
}

CarrierShip.prototype.update = function ( delta ) {
	//...
	//this.body.ApplyForce(new b2Vec2(300,200));
	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].update )
			this.entities[i].update( delta );
}
