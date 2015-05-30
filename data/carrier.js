var carrier = {
	example: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership.png',
		fighter:fighter.ship1,
		polygon: [
			[{x:0,y:0},{x:200,y:0},{x:250,y:60},{x:250,y:100},{x:200,y:120},{x:100,y:120}]
		],
		weak_points: [
				{x:100,y:-30}
		],
		hangar_positions: [
			{x:0,y:0}
		]


	},
	ship1: {
		title: 'needsName',
		description: 'needsDescription',
		sprite:'img/mothership1.png',
		fighter:fighter.ship1,
		offset:{x:-10,y:-10},
		polygon: [
			[{x:43,y:122},{x:29,y:106},{x:38,y:93},{x:137,y:94},{x:181,y:96},{x:230,y:164},{x:200,y:180},{x:104,y:180}],
			[{x:43,y:151},{x:95,y:173},{x:42,y:184},{x:9,y:173}],
			[{x:43,y:151},{x:43,y:122},{x:104,y:180}],
			[{x:181,y:96},{x:188,y:86},{x:204,y:86},{x:215,y:97},{x:258,y:177},{x:230,y:164}],
			[{x:215,y:97},{x:235,y:84},{x:262,y:77},{x:276,y:80},{x:278,y:101},{x:292,y:181},{x:258,y:177}],
			[{x:278,y:101},{x:315,y:88},{x:342,y:84},{x:367,y:95},{x:386,y:131},{x:382,y:155},{x:370,y:179},{x:348,y:196},{x:325,y:202},{x:292,y:181}]
		],
		weak_points: [
				{x:137,y:96-20},
		],
		hangar_positions: [
			{x:0,y:0}
		]


	},
	ship2: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership2.png',
		fighter:fighter.ship1,
		offset:{x:-25,y:-5},
		polygon: [
			[{x:5,y:117},{x:47,y:89},{x:52,y:91},{x:100,y:66},{x:186,y:55},{x:92,y:193},{x:23,y:192},{x:12,y:185},{x:3,y:174},{x:3,y:136},],
			[{x:186,y:55}, {x:223,y:19}, {x:236,y:14}, {x:273,y:8}, {x:322,y:8}, {x:348,y:14}, {x:366,y:22}, {x:381,y:41}, {x:388,y:57}, {x:388,y:75}, {x:382,y:83}, {x:199,y:225}, {x:98,y:208}, {x:92,y:193}],
			[{x:382,y:83}, {x:388,y:83}, {x:395,y:89}, {x:395,y:202}, {x:384,y:212}, {x:350,y:225}, {x:279,y:225}, {x:279,y:163}],
			[{x:279,y:163}, {x:279,y:218}, {x:226,y:247}, {x:200,y:246}, {x:199,y:225}]
		],
		weak_points: [
				{x:10,y:10},
		],
		hangar_positions: [
			{x:0,y:0}
		]


	},
	
	ship3: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership3.png',
		fighter:fighter.ship1,
		offset:{x:-0,y:0},
		polygon: [
			[{x:169,y:188},{x:142,y:213},{x:109,y:234},{x:95,y:232},{x:57,y:198},{x:39,y:167},{x:34,y:149},{x:47,y:84},{x:71,y:51},{x:122,y:25},{x:157,y:15}],
			[{x:157,y:15}, {x:166,y:2}, {x:174,y:3}, {x:218,y:12}, {x:248,y:21}, {x:285,y:45}, {x:169,y:188}],
			[{x:285,y:45}, {x:361,y:23}, {x:366,y:26}, {x:368,y:34}, {x:368,y:63}, {x:362,y:93}, {x:214,y:179}, {x:169,y:188}],
			[{x:362,y:93}, {x:371,y:91}, {x:376,y:98}, {x:380,y:116}, {x:379,y:126}, {x:349,y:146}, {x:248,y:193}, {x:214,y:179}],
			[{x:349,y:146}, {x:350,y:164}, {x:345,y:187}, {x:336,y:206}, {x:321,y:221}, {x:295,y:235}, {x:276,y:239}, {x:264,y:239}, {x:248,y:193}]
		],
		weak_points: [
				{x:35,y:135},
				{x:117,y:28},
				{x:230,y:16},
				{x:286,y:48},
				{x:361,y:24},
				{x:377,y:108},
				{x:326,y:217},
				{x:265,y:239},
				{x:93,y:230}
		],
		hangar_positions: [
			{x:0,y:0}
		]
	},
	
	
	ship4: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership4.png',
		fighter:fighter.ship1,
		offset:{x:-25,y:-5},
		polygon: [
			[{x:234,y:161},{x:226,y:177},{x:159,y:230},{x:101,y:230},{x:34,y:177},{x:30,y:169},{x:29,y:81},{x:99,y:19},{x:158,y:19},{x:179,y:28},{x:232,y:87},{x:237,y:103}],
			[{x:237,y:103}, {x:324,y:103}, {x:292,y:158}, {x:234,y:161}],
			[{x:291,y:182}, {x:266,y:182}, {x:257,y:160}, {x:281,y:159}],
			[{x:324,y:103}, {x:351,y:92}, {x:339,y:196}, {x:309,y:196}, {x:292,y:158}],
			[{x:351,y:92}, {x:366,y:65}, {x:383,y:65}, {x:371,y:115}, {x:339,y:195}],
			[{x:371,y:115}, {x:388,y:145}, {x:389,y:170}, {x:373,y:185}, {x:339,y:195}],
			[{x:339,y:195}, {x:373,y:185}, {x:380,y:229}, {x:378,y:235}, {x:359,y:235}]
		],	
			
		weak_points: [
				{x:10,y:10},
				{x:10,y:20}
		],
		hangar_positions: [
			{x:0,y:0}
		]
	}
	
	
}