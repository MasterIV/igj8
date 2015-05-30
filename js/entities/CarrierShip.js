function CarrierShip(x, y, world, speed, definition) {

	this.sprite = new Sprite(definition.sprite);
	this.definition = definition;

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;

	this.polygonShapes = [];
	this.polygonShape = new b2PolyDef();
	for(var c =0;c<definition.polygon.length;c++) {
		var points = [];
		var polygonShape = new b2PolyDef();
		for(var i =0;i<definition.polygon[c].length;i++) {
			points.push(new b2Vec2(definition.polygon[c][i].x,definition.polygon[c][i].y));
		}

		polygonShape.vertices = points;
		polygonShape.vertexCount = points.length;
		polygonShape.density = 1.0;
		polygonShape.radius = 20;
		polygonShape.restitution = 1.0;
		polygonShape.friction = 0;

		this.polygonShapes.push(polygonShape);
		this.bodyDef.AddShape(polygonShape);
	}





	this.body = world.CreateBody(this.bodyDef);
	this.body.SetLinearVelocity( new b2Vec2( -speed, 0 ));

	this.entities = [];
	for(var i =0;i<definition.weak_points.length;i++) {
		var weakPoint = new WeakPoint(definition.weak_points[i].x + x,definition.weak_points[i].y + y, this, world);
		this.entities.push(weakPoint);
	}


}

CarrierShip.prototype = new Entity;


CarrierShip.prototype.draw = function ( ctx ) {
	//console.log(this.body.GetCenterPosition().x,this.body.GetCenterPosition().y);
	this.sprite.center(ctx, this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y);

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
