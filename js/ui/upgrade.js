/* buy scene upgrade gui */

function Upgrade() {
	this.width = 500;
	this.height = 240;

	this.outline = '#aaaaaa';

	this.paddingleft = 15;
	this.paddingtop = 10;
	this.lineheight = config.fontsize + 10;
}

Upgrade.prototype.draw = function( ctx ) {
	// Outline
	ctx.lineWidth = 5;
	ctx.strokeStyle = this.outline;
	ctx.strokeRect(this.x, this.y, this.width, this.height);
	// Name
	var texty = this.y + this.paddingtop + config.fontsize;
	var textx = this.x + this.paddingleft;
	ctx.fillStyle = config.fontcolor;
	ctx.font = config.font;
	ctx.fillText(this.name, textx, texty);
	texty += this.lineheight * 2;

	// Upgradeable attributes
	if (this.isgun) { // Guns have damage + rate of fire
		ctx.fillText('Damage:', textx, texty);
		texty += this.lineheight;
		ctx.fillText('Rate of Fire:', textx, texty);
	} else { // Anomalies have cooldown + effect
		ctx.fillText('Strength:', textx, texty);
		texty += this.lineheight;
		ctx.fillText('Cooldown:', textx, texty);
	}
	// Both have speshul abs
};

Upgrade.prototype.update = function( delta ) {
	// ...
};

function NormalGun(x, y) {
	this.name = 'Normal Gun';
	this.x = x;
	this.y = y;
	this.isgun = true;
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

function DestroyerGun(x,y) {
	this.name = 'Destroyer Gun';
	this.x = x;
	this.y = y;
	this.isgun = true;
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

function PushingAnomaly(x,y) {
	this.name = 'Pushing Anomaly';
	this.x = x;
	this.y = y;
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

function SuckingAnomaly(x,y) {
	this.name = 'Sucking Anomaly';
	this.x = x;
	this.y = y;
}

SuckingAnomaly.prototype = new Upgrade;

SuckingAnomaly.prototype.getEffect = function() {
	return upgrades.pushing[UPGR_EFFECT];
}
SuckingAnomaly.prototype.getCooldown = function() {
	return upgrades.pushing[UPGR_COOLDOWN];
}
SuckingAnomaly.prototype.getSpecial = function() {
	return upgrades.pushing[UPGR_SPECIAL];
}