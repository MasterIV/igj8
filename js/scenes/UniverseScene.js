function UniverseScene() {
	var self = this;

	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(0 - 1000, 0 - 1000);
	worldAABB.maxVertex.Set(1280*2, 720*2);

	var world =  new b2World(worldAABB, new b2Vec2( 0, 0 ), true);
	var cannon = new Cannon( 0, 360 );

	var bullets =  [];
	var anomalies = [];

	this.entities = [cannon];
	this.ships = [];

	this.ships.push(new CarrierShip(800,300, world, 10, carrier.ship1));
	this.ships.push(new CarrierShip(1000,50, world, 10, carrier.ship2));
	this.ships.push(new CarrierShip(1200,200, world, 50, carrier.ship3));
	for(var i=0;i<this.ships.length;i++) {
		this.entities.push(this.ships[i]);
	}

	//this.entities.push(new debugBox2d(world));


	this.fire = function( origin ) {
		var bullet = new Bullet( world, origin, mouse.dif( origin ));
		bullets.push( bullet );
		this.entities.push( bullet );
	};

	this.anomaly = function( r, g ) {
		var sphere = new Anomaly( mouse.x, mouse.y, r, g );
		anomalies.push( sphere );
		this.entities.push( sphere );
	};

	this.updateEntities = this.update;
	this.update = function(delta) {
		bullets.each( function( b ) {
			var bullet_position = b.body.GetCenterPosition();

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

					console.log(ship,c,self.ships);

					if (contactList.contact.GetShape1().GetBody() == ship.body ||
						contactList.contact.GetShape2().GetBody() == ship.body) {
					}

					for(var i=0;i<ship.entities.length;i++) {
						if (contactList.contact.GetShape1().GetBody() == ship.entities[i].body ||
							contactList.contact.GetShape2().GetBody() == ship.entities[i].body) {
							ship.entities[i].hit();
						}
					}
				}

				contactList = contactList.next;
			}

		});

		world.Step(delta/1000, 10, 10 );
		this.updateEntities(delta, world);
	};


	this.down = function(key) {
		if( key == 'space' ) {
			cannon.weapon = cannon.weapon ? 0 : 1;
		}
	};

	this.bg = new Sprite('img/background1.jpg');
}

UniverseScene.prototype = new Scene;