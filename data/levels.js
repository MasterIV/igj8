var levels = {
	example: {
		title: 'Testlevel',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship1, // ship1 - 4
				entry: 2500, // ms
				y: 0, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [15,0,5], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [4000,0,15000], // ms
				hangarspawn: [1,0,0] // in welchem Hangar? 0 / 1
			},
			{ // second
				// ...
			}
		]
	},
	level1: {
		title: 'Level 1',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship1, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 30, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [15,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [4000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship1, // ship1 - 4
				entry: 5000, // ms
				y: 300, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [15,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [4000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship1, // ship1 - 4
				entry: 9000, // ms
				y: 245, // 0-720
				speed: 45,
				hit1: 0, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0 // fortified
			}
		]
	}
}