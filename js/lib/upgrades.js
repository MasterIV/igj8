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

	points: 0
}

function getNormalDamage() {
	switch (upgrades.normal[UPGR_DAMAGE]) {
		case 1:
			return 30;
		case 2:
			return 45;
		case 3:
			return 60;
		default:
			return 20;
	}
}