function WeakPoint(x, y, carrier, world, definition) {
	this.carrier = carrier;
	this.world = world;
	this.hp = definition.hp;
	this.definition = definition;

	this.sprite = new AnimationSprite(definition.sprite, 11);
	this.frameCounter = 0;

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;
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
WeakPoint.prototype.polygonShape.categoryBits = 0x0004;
WeakPoint.prototype.polygonShape.maskBits = 0x0002;

WeakPoint.prototype.draw = function ( ctx ) {
	var frame = 0;
	if (this.hp == this.definition.hp) {
		frame = ((this.frameCounter/100)|0)%5;
	} else if (this.hp > 0) {
		frame = 5 + ((this.frameCounter/100)|0)%5;
	} else {
		frame = 10;
	}


	if( this.sprite )
		this.sprite.center(ctx, this.body.GetCenterPosition().x,this.body.GetCenterPosition().y, frame);
}

WeakPoint.prototype.update = function ( delta ) {
	this.frameCounter += delta;
}

WeakPoint.prototype.hit = function ( damage ) {
	if ( this.hp == 0) return;
	this.hp -= damage;

	if (this.hp <= 0) {
		game.scene.entities.push( new Animation( 'img/_weakspotDestroyed.png', 40, this.body.GetCenterPosition().x, this.body.GetCenterPosition().y, 1000 ) );

		this.hp = 0;
	}
}

WeakPoint.prototype.alive = function() {
	return this.hp > 0;
}