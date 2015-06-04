function Fighter(x, y, world, definition, speed, type) {
	this.world = world;
	this.sprite = new Sprite(definition.sprite);
	this.killAnimation = null;
	this.killAnimationDuration = 750;
	this.killAnimationTime = 0;
	this.definition = definition;
	this.speed = speed;
	this.type = type;

	this.flightCorretion = 0;

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(Fighter.prototype.polygonShape);

	this.body = world.CreateBody(this.bodyDef);
	this.body.SetLinearVelocity( new b2Vec2( -speed , -10 + Math.random()*20));

	this.x = x;
	this.y = y;

	this.entities = [];

	this.upgrade = null;
	if (this.type == 1) {
		this.upgrade = new FighterTopShield(this, world);
		this.entities.push(this.upgrade);
	} else if (this.type == 2) {
		this.upgrade = new FighterBottomShield(this, world);
		this.entities.push(this.upgrade);
	}
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
	this.sprite.rotateCenter(ctx, this.x, this.y , this.body.GetRotation());

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

	 this.flightCorretion += delta;
	if (this.y < 50 || this.y > game.display.height - 50 || (this.flightCorretion > 10000 && this.body.GetLinearVelocity().x > 0)) {

		if (this.y > 360) {
			this.body.SetLinearVelocity( new b2Vec2( -this.speed , -5 - Math.random()*10));
		} else {
			this.body.SetLinearVelocity( new b2Vec2( -this.speed , 5 + Math.random()*10));
		}

		this.flightCorretion = 0;
	}


	if (this.killAnimationTime >= this.killAnimationDuration) {
		game.scene.entities.push(new Animation('img/_fighterDestroyed.png', 16, this.x, this.y, 1000))

		arrayRemove( game.scene.entities, this);
		this.world.DestroyBody(this.body);

		if (this.upgrade != null) {
			arrayRemove( game.scene.entities, this.upgrade);
			this.world.DestroyBody(this.upgrade.body);
			upgrades.pointbuffer += 5;
		}
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
	this.body.SetAngularVelocity( Math.random() * 0.2 - 0.1 );
};
