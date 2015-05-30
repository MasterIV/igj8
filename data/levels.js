var levels = {
	example: {
		title: 'Testlevel',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship1, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 400, // 10 = langsam
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
	level0: {
		title: 'Tutorial',
		description: 'Das Tutorial Level mit 1 Schiff',
		ships: [
			{ // first
				type: carrier.ship0, // ship1 - 4
				entry: 1000, // ms
				y: 360, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [15,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [3500,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			}
		]
	},
	level1: {
		title: 'Level 1',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship1, // ship1 - 4
				entry: 2000, // ms
				y: 300, // 0-720
				speed: 10, // 10 = langsam
				hit1: 2, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [13,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [4000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship1, // ship1 - 4
				entry: 25000, // ms
				y: 420, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [15,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [5000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship1, // ship1 - 4
				entry: 45000, // ms
				y: 360, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [6000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			}
		]
	},
	level2: {
		title: 'Level 2',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship2, // ship1 - 4
				entry: 2000, // ms
				y: 360, // 0-720
				speed: 14, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [16,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship1, // ship1 - 4
				entry: 25000, // ms
				y: 260, // 0-720
				speed: 14, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [16,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship1, // ship1 - 4
				entry: 45000, // ms
				y: 440, // 0-720
				speed: 14, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [16,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,0,0], // ms
				hangarspawn: [0,0,0] // in welchem Hangar? 0 / 1
			}
		]
	}
}