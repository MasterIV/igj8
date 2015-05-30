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
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [15,0,5], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [4000,0,15000], // ms
				hangarspawn: [1,0,0] // in welchem Hangar? 0 / 1 / 2(random)
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
				entry: 5000, // ms
				y: 300, // 0-720
				speed: 10, // 10 = langsam
				hit1: 3, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7500,0,0], // ms
				hangarspawn: [2,1,0] // in welchem Hangar? 0 / 1 / 2(random)
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
				y: 480, // 0-720
				speed: 12, // 10 = langsam
				hit1: 3, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,15,15], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [9000,28000,32000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // second
				type: carrier.ship1, // ship1 - 4
				entry: 30000, // ms
				y: 300, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [25,20,20], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [10000,25000,35000], // ms
				hangarspawn: [2,1,0] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // third
				type: carrier.ship1, // ship1 - 4
				entry: 55000, // ms
				y: 420, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [28,16,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [15000,30000,0], // ms
				hangarspawn: [2,1,1] // in welchem Hangar? 0 / 1
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