var levels = {
	example: {
		title: 'Testlevel',
		description: 'Lorem Ipsum',
		bigAnomaly:false,
		dialog: [
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Lorem Ipsum sit amet1111'
			},
			
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/ship_destroy/fighterp_destroyed.ogg',
				text: 'Lorem Ipsum sit amet1111'
			},
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/ship_destroy/fighterp_destroyed.ogg',
				text: 'sagsag sag sags ag sagsag sag ag sag'
			},
			{
				char: 3, // 1-6
				side: 1,
				speech: 'sounds/ship_destroy/fighterp_destroyed.ogg',
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
				type: carrier.ship10, // ship1 - 5
				entry: 0, // ms
				y: 300, // 0-720
				speed: 10, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [25,25,25], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [2000,2000,2000], // ms
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
		dialog: [	
		
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Rather soon, some ships will  ',
				text2: 'attack the base '
			},
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Hitting their weak spots wont be as  ',
				text2: 'easy asstealing candy from a child.'
			},
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'So you will need to make use of ',
				text2: 'our amazing anomaly generator.  '
			},
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'That will allow you to shoot around corners. ',
				text2: ' Fantastic! '
			}
		],
		ships: [
			{ // first
				type: carrier.ship0, // ship1 - 4
				entry: 0, // ms
				y: 460, // 0-720
				speed: 18, // 10 = langsam
				hit1: 1, // blau
				hit2: 0, // gelb
				hit3: 0, // rot
				hit4: 0, // yellow armored
				hit5: 0, // red armored
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,22,22], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [15000,5000,5000], // ms
				hangarspawn: [2,0,0] // in welchem Hangar? 0 (unten) / 1 (oben) / 2(random)
			}
		]
	},
	level1: {
		title: 'Level 1',
		description: 'Lorem Ipsum',
		bigAnomaly:false,
		dialog: [
			{
				char: 3, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Quiztime! Am I man? Am I woman?',
				text2: 'Well, I am enemy!'
			},
			{
				char: 3, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Le rape is incoming!',
				text2: ' '
			},
			{
				char: 6, // 1-6
				side: 0,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Master, dont let him penetrate  ',
				text2: 'our base!'
			}
		],
		ships: [
			{ // first
				type: carrier.ship6, // ship1 - 4
				entry: 0, // ms
				y: 460, // 0-720
				speed: 12, // 10 = langsam
				hit1: 2, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,15,15], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [15000,28000,32000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // second
				type: carrier.ship6, // ship1 - 4
				entry: 30000, // ms
				y: 320, // 0-720
				speed: 11, // 10 = langsam
				hit1: 1, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [25,20,20], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [15000,25000,35000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // third
				type: carrier.ship6, // ship1 - 4
				entry: 55000, // ms
				y: 420, // 0-720
				speed: 10, // 10 = langsam
				hit1: 0, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [0,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [28,16,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [18000,20000,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level2: {
		title: 'Level 2',
		description: 'Lorem Ipsum',
		bigAnomaly:false,
		dialog: [
			{
				char: 3, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Uh yeah! No need to be gentle.',
				text2: 'Harder! Faster! Stronger!'
			}
		],
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
				fightertype: [1,0,1], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,15,15], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [12500,24000,28000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // second
				type: carrier.ship6, // ship1 - 4
				entry: 30000, // ms
				y: 300, // 0-720
				speed: 14, // 10 = langsam
				hit1: 2, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,1,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [25,20,20], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [9000,26000,26000], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1 / 2(random)
			},
			{ // third
				type: carrier.ship1, // ship1 - 10
				entry: 55000, // ms
				y: 420, // 0-720
				speed: 13, // 10 = langsam
				hit1: 4, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [28,16,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [15000,20000,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	},
	level3: {
		title: 'Level 3',
		description: 'Lorem Ipsum',
		bigAnomaly:false,
		dialog: [
			{
				char: 2, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Once we have been bees,',
				text2: 'limited by the boundaries of air.'
			},
			{
				char: 2, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Now we are ant humans,',
				text2: 'only limited by your space station,'
			},
			{
				char: 2, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'which is unconveniently on the aforethought',
				text2: 'path of our new intergalactic high way!'
			},
			{
				char: 2, // 1-6
				side: 1,
				speech: 'sounds/ship_destroy/mothership_destroyed_long.ogg',
				text: 'We will eat your balls!',
				text2: 'All of them!'
			}
		],
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
		bigAnomaly:false,
		dialog: [
			{
				char: 2, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'All your balls are belong to us!',
				text2: ' '
			}
		],
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
		bigAnomaly:false,
		dialog: [
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Hey, hey yo dog!',
				text2: 'Ya know what time it is?'
			},
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Its pain-o-clock! Prepare for dyin, man!',
				text2: '  '
			}
		],
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
		bigAnomaly:false,
		dialog: [
			{
				char: 1, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Common dog! No crazy cheat magic!',
				text2: ' '
			}
		],
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
		bigAnomaly:false,
		dialog: [
			{
				char: 5, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Sir! I am afraid my ships can only fly',
				text2: 'into one direction.'
			},
			{
				char: 5, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'We have to shoot our way through your ',
				text2: 'marvellous base. Id like to beg you pardon!'
			},
			{
				char: 5, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: '... Shitface!',
				text2: ' '
			}
		],
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
		bigAnomaly:false,
		dialog: [
			{
				char: 5, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'You dare opposing me? You are an enemy ',
				text2: 'to democracy!'
			}
		],
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
		bigAnomaly:false,
		dialog: [
			{
				char: 4, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'So you beat all the other races?',
				text2: 'Milky!'
			},
			{
				char: 4, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'Try to beat the power of dextrorotary ',
				text2: 'lactic acid!'
			}
		],
		ships: [
			{ // first
				type: carrier.ship10, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 1, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 1, // rot
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
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 2, // rot
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
				hit3: 1, // gelb
				hit4: 0, // rot
				hit5: 1, // fortified
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
		bigAnomaly:false,
		dialog: [
			{
				char: 4, // 1-6
				side: 1,
				speech: 'sounds/menu/button-clicked.mp3',
				text: 'I find your lack of yoguhrt disturbing.',
				text2: ' '
			}
		],
		ships: [
			{ // first
				type: carrier.ship10, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 2, // gelb
				hit4: 2, // rot
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
		bigAnomaly:false,
		ships: [
			{ // first
				type: carrier.ship2, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 1, // grün
				hit3: 1, // gelb
				hit4: 1, // rot
				hit5: 1, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship1, // ship1 - 4
				entry: 30000, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 3, // rot
				hit5: 2, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship2, // ship1 - 4
				entry: 50000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 2, // gelb
				hit4: 2, // rot
				hit5: 2, // fortified
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
		bigAnomaly:false,
		ships: [
			{ // first
				type: carrier.ship5, // ship1 - 4
				entry: 0, // ms
				y: 300, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 1, // gelb
				hit4: 1, // rot
				hit5: 2, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [20,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // second
				type: carrier.ship3, // ship1 - 4
				entry: 30000, // ms
				y: 520, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 2, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 3, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [22000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			},
			{ // third
				type: carrier.ship4, // ship1 - 4
				entry: 50000, // ms
				y: 440, // 0-720
				speed: 15, // 10 = langsam
				hit1: 0, // blau
				hit2: 0, // grün
				hit3: 1, // gelb
				hit4: 2, // rot
				hit5: 2, // fortified
				fightertype: [1,0,0], // Fighter 1: ja, Fighter 2: nein, Fighter 3: ja.
				fighterspeed: [22,0,0], // Fighter 1: schnell, Fighter 3: langsam.
				fighterspawn: [20000,0,0], // ms
				hangarspawn: [2,0,1] // in welchem Hangar? 0 / 1
			}
		]
	}
}