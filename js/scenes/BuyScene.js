function BuyScene() {
	this.bg = new Sprite('img/buyscene_bg.jpg');

	this.entities = [ new NormalGun(441, 221),
	                  new DestroyerGun(441, 285),
	                  new PushingAnomaly(441, 349),
	                  new SuckingAnomaly(441, 413),
	                  new Hull(441, 477),
					  new Button('img/shop_button_big.png', 'img/shop_button_big_highlight.png', 76, 212, function() {
						  game.scene.changeShop(0);
					  }, 'sounds/menu/button_clicked.mp3'),
					  new Button('img/shop_button_big.png', 'img/shop_button_big_highlight.png', 76, 276, function() {
						  game.scene.changeShop(1);
					  }, 'sounds/menu/button_clicked.mp3'),
					  new Button('img/shop_button_big.png', 'img/shop_button_big_highlight.png', 76, 340, function() {
						  game.scene.changeShop(2);
					  }, 'sounds/menu/button_clicked.mp3'),
					  new Button('img/shop_button_big.png', 'img/shop_button_big_highlight.png', 76, 404, function() {
						  game.scene.changeShop(3);
					  }, 'sounds/menu/button_clicked.mp3'),
					  new Button('img/shop_button_big.png', 'img/shop_button_big_highlight.png', 76, 468, function() {
						  game.scene.changeShop(4);
					  }, 'sounds/menu/button_clicked.mp3'),
					  new Button('img/shop_button_small.png', 'img/shop_button_small_highlight.png', 995, 613, function() {
						  game.nextLevel();
					  }, 'sounds/menu/button_clicked.mp3')];
	this.shop = 0;
	this.entities[0].visible = true;

	this.changeShop = function( shop ) {
		this.entities[this.shop].visible = false;
		this.entities[shop].visible = true;
		this.shop = shop;
	};
	this.reset = function() {
		//for (var i = 0; i )
	};
	this.drawBase = this.draw;
	this.draw = function( ctx ) {
		this.drawBase(ctx);
		ctx.font = config.font;
		ctx.fillStyle = config.fontcolor;
		ctx.fillText(upgrades.points, 1050,127 + config.fontsize/2);
	}
};

BuyScene.prototype = new Scene;