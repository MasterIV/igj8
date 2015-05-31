function CarrierShip(x, y, world, speed, definition, values) {
	this.world = world;
	this.sprite = new AnimationSprite(definition.sprite, 5);
	this.shipPropulsion = new AnimationSprite('img/_shipPropulsion.png', 30);
	this.shipPropulsionCounter = new Framecounter(50);

	this.destroyerShotSpawnSprite = new AnimationSprite('img/_destroyerShotSpawn.png', 5);
	this.destroyerShotSpawnSpriteCounter = new Framecounter(50);

	this.killAnimation = null;
	this.killAnimationDuration = 5000;
	this.killAnimationTime = 0;
	this.killAnimationStep = 0;
	this.definition = definition;

	this.destroyerShotChargeAnimation = null;
	this.destroyerShotAnimation = null;

	this.startY = y + 125;
	this.startSpeed = speed;

	this.lastSpawn = [0,0,0];
	this.spawnRate = values.fighterspawn;
	this.spawnType = values.fightertype;
	this.spawnSpeed = values.fighterspeed;
	this.spawnHangar = values.hangarspawn;

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

	var weakpoints = [];
	var weakpointanchors = definition.weak_points.slice();
	for (var i = 0; i < 5; i++) {
		var count = 0;
		var type = null;
		switch (i) {
			case 0:
				count = values.hit1;
				type = hitPoints.point1;
				break;
			case 1:
				count = values.hit2;
				type = hitPoints.point2;
				break;
			case 2:
				count = values.hit3;
				type = hitPoints.point3;
				break;
			case 3:
				count = values.hit4;
				type = hitPoints.point4;
				break;
			case 4:
				count = values.hit5;
				type = hitPoints.point5;
				break;
		}
		for (var j = 0; j < count; j++)
			weakpoints.push(type);
	}
	shuffle(weakpoints);
	shuffle(weakpointanchors);
	for(var i = 0; i < weakpoints.length; i++) {
		var weakPoint = new WeakPoint(weakpointanchors[i].x + x - 15,weakpointanchors[i].y + y - 15,weakpointanchors[i].rotate, this, world, weakpoints[i]);
		this.entities.push(weakPoint);
	}

}

CarrierShip.prototype = new Entity;


CarrierShip.prototype.draw = function ( ctx ) {
	this.shipPropulsion.center(ctx, this.x + 250,this.y,this.shipPropulsionCounter.frame%30);



	var frame = 0;
	if (this.killAnimation != null) {
		if (this.killAnimationTime >= 2500)
			frame = ((this.killAnimationTime - 2500) / 500) | 0;
		this.sprite.rotateCenter(ctx, this.x, this.y, frame, this.body.GetRotation());
	} else {
		this.sprite.center(ctx, this.x, this.y, frame);
	}

	if (this.destroyerShotAnimation != null) {
		this.destroyerShotSpawnSprite.center(ctx,this.x - 200 + this.definition.destroyerChargeOffset.x, this.y + this.definition.destroyerChargeOffset.y,this.destroyerShotSpawnSpriteCounter.frame%5);
	}

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};

CarrierShip.prototype.update = function ( delta ) {
	this.shipPropulsionCounter.update(delta);
	this.destroyerShotSpawnSpriteCounter.update(delta);

	this.x = this.body.GetCenterPosition().x + this.definition.offset.x;
	this.y = this.body.GetCenterPosition().y + this.definition.offset.y;

	if (this.killAnimation != null) {
		this.killAnimationTime += delta;

		if (this.killAnimationStep < 1) {
			game.scene.entities.push( new Animation( 'img/_mothershipDestroyed.png', 70, this.x + Math.random()*200-100, this.y + Math.random()*200-100, 2000 ) );
			this.killAnimationStep++;
		}

		if (this.killAnimationTime >= 600 && this.killAnimationStep < 2) {
			game.scene.entities.push( new Animation( 'img/_mothershipDestroyed.png', 70, this.x + Math.random()*200-100, this.y + Math.random()*200-100, 2000 ) );
			this.killAnimationStep++;
		}

		if (this.killAnimationTime % 200 < 20)
			game.scene.entities.push( new Animation( 'img/_fighterDestroyed.png', 16, this.x + Math.random()*300-150, this.y + Math.random()*200-100, 2000 ) );

		if (this.killAnimationTime >= this.killAnimationDuration) {


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

	for (var i = 0; i < 3; i++) {
		if (this.spawnType[i] == 0) continue;
		this.lastSpawn[i] += delta;
		if (this.lastSpawn[i] >= this.spawnRate[i]) {
			this.spawnFighter(i);
			this.lastSpawn[i] = 0;
		}
	}



	if (this.killAnimation == null) {
		var targetSpeed = this.startSpeed * (this.x < this.definition.endXPosition?0.0001:1)
		if (targetSpeed < 0) targetSpeed = 0.01;
		if (targetSpeed < 0.8) this.startDestroyerShot();
		//if (this.destroyerShotAnimation != null) targetSpeed=-100;

		var yDiff = (this.y - this.startY);
		var impulse = new b2Vec2( -targetSpeed, 0 );
		if (yDiff > 10) {
			impulse = new b2Vec2( -targetSpeed, -1 );
		} else if (yDiff < -10){
			impulse = new b2Vec2( -targetSpeed, 1 );
		}
		this.body.SetLinearVelocity( impulse );
	}





	if (!hp) this.destroy();
};

CarrierShip.prototype.spawnFighter = function ( type ) {
	var spawnPosition;
	if (this.spawnHangar[type] == 2)
		spawnPosition = this.definition.hangar_positions[Math.random()>0.5|0];
	else
		spawnPosition = this.definition.hangar_positions[this.spawnHangar[type]];

	var newFighter = new Fighter(spawnPosition.x + this.body.GetCenterPosition().x - 200,spawnPosition.y+ this.body.GetCenterPosition().y - 125,this.world,this.definition.fighter,this.spawnSpeed[type],type);
	game.scene.entities.push(newFighter);

	var spawnAnimation = new Animation('img/_fighterSpawn.png',8,spawnPosition.x + this.body.GetCenterPosition().x - 200 - 5,spawnPosition.y+ this.body.GetCenterPosition().y - 125 +10,500);
	game.scene.entities.push(spawnAnimation);
};

CarrierShip.prototype.destroy = function (  ) {
	if (this.killAnimation != null) return;
	this.killAnimation = true;
	this.body.SetLinearVelocity( new b2Vec2( -2, 0 ));
	this.body.SetAngularVelocity( Math.random() * 0.1 - 0.05 );
	sound.play('sounds/ship_destroy/mothership_destroyed_long.ogg');

	arrayRemove( game.scene.entities, this.destroyerShotChargeAnimation);
	arrayRemove( game.scene.entities, this.destroyerShotAnimation);

	for(var i =0;i<this.entities.length;i++) {
		this.world.DestroyBody(this.entities[i].body);
		arrayRemove( game.scene.entities, this.entities[i]);
	}
};

CarrierShip.prototype.startDestroyerShot = function (  ) {
	if (this.destroyerShotChargeAnimation == null) {
		var self = this;
		this.destroyerShotChargeAnimation = new Animation('img/_destroyerCharge.png', 80, this.x - 200 + this.definition.destroyerChargeOffset.x, this.y + this.definition.destroyerChargeOffset.y, 5000, function () {
			self.destroyerShotAnimation = new Animation('img/_destroyerShot_16fps.png', 16, self.x - 200 + self.definition.destroyerShotOffset.x, self.y + self.definition.destroyerShotOffset.y, 2000, function () {
				game.scene.hpBar.reduce(5);
				self.destroyerShotChargeAnimation = null;
				self.destroyerShotAnimation = null;
			});
			game.scene.entities.push(self.destroyerShotAnimation);
		});
		game.scene.entities.push(this.destroyerShotChargeAnimation);
	}

};