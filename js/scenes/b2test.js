function B2Test() {
	var world = new Box2D.b2World(new Box2D.b2Vec2( 0, 0 ), true);

	function createBox(x, y) {
		var bodyDef = new Box2D.b2BodyDef();
		bodyDef.set_type(Box2D.b2_dynamicBody);
		bodyDef.set_position(new Box2D.b2Vec2( x, y ));
		var body = world.CreateBody(bodyDef);

		var shape = new Box2D.b2PolygonShape();
		shape.SetAsBox( 10, 10 );

		var fix = new Box2D.b2FixtureDef();
		fix.set_shape( shape );
		//fix.set_position(x, y);

		body.CreateFixture(fix);
		return body;
	}

	var b1 = createBox( 20, 20 );
	var b2 = createBox( 90, 10 );

	b1.SetLinearVelocity( new Box2D.b2Vec2( 30, 0 ));

	this.update = function(delta) {
		world.Step(delta/1000, 10, 10);
	};

	this.draw = function(ctx) {
		ctx.clearRect(0,0,1280,720);

		ctx.fillStyle = 'black';

		var pos = b1.GetWorldCenter();
		ctx.fillRect(pos.get_x(), pos.get_y(), 20, 20);

		var pos = b2.GetWorldCenter();
		ctx.fillRect(pos.get_x(), pos.get_y(), 20, 20);

		ctx.fillStyle = 'red';
		ctx.fillRect(0, 0, 20, 20);
	};
}

B2Test.prototype = new Scene;