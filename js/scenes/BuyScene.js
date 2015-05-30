function BuyScene() {
	this.bg = new Sprite('img/buyscene_bg.jpg');

	this.entities = [ new NormalGun(441, 221),
	                  new DestroyerGun(441, 285),
	                  new PushingAnomaly(441, 349),
	                  new SuckingAnomaly(441, 413),
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
					  }, 'sounds/menu/button_clicked.mp3')];
	this.shop = 0;
	this.entities[0].visible = true;

	this.changeShop = function( shop ) {
	this.entities[this.shop].visible = false;
	this.entities[shop].visible = true;
	this.shop = shop;
	};
};

BuyScene.prototype = new Scene;