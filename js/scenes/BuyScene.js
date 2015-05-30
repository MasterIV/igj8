function BuyScene() {
	this.bg = new Sprite('img/buyscene_bg.png');

	this.entities = [ new NormalGun(140, 120),
	                  new DestroyerGun(680, 120),
	                  new PushingAnomaly(140, 400),
	                  new SuckingAnomaly(680, 400) ];
};

BuyScene.prototype = new Scene;