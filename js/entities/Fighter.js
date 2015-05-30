function Fighter(x, y, world, definition) {

	this.sprite = new Sprite(definition.sprite);
	this.definition = definition;


	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;
	this.bodyDef.AddShape(Fighter.prototype.polygonShape);


	this.body = world.CreateBody(this.bodyDef);


}

Fighter.prototype = new Entity;
Fighter.prototype.polygonShape = new b2PolyDef();
Fighter.prototype.polygonShape.vertices = [new b2Vec2(0,0),new b2Vec2(30,0),new b2Vec2(30,30),new b2Vec2(0,30)];
Fighter.prototype.polygonShape.vertexCount = Fighter.prototype.polygonShape.vertices.length;
Fighter.prototype.polygonShape.density = 1.0;
Fighter.prototype.polygonShape.radius = 20;
Fighter.prototype.polygonShape.restitution = 1.0;
Fighter.prototype.polygonShape.friction = 0;



Fighter.prototype.draw = function ( ctx ) {
	this.sprite.center(ctx, this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y);
}

Fighter.prototype.update = function ( delta ) {
}

Fighter.prototype.hit = function (  ) {
}
