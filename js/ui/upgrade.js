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
		y += 64;
		this.entities.push( new UpgradeBar(x, y, this.getMaxRate()) );
		y += 63;
		if (this.special) this.entities.push( new UpgradeBar(x, y, this.getMaxSpecial()) );
	} else if (this.ishull) {
		this.entities.push( new UpgradeBar(x, y, this.getMaxHP()) );
	} else {
		this.entities.push( new UpgradeBar(x, y, this.getMaxEffect()) );
		y += 64;
		this.entities.push( new UpgradeBar(x, y, this.getMaxCooldown()) );
		y += 63;
		this.entities.push( new UpgradeBar(x, y, this.getMaxSpecial()) );
	}
}

Upgrade.prototype.draw = function( ctx ) {
	if (!this.visible) return;

	ctx.drawImage( this.img, this.x, this.y );

	// Upgradeable attributes
	if (this.isgun) { // Guns have damage + rate of fire
		this.entities[0].draw(ctx, this.getDamage(), this.damagecost[this.getDamage()+1]);
		this.entities[1].draw(ctx, this.getRate(), this.damagecost[this.getDamage()+1]);
		if (this.special) this.entities[2].draw(ctx, this.getSpecial(), this.special);
	} else if(this.ishull) {
		this.entities[0].draw(ctx, this.getHP(), this.cost[this.getHP()+1]);
	} else { // Anomalies have cooldown + effect
		this.entities[0].draw(ctx, this.getEffect(), this.effectcost[this.getEffect()+1]);
		this.entities[1].draw(ctx, this.getCooldown(), this.cdcost[this.getCooldown()+1]);
		this.entities[2].draw(ctx, this.getSpecial(), this.special);
	}
};

Upgrade.prototype.update = function( delta ) {
	// ...
};

Upgrade.prototype.click = function( pos ) {
	if (!this.visible) return;

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].click )
			this.entities[i].click( pos, this );
};
Upgrade.prototype.clicked = function( entity ) {
	if (!this.visible) return;

	if (this.isgun) {
		if (entity == this.entities[0]) // Damage
			if (this.getDamage() < this.getMaxDamage())
				if (upgrades.points >= this.damagecost[this.getDamage()+1])
					this.addDamage();
		if (entity == this.entities[1]) // Rate of Fire
			if (this.getRate() < this.getMaxRate())
				if (upgrades.points >= this.ratecost[this.getRate()+1])
					this.addRate();
	} else if(this.ishull) {
		if (entity == this.entities[0])
			if (this.getHP() < this.getMaxHP())
				if (upgrades.points >= this.cost[this.getHP()+1])
					this.addHP();
	} else {
		if (entity == this.entities[0]) // Effect
			if (this.getEffect() < this.getMaxEffect())
				if (upgrades.points >= this.effectcost[this.getEffect()+1])
					this.addEffect();
		if (entity == this.entities[1]) // Cooldown
			if (this.getCooldown() < this.getMaxCooldown())
				if (upgrades.points >= this.cdcost[this.getCooldown()+1])
					this.addCooldown();
	}
	if (this.special)
		if (entity == this.entities[2]) // Special
			if (this.getSpecial() < this.getMaxSpecial())
				if (upgrades.points >= this.special)
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
	this.special = 2500;
	this.damagecost = [0,350,600,1000,0];
	this.ratecost = [0,350,600,1000,0];
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
	upgrades.normal[UPGR_DAMAGE]+=1;
	upgrades.points -= this.damagecost[this.getDamage()];
}
NormalGun.prototype.addRate = function() {
	upgrades.normal[UPGR_FRATE]+=1;
	upgrades.points -= this.ratecost[this.getRate()];
}
NormalGun.prototype.addSpecial = function() {
	upgrades.normal[UPGR_SPECIAL]+=1;
	upgrades.points -= this.special;
}


function DestroyerGun(x,y) {
	this.name = 'Destroyer Gun';
	this.x = x;
	this.y = y;
	this.img = g['img/shop_menu_rocket.png'];
	this.isgun = true;
//	this.special = 2500;
	this.damagecost = [0,350,600,1000,0];
	this.ratecost = [0,350,600,1000,0];
	this.createEntities();
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
	upgrades.destroyer[UPGR_DAMAGE]+=1;
	upgrades.points -= this.damagecost[this.getDamage()];
}
DestroyerGun.prototype.addRate = function() {
	upgrades.destroyer[UPGR_FRATE]+=1;
	upgrades.points -= this.ratecost[this.getRate()];
}
DestroyerGun.prototype.addSpecial = function() {
	upgrades.destroyer[UPGR_SPECIAL]+=1;
	upgrades.points -= this.special;
}

function PushingAnomaly(x,y) {
	this.name = 'Pushing Anomaly';
	this.x = x;
	this.y = y;
	this.img = g['img/shop_menu_repulse.png'];
	this.special = 2500;
	this.effectcost = [0,350,600,1000,0];
	this.cdcost = [0,350,600,1000,0];
	this.createEntities();
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
	upgrades.pushing[UPGR_EFFECT]+=1;
	upgrades.points -= this.effectcost[this.getEffect()];
}
PushingAnomaly.prototype.addCooldown = function() {
	upgrades.pushing[UPGR_COOLDOWN]+=1;
	upgrades.points -= this.cdcost[this.getCooldown()];
}
PushingAnomaly.prototype.addSpecial = function() {
	upgrades.pushing[UPGR_SPECIAL]+=1;
	upgrades.points -= this.special;
}

function SuckingAnomaly(x,y) {
	this.name = 'Sucking Anomaly';
	this.x = x;
	this.y = y;
	this.img = g['img/shop_menu_pull.png'];
	this.special = 2500;
	this.effectcost = [0,350,600,1000,0];
	this.cdcost = [0,350,600,1000,0];
	this.createEntities();
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
	upgrades.sucking[UPGR_EFFECT]+=1;
	upgrades.points -= this.effectcost[this.getEffect()];
}
SuckingAnomaly.prototype.addCooldown = function() {
	upgrades.sucking[UPGR_COOLDOWN]+=1;
	upgrades.points -= this.cdcost[this.getCooldown()];
}
SuckingAnomaly.prototype.addSpecial = function() {
	upgrades.sucking[UPGR_SPECIAL]+=1;
	upgrades.points -= this.special;
}

function Hull(x,y) {
	this.name = 'Hull';
	this.x = x;
	this.y = y;
	this.ishull = true;
	this.img = g['img/shop_menu_hull.png'];
	this.cost = [0,300,400,500,600,700];
	this.createEntities();
}

Hull.prototype = new Upgrade;

Hull.prototype.getHP = function() {
	return upgrades.hp - 5;
}
Hull.prototype.getMaxHP = function() {
	return 5;
}
Hull.prototype.addHP = function() {
	upgrades.hp++;
	upgrades.points -= this.cost[this.getHP()];
}