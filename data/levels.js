var levels = {
	example: {
		title: 'Testlevel',
		description: 'Lorem Ipsum',
		ships: [
			{ // first
				type: carrier.ship1, // ship1 - 4
				entry: 2500, // ms
				y: 0, // 0-720
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0 // fortified
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
				entry: 2000, // ms
				y: 350, // 0-720
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0 // fortified
			},
			{ // second
				type: carrier.ship1, // ship1 - 4
				entry: 45000, // ms
				y: 525, // 0-720
				hit1: 1, // blau
				hit2: 0, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0 // fortified
			},
			{ // third
				type: carrier.ship1, // ship1 - 4
				entry: 90000, // ms
				y: 245, // 0-720
				hit1: 0, // blau
				hit2: 1, // grün
				hit3: 0, // gelb
				hit4: 0, // rot
				hit5: 0 // fortified
			}
		]
	}
}