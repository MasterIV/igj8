function UniverseScene() {
	var world =  new Box2D.b2World(new Box2D.b2Vec2( 0, 0 ), true);
	var bullets = [];

	this.entities = [
		new Cannon( 0, 360 ),
		{update: function(delta) { world.Step(delta/1000, 3, 2 );}}
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