/* buy scene upgrade gui */

function Upgrade( img, x, y ) {
	this.entities = [];
	this.visible = false;
}

Upgrade.prototype.createEntities = function () {
	var x = this.x + 113;
	var y = this.y + 3;

	if (this.isgun) {
		this.entities.push( new UpgradeBar(x, y, this.getMaxDamage()) );
/*		x += 50;
		this.entities.push( new UpgradeBar(this.outline, x, y, this.getMaxRate()) );
		x += this.lineheight;
		this.entities.push( new UpgradeBar(this.outline, x, y, this.getMaxSpecial()) );*/
	} else {
		this.entities.push( new UpgradeBar(this.outline, x, y, this.getMaxEffect()) );
		y += this.lineheight;
		this.entities.push( new UpgradeBar(this.outline, x, y, this.getMaxCooldown()) );
		y += this.lineheight;
		this.entities.push( new UpgradeBar(this.outline, x, y, this.getMaxSpecial()) );
	}
}

Upgrade.prototype.draw = function( ctx ) {
	if (!this.visible) return;

	ctx.drawImage( this.img, this.x, this.y );


	// Upgradeable attributes
	if (this.isgun) { // Guns have damage + rate of fire
		this.entities[0].draw(ctx, this.getDamage());
	}/* else { // Anomalies have cooldown + effect
		ctx.fillText('Strength:', textx, texty);
		this.entities[0].draw(ctx, this.getEffect());
		texty += this.lineheight;
		ctx.fillStyle = config.fontcolor;
		ctx.fillText('Cooldown:', textx, texty);
		this.entities[1].draw(ctx, this.getCooldown());
		texty += this.lineheight;
	}
	// Both have speshul abilities
	if (this.special) {
		ctx.fillStyle = config.fontcolor;
		ctx.fillText(this.special, textx, texty);
		this.entities[2].draw(ctx, this.getSpecial());
	}*/
};

Upgrade.prototype.update = function( delta ) {
	// ...
};

Upgrade.prototype.click = function( pos ) {
	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].click )
			this.entities[i].click( pos, this );
};
Upgrade.prototype.clicked = function( entity ) {
	if (this.isgun) {
		if (entity == this.entities[0]) // Damage
			if (this.getDamage() < this.getMaxDamage())
				this.addDamage();
		if (entity == this.entities[1]) // Rate of Fire
			if (this.getRate() < this.getMaxRate())
				this.addRate();
	} else {
		if (entity == this.entities[0]) // Effect
			if (this.getEffect() < this.getMaxEffect())
				this.addEffect();
		if (entity == this.entities[1]) // Cooldown
			if (this.getCooldown() < this.getMaxCooldown())
				this.addCooldown();
	}
	if (this.special)
		if (entity == this.entities[2]) // Special
			if (this.getSpecial() < this.getMaxSpecial())
				this.addSpecial();
};

function NormalGun(x, y) {
	this.name = 'Normal Gun';
	this.x = x;
	this.y = y;
	this.img = g['img/shop_menu_plasma.png'];
	this.width = this.img.width;
	this.height = this.img.height;

	this.isgun = true;
	this.special = 'Triple Shot:';
	this.createEntities();
}

NormalGun.prototype = new Upgrade;

NormalGun.prototype.getDamage = function() {
	return upgrades.normal[UPGR_DAMAGE];
}
NormalGun.prototype.getRate = function() {
	return upgrades.normal[UPGR_FRATE];
}
NormalGun.prototype.getSpecial = function() {
	return upgrades.normal[UPGR_SPECIAL];
}
NormalGun.prototype.getMaxDamage = function() {
	return upgrades.normal[UPGR_MAXDAMAGE];
}
NormalGun.prototype.getMaxRate = function() {
	return upgrades.normal[UPGR_MAXFRATE];
}
NormalGun.prototype.getMaxSpecial = function() {
	return upgrades.normal[UPGR_MAXSPECIAL];
}
NormalGun.prototype.addDamage = function() {
	upgrades.normal[UPGR_DAMAGE]++;
}
NormalGun.prototype.addRate = function() {
	upgrades.normal[UPGR_FRATE]++;
}
NormalGun.prototype.addSpecial = function() {
	upgrades.normal[UPGR_SPECIAL]++;
}


function DestroyerGun(x,y) {
	this.name = 'Destroyer Gun';
	this.x = x;
	this.y = y;
	this.img = g['img/shop_menu_rocket.png'];
	this.isgun = true;
	//this.createEntities();
}

DestroyerGun.prototype = new Upgrade;

DestroyerGun.prototype.getDamage = function() {
	return upgrades.destroyer[UPGR_DAMAGE];
}
DestroyerGun.prototype.getRate = function() {
	return upgrades.destroyer[UPGR_FRATE];
}
DestroyerGun.prototype.getSpecial = function() {
	return upgrades.destroyer[UPGR_SPECIAL];
}
DestroyerGun.prototype.getMaxDamage = function() {
	return upgrades.destroyer[UPGR_MAXDAMAGE];
}
DestroyerGun.prototype.getMaxRate = function() {
	return upgrades.destroyer[UPGR_MAXFRATE];
}
DestroyerGun.prototype.getMaxSpecial = function() {
	return upgrades.destroyer[UPGR_MAXSPECIAL];
}
DestroyerGun.prototype.addDamage = function() {
	upgrades.destroyer[UPGR_DAMAGE]++;
}
DestroyerGun.prototype.addRate = function() {
	upgrades.destroyer[UPGR_FRATE]++;
}
DestroyerGun.prototype.addSpecial = function() {
	upgrades.destroyer[UPGR_SPECIAL]++;
}

function PushingAnomaly(x,y) {
	this.name = 'Pushing Anomaly';
	this.x = x;
	this.y = y;
	this.img = g['img/shop_menu_repulse.png'];
	//this.createEntities();
}

PushingAnomaly.prototype = new Upgrade;

PushingAnomaly.prototype.getEffect = function() {
	return upgrades.pushing[UPGR_EFFECT];
}
PushingAnomaly.prototype.getCooldown = function() {
	return upgrades.pushing[UPGR_COOLDOWN];
}
PushingAnomaly.prototype.getSpecial = function() {
	return upgrades.pushing[UPGR_SPECIAL];
}
PushingAnomaly.prototype.getMaxEffect = function() {
	return upgrades.pushing[UPGR_MAXEFFECT];
}
PushingAnomaly.prototype.getMaxCooldown = function() {
	return upgrades.pushing[UPGR_MAXCOOLDOWN];
}
PushingAnomaly.prototype.getMaxSpecial = function() {
	return upgrades.pushing[UPGR_MAXSPECIAL];
}
PushingAnomaly.prototype.addEffect = function() {
	upgrades.pushing[UPGR_EFFECT]++;
}
PushingAnomaly.prototype.addCooldown = function() {
	upgrades.pushing[UPGR_COOLDOWN]++;
}
PushingAnomaly.prototype.addSpecial = function() {
	upgrades.pushing[UPGR_SPECIAL]++;
}

function SuckingAnomaly(x,y) {
	this.name = 'Sucking Anomaly';
	this.x = x;
	this.y = y;
	this.img = g['img/shop_menu_pull.png'];
	//this.createEntities();
}

SuckingAnomaly.prototype = new Upgrade;

SuckingAnomaly.prototype.getEffect = function() {
	return upgrades.sucking[UPGR_EFFECT];
}
SuckingAnomaly.prototype.getCooldown = function() {
	return upgrades.sucking[UPGR_COOLDOWN];
}
SuckingAnomaly.prototype.getSpecial = function() {
	return upgrades.sucking[UPGR_SPECIAL];
}
SuckingAnomaly.prototype.getMaxEffect = function() {
	return upgrades.sucking[UPGR_MAXEFFECT];
}
SuckingAnomaly.prototype.getMaxCooldown = function() {
	return upgrades.sucking[UPGR_MAXCOOLDOWN];
}
SuckingAnomaly.prototype.getMaxSpecial = function() {
	return upgrades.sucking[UPGR_MAXSPECIAL];
}
SuckingAnomaly.prototype.addEffect = function() {
	upgrades.sucking[UPGR_EFFECT]++;
}
SuckingAnomaly.prototype.addCooldown = function() {
	upgrades.sucking[UPGR_COOLDOWN]++;
}
SuckingAnomaly.prototype.addSpecial = function() {
	upgrades.sucking[UPGR_SPECIAL]++;
}