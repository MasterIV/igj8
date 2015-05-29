function TestScene() {
	this.entities = [];

	this.world = new Box2D.b2World( new Box2D.b2Vec2(0.0, -10.0) );


	this.aabb = new Box2D.b2AABB();

	var d = 0.001;
	aabb.set_lowerBound(new b2Vec2(mousePosWorld.x - d, mousePosWorld.y - d));
	aabb.set_upperBound(new b2Vec2(mousePosWorld.x + d, mousePosWorld.y + d));

	console.log(this.aabb);
};

TestScene.prototype.update = function( delta ) {
	this.world.Step(delta/1000, 3, 2);

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].update )
			this.entities[i].update( delta );
};

TestScene.prototype.draw = function( ctx ) {
	if( this.bg )
		this.bg.draw( ctx, 0 ,0 );

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};