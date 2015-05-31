function FighterTopShield(fighter, world) {
	this.world = world;
	this.definition = fighterUpgrades.shieldTop;
	this.sprite = new AnimationSprite(this.definition.sprite, 3);
	this.fighter = fighter;
	this.counter = new Framecounter(50);


	this.x = this.fighter.body.GetCenterPosition().x + this.definition.offset.x;
	this.y = this.fighter.body.GetCenterPosition().y + this.definition.offset.y;


	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(this.x, this.y );
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(FighterTopShield.prototype.polygonShape);

	this.body = world.CreateBody(this.bodyDef);


	var jointDef = new b2RevoluteJointDef();
	jointDef.anchorPoint.Set(this.x, this.y );
	jointDef.body1 = fighter.body
	jointDef.body2 = this.body;
	world.CreateJoint(jointDef);
}

FighterTopShield.prototype.polygonShape = new b2PolyDef();
FighterTopShield.prototype.polygonShape.vertices = [ new b2Vec2(0,-15), new b2Vec2(10,-15), new b2Vec2(-10,14), new b2Vec2(-20,14)];
FighterTopShield.prototype.polygonShape.vertexCount = FighterTopShield.prototype.polygonShape.vertices.length;
FighterTopShield.prototype.polygonShape.density = 1.0;
FighterTopShield.prototype.polygonShape.radius = 20;
FighterTopShield.prototype.polygonShape.restitution = 1.0;
FighterTopShield.prototype.polygonShape.friction = 0;
FighterTopShield.prototype.polygonShape.categoryBits = 0x0204;
FighterTopShield.prototype.polygonShape.maskBits = 0x0202;

FighterTopShield.prototype.draw = function ( ctx ) {
	this.sprite.center(ctx, this.x, this.y, this.counter.frame%3 );
};

FighterTopShield.prototype.update = function ( delta ) {
	this.x = this.fighter.body.GetCenterPosition().x + this.definition.offset.x;
	this.y = this.fighter.body.GetCenterPosition().y + this.definition.offset.y;
	this.counter.update( delta );
};

FighterTopShield.prototype.hit = function (  ) {

};
