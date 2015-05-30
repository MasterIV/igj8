function CarrierShip(x, y, world, speed, definition, hp) {
	this.world = world;
	this.sprite = new Sprite(definition.sprite);
	this.definition = definition;

	this.bodyDef = new b2BodyDef();
	this.bodyDef.position.Set(x,y);
	this.bodyDef.preventRotation = true;

	this.polygonShapes = [];
	this.polygonShape = new b2PolyDef();
	for(var c =0;c<definition.polygon.length;c++) {
		var points = [];
		var polygonShape = new b2PolyDef();
		for(var i =0;i<definition.polygon[c].length;i++) {
			points.push(new b2Vec2(definition.polygon[c][i].x,definition.polygon[c][i].y));
		}

		polygonShape.vertices = points;
		polygonShape.vertexCount = points.length;
		polygonShape.density = 1.0;
		polygonShape.radius = 20;
		polygonShape.restitution = 1.0;
		polygonShape.friction = 0;

		polygonShape.categoryBits = 0x0004;
		polygonShape.maskBits = 0x0002;

		this.polygonShapes.push(polygonShape);
		this.bodyDef.AddShape(polygonShape);
	}


	this.body = world.CreateBody(this.bodyDef);
	this.body.SetLinearVelocity( new b2Vec2( -speed, 0 ));

	this.entities = [];
	for(var i =0;i<definition.weak_points.length && i<3;i++) {
		var weakPoint = new WeakPoint(definition.weak_points[i].x + x,definition.weak_points[i].y + y, this, world, definition.base_hp);
		this.entities.push(weakPoint);
	}


}

CarrierShip.prototype = new Entity;


CarrierShip.prototype.draw = function ( ctx ) {
	this.sprite.center(ctx, this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y);

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
}

CarrierShip.prototype.update = function ( delta ) {
	var hp = 0;

	for( var i = 0; i < this.entities.length; i++ ) {
		if( this.entities[i].update )
			this.entities[i].update( delta );
		if( this.entities[i].alive )
			if ( this.entities[i].alive() )
				hp++;
	}
	if (!hp) this.destroy();
}

CarrierShip.prototype.spawnFighter = function (  ) {
	var spawnPosition = this.definition.hangar_positions[(Math.random()*this.definition.hangar_positions.length)|0];
	var newFighter = new Fighter(spawnPosition.x + this.body.GetCenterPosition().x - 200,spawnPosition.y+ this.body.GetCenterPosition().y - 125,this.world,this.definition.fighter)
	game.scene.entities.push(newFighter);
}

CarrierShip.prototype.destroy = function (  ) {
	var x = this.body.GetCenterPosition().x;
	var y = this.body.GetCenterPosition().y;
	game.scene.entities.push( new Animation( 'img/_mothershipDestroyed.png', 70, x + Math.random()*200-100, y + Math.random()*200-100, 2000 ) );
	setTimeout(function() {
		game.scene.entities.push( new Animation( 'img/_mothershipDestroyed.png', 70, x + Math.random()*200-100, y + Math.random()*200-100, 2000 ) );
	}, 600);
	this.world.DestroyBody(this.body);
	this.sprite = null;
	arrayRemove( game.scene.entities, this);
	arrayRemove( game.scene.ships, this);
}