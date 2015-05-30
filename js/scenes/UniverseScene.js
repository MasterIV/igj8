function UniverseScene(level) {
	var self = this;

	this.hp = 10;

	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(0 - 1000, 0 - 1000);
	worldAABB.maxVertex.Set(1280*2, 720*2);

	var world =  new b2World(worldAABB, new b2Vec2( 0, 0 ), true);
	var cannon = new Cannon( 0, 360 );
	var ui = new WeaponUI( cannon );

	var bullets =  [];
	var anomalies = [];

	this.entities = [cannon];
	this.ships = [];
	this.level = level;
	this.spawnTime = 0;
	this.nextShip = 0;

	this.hpBar = new HpBar();
	this.hpBar.setHp(this.hp);
	this.entities.push(this.hpBar);
	this.entities.push(new debugBox2d(world));

	this.fire = function( origin, rocket ) {
		var bullet = new Bullet( world, origin, mouse.dif( origin ), rocket );
		bullets.push( bullet );
		this.entities.push( bullet );
		sound.play('sounds/weapon_shot/pulse_cannon_single.ogg');
	};

	this.removeBullet = function( b ) {
		arrayRemove( bullets, b );
		arrayRemove( this.entities, b );
		world.DestroyBody(b.body);
	};

	this.anomaly = function( r, g ) {
		var maxA = 2;
		if( anomalies.length >= maxA ) {
			arrayRemove(this.entities, anomalies.shift());
		}

		var sphere = new Anomaly( mouse.x, mouse.y, r, g );
		anomalies.push( sphere );
		this.entities.push( sphere );
	};

	this.drawEntities = this.draw;
	this.draw = function(ctx) {
		this.drawEntities(ctx);
		ui.draw(ctx);
	};

	this.updateEntities = this.update;
	this.update = function(delta) {
		this.spawnTime += delta;
		if (this.level.ships.length > this.nextShip) {
			if (this.spawnTime >= this.level.ships[this.nextShip].entry) {
				var ship = new CarrierShip(1279, this.level.ships[this.nextShip].y - 125, world, this.level.ships[this.nextShip].speed, this.level.ships[this.nextShip].type, this.level.ships[this.nextShip]);
				this.ships.push(ship);
				this.entities.push(ship);
				this.nextShip++;
			}
		} else {
			if (this.ships.length == 0) {
				this.entities.push( new LevelComplete(640, 360) );
			}
		}

		bullets.each( function( b ) {
			var bullet_position = b.body.GetCenterPosition();

			// Gravitation Influence
			anomalies.each( function(a) {
				var anomaly_position = a.GetCenterPosition();

				var distance = new b2Vec2(0,0);
				distance.Add(bullet_position);
				distance.Subtract(anomaly_position);

				if( distance.Length() < a.radius ) {
					var force = a.getForce( distance );
					b.body.ApplyForce( force, bullet_position );
				}
			});

			var contactList = b.body.GetContactList();
			while (contactList && contactList.contact) {
				for(var c = 0; c < self.ships.length; c++) {
					var ship = self.ships[c];

					if (contactList.contact.GetShape1().GetBody() == ship.body ||
						contactList.contact.GetShape2().GetBody() == ship.body) {

						game.scene.entities.push(new Animation('img/_shotCollision.png',16,b.body.GetCenterPosition().x,b.body.GetCenterPosition().y,500));
						arrayRemove( bullets, b );
						arrayRemove( self.entities, b );
						world.DestroyBody(b.body);
					}

					for(var i=0;i<ship.entities.length;i++) {
						if (contactList.contact.GetShape1().GetBody() == ship.entities[i].body ||
							contactList.contact.GetShape2().GetBody() == ship.entities[i].body) {
							ship.entities[i].hit(b.damage);
							game.scene.entities.push(new Animation('img/_shotCollision.png',16,b.body.GetCenterPosition().x,b.body.GetCenterPosition().y,500));
							arrayRemove( bullets, b );
							arrayRemove( self.entities, b );
							world.DestroyBody(b.body);
						}
					}
					// Verzögertes Entfernen der Weakpoints, wenn sie zerstört wurden
					if (ship.destroyWeakpoints)
						ship.destroyWeakpoints();
				}

				for(var i=0;i<game.scene.entities.length;i++) {
					if (typeof game.scene.entities[i].hit != 'undefined')
						if (contactList.contact.GetShape1().GetBody() == game.scene.entities[i].body |
							contactList.contact.GetShape2().GetBody() == game.scene.entities[i].body) {
							game.scene.entities[i].hit();
							game.scene.entities.push(new Animation('img/_shotCollision.png',16,b.body.GetCenterPosition().x,b.body.GetCenterPosition().y,500));
							arrayRemove( bullets, b );
							arrayRemove( self.entities, b );
							world.DestroyBody(b.body);
						}
				}
				contactList = contactList.next;
			}

		});

		world.Step(delta/1000, 10, 10 );
		this.updateEntities(delta, world);
	};

	this.down = function(key) {
		if( cannon.weapon == 'laser' || cannon.weapon == 'rocket' )
			cannon.lastWeapon = cannon.weapon;

		switch( key ) {
			case 1: cannon.weapon = 'laser'; break;
			case 2: cannon.weapon = 'rocket'; break;
			case 3: cannon.weapon = 'pull'; break;
			case 4: cannon.weapon = 'push'; break;
		}
	};

	this.bg = new Sprite('img/background1.jpg');
}

UniverseScene.prototype = new Scene;