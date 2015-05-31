function FighterBottomShield(fighter, world) {
	this.world = world;
	this.definition = fighterUpgrades.shieldBottom;
	this.sprite = new AnimationSprite(this.definition.sprite, 3);
	this.fighter = fighter;
	this.counter = new Framecounter(50);


	this.x = this.fighter.body.GetCenterPosition().x + this.definition.offset.x;
	this.y = this.fighter.body.GetCenterPosition().y + this.definition.offset.y;


	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(this.x, this.y );
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(FighterBottomShield.prototype.polygonShape);

	this.body = world.CreateBody(this.bodyDef);


	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(this.x, this.y );
	jointDef.body1 = fighter.body
	jointDef.body2 = this.body;
	world.CreateJoint(jointDef);
}

FighterBottomShield.prototype.polygonShape = new b2PolyDef();
FighterBottomShield.prototype.polygonShape.vertices = [new b2Vec2(-20,-14), new b2Vec2(-10,-14), new b2Vec2(10,15), new b2Vec2(0,15)];
FighterBottomShield.prototype.polygonShape.vertexCount = FighterBottomShield.prototype.polygonShape.vertices.length;
FighterBottomShield.prototype.polygonShape.density = 1.0;
FighterBottomShield.prototype.polygonShape.radius = 20;
FighterBottomShield.prototype.polygonShape.restitution = 1.0;
FighterBottomShield.prototype.polygonShape.friction = 0;
FighterBottomShield.prototype.polygonShape.categoryBits = 0x0204;
FighterBottomShield.prototype.polygonShape.maskBits = 0x0402;

FighterBottomShield.prototype.draw = function ( ctx ) {
	this.sprite.center(ctx, this.x, this.y, this.counter.frame%3 );
};

FighterBottomShield.prototype.update = function ( delta ) {
	this.x = this.fighter.body.GetCenterPosition().x + this.definition.offset.x;
	this.y = this.fighter.body.GetCenterPosition().y + this.definition.offset.y;
	this.counter.update( delta );
};

FighterBottomShield.prototype.hit = function (  ) {

};
