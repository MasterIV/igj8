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
					  }, 'sounds/menu/button_clicked.mp3'),
					  new Button('img/shop_button_small.png', 'img/shop_button_small_highlight.png', 778, 613, function() {
						  game.scene.reset();
					  }, 'sounds/menu/button_clicked.mp3')];
	this.shop = 0;
	this.entities[0].visible = true;

	this.changeShop = function( shop ) {
		this.entities[this.shop].visible = false;
		this.entities[shop].visible = true;
		this.shop = shop;
	};
	this.reset = function() {
		while (upgrades.normal[UPGR_DAMAGE] > 0) {
			upgrades.points += this.entities[0].damagecost[upgrades.normal[UPGR_DAMAGE]];
			upgrades.normal[UPGR_DAMAGE]-=1;
		}
		while (upgrades.normal[UPGR_FRATE] > 0) {
			upgrades.points += this.entities[0].ratecost[upgrades.normal[UPGR_FRATE]];
			upgrades.normal[UPGR_FRATE]-=1;
		}
		while (upgrades.destroyer[UPGR_DAMAGE] > 0) {
			upgrades.points += this.entities[1].damagecost[upgrades.destroyer[UPGR_DAMAGE]];
			upgrades.destroyer[UPGR_DAMAGE]-=1;
		}
		while (upgrades.destroyer[UPGR_FRATE] > 0) {
			upgrades.points += this.entities[1].ratecost[upgrades.destroyer[UPGR_FRATE]];
			upgrades.destroyer[UPGR_FRATE]-=1;
		}
		while (upgrades.pushing[UPGR_EFFECT] > 0) {
			upgrades.points += this.entities[2].effectcost[upgrades.pushing[UPGR_EFFECT]];
			upgrades.pushing[UPGR_EFFECT]-=1;
		}
		while (upgrades.pushing[UPGR_COOLDOWN] > 0) {
			upgrades.points += this.entities[2].cdcost[upgrades.pushing[UPGR_COOLDOWN]];
			upgrades.pushing[UPGR_COOLDOWN]-=1;
		}
		while (upgrades.sucking[UPGR_EFFECT] > 0) {
			upgrades.points += this.entities[3].effectcost[upgrades.sucking[UPGR_EFFECT]];
			upgrades.sucking[UPGR_EFFECT]-=1;
		}
		while (upgrades.sucking[UPGR_COOLDOWN] > 0) {
			upgrades.points += this.entities[3].cdcost[upgrades.sucking[UPGR_COOLDOWN]];
			upgrades.sucking[UPGR_COOLDOWN]-=1;
		}
		if (upgrades.normal[UPGR_SPECIAL]) {
			upgrades.normal[UPGR_SPECIAL] = 0;
			upgrades.points += 2500;
		}
		if (upgrades.destroyer[UPGR_SPECIAL]) {
			upgrades.destroyer[UPGR_SPECIAL] = 0;
			upgrades.points += 2500;
		}
		if (upgrades.sucking[UPGR_SPECIAL]) {
			upgrades.sucking[UPGR_SPECIAL] = 0;
			upgrades.points += 2500;
		}
		if (upgrades.pushing[UPGR_SPECIAL]) {
			upgrades.pushing[UPGR_SPECIAL] = 0;
			upgrades.points += 2500;
		}
		while(upgrades.hp > 5) {
			upgrades.points += this.entities[4].cost[this.entities[4].getHP()];
			upgrades.hp-=1;
		}
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