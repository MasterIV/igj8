function UniverseScene() {
	var worldAABB = new b2AABB();
	worldAABB.minVertex.Set(0, 0);
	worldAABB.maxVertex.Set(1280, 720);

	var world =  new b2World(worldAABB, new b2Vec2( 0, 0 ), true);
	var cannon = new Cannon( 0, 360 );

	var bullets =  [];
	var anomalies = [];

	this.entities = [cannon];

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
		});

		world.Step(delta/1000, 10, 10 );
		this.updateEntities(delta);
	};


	this.down = function(key) {
		if( key == 'space' ) {
			cannon.weapon = cannon.weapon ? 0 : 1;
		}
	};

	this.bg = new Sprite('img/bg.png');
}

UniverseScene.prototype = new Scene;