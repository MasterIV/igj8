function Fighter(x, y, world, definition) {
	this.world = world;
	this.sprite = new Sprite(definition.sprite);
	this.killAnimation = null;
	this.killAnimationDuration = 1000;
	this.killAnimationTime = 0;
	this.definition = definition;


	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(Fighter.prototype.polygonShape);

	this.body = world.CreateBody(this.bodyDef);


	this.body.SetLinearVelocity( new b2Vec2( -50 - Math.random()*30 , -10 + Math.random()*20));


}

Fighter.prototype = new Entity;
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
	this.sprite.center(ctx, this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y);

	if (this.killAnimation != null) {
		this.killAnimation.center(ctx, this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y, ((this.killAnimationTime/this.killAnimationDuration)*20)|0)
	}
}

Fighter.prototype.update = function ( delta ) {
	if (this.killAnimation != null) {
		this.killAnimationTime += delta;
	}

	if (this.killAnimationTime >= this.killAnimationDuration) {
		game.scene.entities.push(new Animation('img/_fighterDestroyed.png',16,this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y,1000))

		arrayRemove( game.scene.entities, this);
		this.world.DestroyBody(this.body);
	}
}

Fighter.prototype.hit = function (  ) {
	this.destroy();
}

Fighter.prototype.destroy = function (  ) {
	this.killAnimation = new AnimationSprite('img/_fighterBurning.png', 20);

}
