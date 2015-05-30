function FighterShield(fighter, world, definition) {
	this.world = world;
	this.sprite = new Sprite(definition.sprite);
	this.definition = definition;
	this.fighter = fighter;


	this.x = this.fighter.body.GetCenterPosition().x;
	this.y = this.fighter.body.GetCenterPosition().y;


	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(this.x + this.definition.offset.x, this.y + this.definition.offset.y);
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(FighterShield.prototype.polygonShape);

	this.body = world.CreateBody(this.bodyDef);


	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(fighter.x, fighter.y );
	jointDef.body1 = fighter.body
	jointDef.body2 = this.body;
	world.CreateJoint(jointDef);
}

FighterShield.prototype.polygonShape = new b2PolyDef();
//FighterShield.prototype.polygonShape.vertices = [new b2Vec2(0,0),new b2Vec2(30,0),new b2Vec2(30,20),new b2Vec2(0,20)];
FighterShield.prototype.polygonShape.vertexCount = FighterShield.prototype.polygonShape.vertices.length;
FighterShield.prototype.polygonShape.density = 1.0;
FighterShield.prototype.polygonShape.radius = 20;
FighterShield.prototype.polygonShape.restitution = 1.0;
FighterShield.prototype.polygonShape.friction = 0;
FighterShield.prototype.polygonShape.categoryBits = 0x0004;
FighterShield.prototype.polygonShape.maskBits = 0x0002;

FighterShield.prototype.draw = function ( ctx ) {
	this.sprite.center(ctx, this.x, this.y );
};

FighterShield.prototype.update = function ( delta ) {
	this.x = this.fighter.body.GetCenterPosition().x + this.definition.offset.x;
	this.y = this.fighter.body.GetCenterPosition().y + this.definition.offset.y;
};

FighterShield.prototype.hit = function (  ) {
};
