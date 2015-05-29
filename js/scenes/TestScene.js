function TestScene() {
	this.world = new Box2D.b2World( new Box2D.b2Vec2(0.0, -10.0) );
};

TestScene.prototype = new scene;