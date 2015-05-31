var levels = {
	example: {
		title: 'Testlevel',
		description: 'Lorem Ipsum',
		bigAnomaly:true,
		dialog: [
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'Lorem Ipsum sit amet1111'
			},
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'sagsag sag sags ag sagsag sag ag sag'
			},
			{
				char: 3, // 1-6
				side: 1,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'sdasfasdhh fh rs ey y sre sag'
			},
			{
				char: 2,
				side: 0,
				text: 'No!'
			}
		],
		ships: [
			{ // first
				type: carrier.ship2, // ship1 - 5
				entry: 0, // ms
				y: 300, // 0-720
				speed: 100, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [15,15,5], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [4000,4000,15000], // ms
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
		bigAnomaly:false,
		/*dialog: [
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'Master, we need to test our new  ',
				text2: 'fabulous weapon systems.'
			},
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'Rather soon, some ships will attack the base!',
				text2: ' '
			},
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'Hitting their weak spots won't be as easy as stealing candy ',
				text2: 'from a child.'
			},
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'So you will need to make use of our amazing anomaly generator',
				text2: 'that will allow you to shoot around corners. Fantastic!'
			},
		],*/
		ships: [
			{ // first
				type: carrier.ship0, // ship1 - 4
				entry: 0, // ms
				y: 360, // 0-720
				speed: 18, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // gelb
				hit3: 0, // rot
				hit4: 0, // yellow armored
				hit5: 0, // red armored
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,22,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [15000,5000,5000], // ms
				hangarspawn: [2,0,0] // in welchem Hangar? 0 (unten) / 1 (oben) / 2(random)
			}
		]
	},
	level1: {
		title: 'Level 1',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship6, // ship1 - 4
				entry: 0, // ms
				y: 480, // 0-720
				speed: 12, // 10 = langsam
				hit1: 2, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,15,15], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [9000,28000,32000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // second
				type: carrier.ship6, // ship1 - 4
				entry: 30000, // ms
				y: 300, // 0-720
				speed: 13, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [25,20,20], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [10000,25000,35000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // third
				type: carrier.ship6, // ship1 - 4
				entry: 55000, // ms
				y: 420, // 0-720
				speed: 12, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [28,16,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [15000,30000,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level2: {
		title: 'Level 2',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship6, // ship1 - 4
				entry: 0, // ms
				y: 480, // 0-720
				speed: 14, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,15,15], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [8500,24000,28000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // second
				type: carrier.ship6, // ship1 - 4
				entry: 25000, // ms
				y: 300, // 0-720
				speed: 14, // 10 = langsam
				hit1: 1, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [25,20,20], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [9000,22000,26000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // third
				type: carrier.ship1, // ship1 - 10
				entry: 50000, // ms
				y: 420, // 0-720
				speed: 11, // 10 = langsam
				hit1: 3, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [28,16,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [12000,20000,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level3: {
		title: 'Level 3',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship7, // ship1 - 4
				entry: 0, // ms
				y: 460, // 0-720
				speed: 15, // 10 = langsam
				hit1: 1, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [19,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship7, // ship1 - 4
				entry: 25000, // ms
				y: 260, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [19,19,19], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,15000,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship7, // ship1 - 4
				entry: 45000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [19,19,19], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,0,18000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level4: {
		title: 'Level 4',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship7, // ship1 - 4
				entry: 0, // ms
				y: 470, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 3, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [19,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship7, // ship1 - 4
				entry: 0, // ms
				y: 250, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 3, // fortified
				fightertype: [1,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [19,19,19], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,15000,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship2, // ship1 - 4
				entry: 45000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 3, // gelb
				hit4: 1, // rot
				hit5: 0, // fortified
				fightertype: [1,0,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [19,19,19], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [7000,0,18000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level5: {
		title: 'Level 5',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship8, // ship1 - 4
				entry: 0, // ms
				y: 280, // 0-720
				speed: 15, // 10 = langsam
				hit1: 5, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship8, // ship1 - 4
				entry: 25000, // ms
				y: 280, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship8, // ship1 - 4
				entry: 45000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level6: {
		title: 'Level 6',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship8, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 5, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship8, // ship1 - 4
				entry: 0, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship3, // ship1 - 4
				entry: 40000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level7: {
		title: 'Level 7',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship9, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship9, // ship1 - 4
				entry: 0, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship9, // ship1 - 4
				entry: 40000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 2, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level8: {
		title: 'Level 8',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship9, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 1, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship4, // ship1 - 4
				entry: 0, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship4, // ship1 - 4
				entry: 40000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 2, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level9: {
		title: 'Level 9',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship10, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship10, // ship1 - 4
				entry: 0, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 1, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship10, // ship1 - 4
				entry: 40000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 0, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level10: {
		title: 'Level 10',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship10, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 5, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship5, // ship1 - 4
				entry: 0, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship5, // ship1 - 4
				entry: 40000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level11: {
		title: 'Level 11',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship2, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 5, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship1, // ship1 - 4
				entry: 0, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship2, // ship1 - 4
				entry: 40000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level12: {
		title: 'Level 12',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship5, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 5, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship3, // ship1 - 4
				entry: 0, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 3, // blau
				hit2: 3, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship4, // ship1 - 4
				entry: 40000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 2, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	}
}