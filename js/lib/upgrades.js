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

	points: 5000,
	hp: 5
}

function getNormalDamage() {
	var ret = [20,30,45,60];
	return ret[upgrades.normal[UPGR_DAMAGE]];
}
function getNormalRate() {
	var ret = [1000,850,700,550];
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
	var ret = [20,30,45,60];
	return ret[upgrades.pushing[UPGR_EFFECT]];
}
function getPushingCooldown() {
	var ret = [20000,25000,30000,35000];
	return ret[upgrades.pushing[UPGR_COOLDOWN]];
}

function getSuckingEffect() {
	var ret = [20,30,45,60];
	return ret[upgrades.sucking[UPGR_EFFECT]];
}
function getSuckingCooldown() {
	var ret = [20000,25000,30000,35000];
	return ret[upgrades.sucking[UPGR_COOLDOWN]];
}