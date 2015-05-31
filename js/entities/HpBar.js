function HpBar() {
	this.hp = 0;
	this.sprite = new AnimationSprite('img/hp_spritesheet.png', 11);
}

HpBar.prototype.draw = function ( ctx ) {
		this.sprite.center(ctx, 17, 360 , this.hp);
};

HpBar.prototype.setHp = function ( hp ) {
	this.hp = hp;
};


HpBar.prototype.reduce = function ( hp ) {
	if (typeof hp == 'undefined') hp = 1
	this.hp -= hp;
	if( this.hp < 1 )
		game.scene = scenes.lose;
};