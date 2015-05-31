function PreUniverseScene(level) {
	this.universeScene = new UniverseScene(level);
	this.level = level;

	this.entities = [];

	this.dialogues = [];
	for(var i =0;level.dialog && i<level.dialog.length;i++) {
		this.dialogues.push(new Dialog(level.dialog[i].char,level.dialog[i].side, level.dialog[i].text, level.dialog[i].speech, i!=(level.dialog.length-1)));
	}

	this.nextDialog();
}

PreUniverseScene.prototype = new Scene;


PreUniverseScene.prototype.update = function( delta ) {
	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].update )
			this.entities[i].update( delta );
};

PreUniverseScene.prototype.draw = function( ctx ) {
	ctx.clearRect(0,0,1280,720);


	this.universeScene.draw( ctx );

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};


PreUniverseScene.prototype.nextDialog = function() {
	if (this.dialogues.length == 0) {
		this.endDialog();
		return;
	}

	this.entities = [this.dialogues.shift()];
};
PreUniverseScene.prototype.endDialog = function() {
	game.scene = new UniverseScene(this.level);
};

PreUniverseScene.prototype.down = function() {
	this.nextDialog();
};
PreUniverseScene.prototype.click = function() {
	this.nextDialog();
};

