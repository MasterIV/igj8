function CarrierShip(x, y, world, speed, definition) {
	this.world = world;
	this.sprite = new AnimationSprite(definition.sprite, 5);
	this.killAnimation = null;
	this.killAnimationDuration = 5000;
	this.killAnimationTime = 0;
	this.killAnimationStep = 0;
	this.definition = definition;

	this.lastSpawn = 0;

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
		var weakPoint = new WeakPoint(definition.weak_points[i].x + x,definition.weak_points[i].y + y, this, world, hitPoints.point2);
		this.entities.push(weakPoint);
	}

}

CarrierShip.prototype = new Entity;


CarrierShip.prototype.draw = function ( ctx ) {
	var frame = 0;
	if (this.killAnimation != null) {
		if (this.killAnimationTime >= 2500)
			frame = ((this.killAnimationTime - 2500) / 500) | 0;
		this.sprite.rotatecenter(ctx, this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y, frame, this.body.GetRotation(), this.definition.offset.x, this.definition.offset.y);
	} else {
		this.sprite.center(ctx, this.body.GetCenterPosition().x + this.definition.offset.x,this.body.GetCenterPosition().y+ this.definition.offset.y, frame);
	}

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};

CarrierShip.prototype.update = function ( delta ) {

	if (this.killAnimation != null) {
		this.killAnimationTime += delta;
		if (this.killAnimationStep < 1) {
			game.scene.entities.push( new Animation( 'img/_mothershipDestroyed.png', 70, this.body.GetCenterPosition().x + Math.random()*200-100, this.body.GetCenterPosition().y + Math.random()*200-100, 2000 ) );
			this.killAnimationStep++;
		}
		if (this.killAnimationTime >= 600 && this.killAnimationStep < 2) {
			game.scene.entities.push( new Animation( 'img/_mothershipDestroyed.png', 70, this.body.GetCenterPosition().x + Math.random()*200-100, this.body.GetCenterPosition().y + Math.random()*200-100, 2000 ) );
			this.killAnimationStep++;
		}
		if (this.killAnimationTime % 200 < 20)
			game.scene.entities.push( new Animation( 'img/_fighterDestroyed.png', 16, this.body.GetCenterPosition().x + Math.random()*300-150, this.body.GetCenterPosition().y + Math.random()*200-100, 2000 ) );
		if (this.killAnimationTime >= this.killAnimationDuration) {

			for(var i =0;i<this.entities.length;i++) {
				this.world.DestroyBody(this.entities[i].body);
				arrayRemove( game.scene.entities, this.entities[i]);
			}

			this.world.DestroyBody(this.body);
			this.sprite = null;
			arrayRemove( game.scene.entities, this);
			arrayRemove( game.scene.ships, this);
		}
	} else {
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

	this.lastSpawn += delta;
	if (this.lastSpawn > 5000) {
		this.spawnFighter();
		this.lastSpawn = 0;
	}

	if (!hp) this.destroy();
};

CarrierShip.prototype.spawnFighter = function (  ) {
	var spawnPosition = this.definition.hangar_positions[(Math.random()*this.definition.hangar_positions.length)|0];
	var newFighter = new Fighter(spawnPosition.x + this.body.GetCenterPosition().x - 200,spawnPosition.y+ this.body.GetCenterPosition().y - 125,this.world,this.definition.fighter)
	game.scene.entities.push(newFighter);

	var spawnAnimation = new Animation('img/_fighterSpawn.png',8,spawnPosition.x + this.body.GetCenterPosition().x - 200 - 5,spawnPosition.y+ this.body.GetCenterPosition().y - 125 +10,500);
	game.scene.entities.push(spawnAnimation);
};

CarrierShip.prototype.destroy = function (  ) {
	if (this.killAnimation != null) return;
	this.killAnimation = true;
	this.body.SetLinearVelocity( new b2Vec2( -2, 0 ));
	this.body.SetAngularVelocity( Math.random() * 0.1 - 0.05 );
};