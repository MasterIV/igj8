function WeaponUI( cannon ) {
	var uiTop = new SpriteObj('img/main_UI_weapons.png', 0, 0);
	var uiBottom = new SpriteObj('img/main_UI_anomalies.png', 0, 540);
	var selected = new Sprite('img/skill_selected.png');

	this.draw = function( ctx ) {
		var y;
		uiTop.draw(ctx);
		uiBottom.draw(ctx);

		switch(cannon.weapon) {
			case 'rocket': y = 94; break;
			case 'pull': y = 543; break;
			case 'push': y = 634; break;
			default: y = 4;
		}

		selected.draw(ctx, 0, y );
	}
}