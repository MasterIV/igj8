function WeaponUI( cannon ) {
	var uiTop = new SpriteObj('img/main_UI_weapons.png', 0, 0);
	var uiBottom = new SpriteObj('img/main_UI_anomalies.png', 0, 540);
	var selected = new Sprite('img/skill_selected.png');

	function getY( w ) {
		switch(w) {
			case 'rocket': return 94;
			case 'pull': y = 543; break;
			case 'push': y = 634; break;
			default: y = 4;
		}
	}

	this.draw = function( ctx ) {
		uiTop.draw(ctx);
		uiBottom.draw(ctx);

		for( var w in cannon.cooldown )
			if( cannon.cooldown[w] > 0 ) {
				var y = getY(w);
				var h = 82 * cannon.cooldown[w] / cannon.getCooldown(w);

				ctx.fillStyle = 'rgba(0,0,255,.4)';
				ctx.fillRect(0, y+82-h, 82, h);
			}

		var y = getY(cannon.weapon);
		selected.draw(ctx, 0, y );
	}
}