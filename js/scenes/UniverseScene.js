function UniverseScene() {
	this.entities = [
			new Cannon( 0, 360 )
	];
}

UniverseScene.prototype = new Scene;

UniverseScene.prototype.draw = function( ctx ) {
	ctx.clearRect(0,0,1280,720);

	for( var i = 0; i < this.entities.length; i++ )
		if( this.entities[i].draw )
			this.entities[i].draw( ctx );
};