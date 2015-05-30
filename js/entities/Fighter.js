function Fighter(x, y, world, definition) {
	this.world = world;
	this.sprite = new Sprite(definition.sprite);
	this.killAnimation = null;
	this.killAnimationDuration = 750;
	this.killAnimationTime = 0;
	this.definition = definition;

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(Fighter.prototype.polygonShape);

	this.body = world.CreateBody(this.bodyDef);
	this.body.SetLinearVelocity( new b2Vec2( -50 - Math.random()*30 , -10 + Math.random()*20));

	this.x = x;
	this.y = y;

	this.entities = [];

	//if (Math.random() > 0.5) {
		this.upgrade = new FighterTopShield(this, world);
	//} else {
	//	this.upgrade = new FighterTopShield(this, world);
	//}

	this.entities.push(this.upgrade);
}

Fighter.prototype.polygonShape = new b2PolyDef();
Fighter.prototype.polygonShape.vertices = [new b2Vec2(0,0),new b2Vec2(30,0),new b2Vec2(30,20),new b2Vec2(0,20)];
Fighter.prototype.polygonShape.vertexCount = Fighter.prototype.polygonShape.vertices.length;
Fighter.prototype.polygonShape.density = 1.0;
Fighter.prototype.polygonShape.radius = 20;
Fighter.prototype.polygonShape.restitution = 1.0;
Fighter.prototype.polygonShape.friction = 0;
Fighter.prototype.polygonShape.categoryBits = 0x0004;
Fighter.prototype.polygonShape.maskBits = 0x0002;

Fighter.prototype.draw = function ( ctx ) {
	this.sprite.center(ctx, this.x, this.y );

	if (this.killAnimation != null) {
		this.killAnimation.center(ctx, this.x, this.y, ((this.killAnimationTime/this.killAnimationDuration)*20)|0)
	}

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};

Fighter.prototype.update = function ( delta ) {
	this.x = this.body.GetCenterPosition().x + this.definition.offset.x;
	this.y = this.body.GetCenterPosition().y + this.definition.offset.y;

	if (this.killAnimation != null) {
		this.killAnimationTime += delta;
	} else if( this.x < 0 ) {
		game.scene.hpBar.reduce();
		this.destroy();
	}


	if (this.killAnimationTime >= this.killAnimationDuration) {
		game.scene.entities.push(new Animation('img/_fighterDestroyed.png', 16, this.x, this.y, 1000))

		arrayRemove( game.scene.entities, this);
		this.world.DestroyBody(this.body);
	}

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].update )
			this.entities[i].update( delta );
};

Fighter.prototype.hit = function (  ) {
	this.destroy();
};

Fighter.prototype.destroy = function (  ) {
	this.killAnimation = new AnimationSprite('img/_fighterBurning.png', 15);
};
