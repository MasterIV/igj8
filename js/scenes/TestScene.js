function TestScene() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(0, 0);
	worldAABB.maxVertex.Set(1280, 720);

	this.world =  new b2World(worldAABB, new b2Vec2( 0, 0 ), true);


	this.entities = [
		new CarrierShip(800,400, this.world, carrier.example),
		new debugBox2d(this.world)
	];
};

TestScene.prototype.update = function( delta ) {
	this.world.Step(delta/1000, 10, 210);

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

/*
 function TestScene() {
 // Matter.js module aliases
 this.Engine = Matter.Engine;
 this.World = Matter.World;
 this.Bodies = Matter.Bodies;

 // create a Matter.js engine
 this.iEngine = this.Engine.create(document.body);

 // create two boxes and a ground
 var boxA = this.Bodies.rectangle(400, 200, 80, 80);
 var boxB = this.Bodies.rectangle(450, 50, 80, 80);
 var ground = this.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

 // add all of the bodies to the world
 this.World.add(this.iEngine.world, [boxA, boxB, ground]);



 this.entities = [new CarrierShip(800,400, this.world, carrier.example)];
 };

 TestScene.prototype.update = function( delta ) {
 this.Engine.update(this.iEngine, delta, 1);

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
 */