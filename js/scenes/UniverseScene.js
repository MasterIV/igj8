function UniverseScene() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(0, 0);
	worldAABB.maxVertex.Set(1280, 720);

	var world =  new b2World(worldAABB, new b2Vec2( 0, 0 ), true);


	var bullets = [];

	this.entities = [
		new Cannon( 0, 360 ),
		{update: function(delta) { world.Step(delta/1000, 10, 10 );}}
	];

	this.fire = function( origin ) {
		var bullet = new Bullet( world, origin, mouse.dif( origin ));
		bullets.push( bullet );
		this.entities.push( bullet );
	};
}

UniverseScene.prototype = new Scene;

UniverseScene.prototype.draw = function( ctx ) {
	ctx.clearRect(0,0,1280,720);

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};