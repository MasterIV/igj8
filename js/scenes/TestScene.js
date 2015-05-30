function TestScene() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(0, 0);
	worldAABB.maxVertex.Set(1280, 720);

	this.world =  new b2World(worldAABB, new b2Vec2( 0, 0 ), true);


	this.entities = [];
	this.entities.push(new CarrierShip(800,400, this.world, carrier.example));
	this.entities.push(new debugBox2d(this.world));

};

TestScene.prototype.update = function( delta ) {
	this.world.Step(delta/1000, 10, 10);

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].update )
			this.entities[i].update( delta );
};

TestScene.prototype.draw = function( ctx ) {
	ctx.clearRect(0,0,1280,720);


	if( this.bg )
		this.bg.draw( ctx, 0 ,0 );

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};