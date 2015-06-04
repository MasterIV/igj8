var UPGR_DAMAGE = 0; // Schaden
var UPGR_FRATE = 1; // Schussrate
var UPGR_SPECIAL = 2; // Spezialeffekt
var UPGR_COOLDOWN = 3; // (Anomalie) Cooldown
var UPGR_EFFECT = 4; //  (Anomalie) Effektstärke
var UPGR_MAXDAMAGE = 5; // Maximaler Schaden
var UPGR_MAXFRATE = 6; // Maximale Schussrate
var UPGR_MAXSPECIAL = 7; // Maximaler Spezialeffekt
var UPGR_MAXCOOLDOWN = 8; // Maximaler (Anomalie) Cooldown
var UPGR_MAXEFFECT = 9; //  Maximale (Anomalie) Effektstärke

var upgrades = {
	normal: [0,0,0,0,0,3,3,1,0,0],
	destroyer: [0,0,0,0,0,3,3,1,0,0],
	pushing: [0,0,0,0,0,0,0,1,3,3],
	sucking: [0,0,0,0,0,0,0,1,3,3],

	points: 110,
	pointbuffer: 0,
	hp: 5
}

function purgeUpgrades() {
	upgrades.hp = 5;
	upgrades.points = 110;
	upgrades.pointbuffer = 0;
	upgrades.normal = [0,0,0,0,0,3,3,1,0,0];
	upgrades.destroyer = [0,0,0,0,0,3,3,1,0,0];
	upgrades.pushing = [0,0,0,0,0,0,0,1,3,3];
	upgrades.sucking = [0,0,0,0,0,0,0,1,3,3];
}

function getNormalDamage() {
	var ret = [20,30,45,60];
	return ret[upgrades.normal[UPGR_DAMAGE]];
}
function getNormalRate() {
	var ret = [1000,850,700,550];
	if (upgrades.normal[UPGR_SPECIAL])
		return ret[upgrades.normal[UPGR_FRATE]] + 500;
	else
		return ret[upgrades.normal[UPGR_FRATE]];
}

function getDestroyerDamage() {
	var ret = [40,60,80,100];
	return ret[upgrades.destroyer[UPGR_DAMAGE]];
}
function getDestroyerRate() {
	var ret = [2500,2100,1700,1300];
	return ret[upgrades.destroyer[UPGR_FRATE]];
}

function getPushingEffect() {
	var ret = [0,30,45,60];
	return ret[upgrades.pushing[UPGR_EFFECT]];
}
function getPushingCooldown() {
	var ret = [5000,4500,4000,3500];
	return ret[upgrades.pushing[UPGR_COOLDOWN]];
}

function getSuckingEffect() {
	var ret = [0,30,45,60];
	return ret[upgrades.sucking[UPGR_EFFECT]];
}
function getSuckingCooldown() {
	var ret = [5000,4500,4000,3500];
	return ret[upgrades.sucking[UPGR_COOLDOWN]];
}