var carrier = {
	example: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership.png',
		fighter:fighter.ship1,
		endXPosition: 0,
		destroyerChargeOffset: {x:-50,y:0},
		destroyerShotOffset: {x:-50,y:0},
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
		ship0: {
		title: 'TutorialShip',
		description: 'Designed for Tutorial',
		sprite:'img/ship_medium1.png',
		isMothership:true,
		fighter:fighter.ship1,
		endXPosition: 400,
		destroyerChargeOffset: {x:-50,y:0},
		destroyerShotOffset: {x:-50,y:0},
		offset:{x:-5,y:-8},
		polygon: [
			[{x:32,y:99}, {x:18,y:85}, {x:29,y:76}, {x:116,y:78}],
			[{x:116,y:78}, {x:142,y:70}, {x:195,y:64}, {x:223,y:84}, {x:216,y:141}, {x:150,y:141}, {x:79,y:140}, {x:32,y:119}, {x:32,y:99}],
			[{x:79,y:140}, {x:31,y:145}, {x:7,y:135}, {x:32,y:119}],
			[{x:223,y:84}, {x:241,y:72}, {x:263,y:71}, {x:282,y:90}, {x:287,y:121}, {x:261,y:153}, {x:244,y:158}, {x:216,y:141}]
		],
		weak_points: [
			{x:106,y:77,rotate:0}, 
			{x:228,y:75,rotate:340}
		],
		hangar_positions: [
			{x:158,y:142},
			{x:158,y:142}
		]
	},
	ship1: {
		title: 'motherShip1',
		description: 'needsDescription',
		sprite:'img/mothership1.png',
		isMothership:true,
		fighter:fighter.ship1,
		endXPosition: 400,
		destroyerChargeOffset: {x:-50,y:0},
		destroyerShotOffset: {x:-83,y:10},
		offset:{x:-27,y:10},
		polygon: [
			[{x:43,y:152},{x:100,y:173},{x:41,y:185},{x:9,y:172}],
			[{x:100,y:173},{x:43,y:152},{x:43,y:122},{x:237,y:165},{x:200,y:180},{x:133,y:179}],
			[{x:235,y:165},{x:43,y:122},{x:24,y:105},{x:39,y:93},{x:69,y:94}],
			[{x:235,y:165},{x:69,y:94},{x:80,y:64},{x:143,y:56}],
			[{x:235,y:165},{x:143,y:56},{x:158,y:35},{x:197,y:28},{x:213,y:35},{x:215,y:45}],
			[{x:197,y:28},{x:158,y:35},{x:142,y:35},{x:106,y:27},{x:103,y:20},{x:108,y:13},{x:141,y:6},{x:182,y:6},{x:198,y:14}],
			[{x:235,y:165},{x:215,y:45},{x:244,y:20},{x:271,y:5},{x:294,y:3},{x:357,y:20},{x:357,y:31}],
			[{x:235,y:165},{x:357,y:31},{x:360,y:63},{x:347,y:197},{x:344,y:211},{x:334,y:228},{x:314,y:242},{x:291,y:248},{x:270,y:246},{x:242,y:229},{x:231,y:207}],
			[{x:347,y:197},{x:345,y:86},{x:361,y:92},{x:377,y:108},{x:384,y:131},{x:381,y:156},{x:368,y:181}],
			[{x:360,y:63},{x:357,y:31},{x:391,y:32},{x:396,y:36}]
		
		],
		weak_points: [
			{x:65,y:184,rotate:170},
			{x:133,y:183,rotate:180},
			{x:190,y:183,rotate:180},
			{x:365,y:26,rotate:5},
			{x:213,y:35,rotate:0},
			{x:107,y:58,rotate:0},
			{x:52,y:93,rotate:0}
		],
		hangar_positions: [
			{x:83,y:185},
			{x:63,y:22}
		]
	},
	ship2: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership2.png',
		isMothership:true,
		fighter:fighter.ship2,
		endXPosition: 400,
		destroyerChargeOffset: {x:50,y:0},
		destroyerShotOffset: {x:50,y:0},
		offset:{x:-25,y:-5},
		polygon: [
			[{x:5,y:117},{x:47,y:89},{x:52,y:91},{x:100,y:66},{x:186,y:55},{x:92,y:193},{x:23,y:192},{x:12,y:185},{x:3,y:174},{x:3,y:136},],
			[{x:186,y:55}, {x:223,y:19}, {x:236,y:14}, {x:273,y:8}, {x:322,y:8}, {x:348,y:14}, {x:366,y:22}, {x:381,y:41}, {x:388,y:57}, {x:388,y:75}, {x:382,y:83}, {x:199,y:225}, {x:98,y:208}, {x:92,y:193}],
			[{x:382,y:83}, {x:388,y:83}, {x:395,y:89}, {x:395,y:202}, {x:384,y:212}, {x:350,y:225}, {x:279,y:225}, {x:279,y:163}],
			[{x:279,y:163}, {x:279,y:218}, {x:226,y:247}, {x:200,y:246}, {x:199,y:225}]
		],
		weak_points: [
				{x:166,y:56,rotate:0}, 
				{x:74,y:81,rotate:320}, 
				{x:296,y:10,rotate:0},
				{x:66,y:194,rotate:180}, 
				{x:140,y:214,rotate:190},
				{x:395,y:102,rotate:90},
				{x:396,y:189,rotate:90},
				{x:315,y:228,rotate:180}
		],
		hangar_positions: [
			{x:269,y:14},
			{x:178,y:221}
		]
	},
	
	ship3: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership3.png',
		isMothership:true,
		fighter:fighter.ship3,
		endXPosition: 400,
		destroyerChargeOffset: {x:50,y:0},
		destroyerShotOffset: {x:50,y:0},
		offset:{x:-5,y:5},
		polygon: [
			[{x:169,y:188},{x:142,y:213},{x:109,y:234},{x:95,y:232},{x:57,y:198},{x:39,y:167},{x:34,y:149},{x:47,y:84},{x:71,y:51},{x:122,y:25},{x:157,y:15}],
			[{x:157,y:15}, {x:166,y:2}, {x:174,y:3}, {x:218,y:12}, {x:248,y:21}, {x:285,y:45}, {x:169,y:188}],
			[{x:285,y:45}, {x:361,y:23}, {x:366,y:26}, {x:368,y:34}, {x:368,y:63}, {x:362,y:93}, {x:214,y:179}, {x:169,y:188}],
			[{x:362,y:93}, {x:371,y:91}, {x:376,y:98}, {x:380,y:116}, {x:379,y:126}, {x:349,y:146}, {x:248,y:193}, {x:214,y:179}],
			[{x:349,y:146}, {x:350,y:164}, {x:345,y:187}, {x:336,y:206}, {x:321,y:221}, {x:295,y:235}, {x:276,y:239}, {x:264,y:239}, {x:248,y:193}]
		],
		weak_points: [
				{x:35,y:146,rotate:260},
				{x:47,y:82,rotate:300},
				{x:127,y:20,rotate:350},
				{x:225,y:10,rotate:5},
				{x:324,y:33,rotate:355},
				{x:373,y:59,rotate:90},
				{x:349,y:161,rotate:90},
				{x:316,y:223,rotate:140},
				{x:135,y:221,rotate:155},
				{x:262,y:218,rotate:270}
				
		],
		hangar_positions: [
			{x:382,y:121},
			{x:148,y:0}
		]
	},
	ship4: { // funktioniert noch nicht
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership4.png',
		isMothership:true,
		fighter:fighter.ship4,
		endXPosition: 400,
		destroyerChargeOffset: {x:50,y:0},
		destroyerShotOffset: {x:50,y:0},
		offset:{x:-25,y:-5},
		polygon: [
			[{x:0,y:86},{x:60,y:32},{x:104,y:32},{x:180,y:112},{x:111,y:212},{x:60,y:213},{x:0,y:163}],
			[{x:180,y:112}, {x:89,y:12}, {x:93,y:7}, {x:193,y:1}, {x:229,y:1}, {x:270,y:42}, {x:272,y:118}],
			[{x:291,y:182}, {x:180,y:112}, {x:272,y:118}, {x:272,y:213}, {x:228,y:250}, {x:193,y:250}, {x:92,y:244}, {x:88,y:237}],
			[{x:271,y:176}, {x:271,y:73}, {x:305,y:39}, {x:328,y:63}, {x:356,y:97}, {x:375,y:223}, {x:306,y:206}],
			[{x:328,y:63}, {x:305,y:39},  {x:373,y:22}, {x:374,y:34}],
			[{x:375,y:223}, {x:356,y:98}, {x:378,y:72}, {x:392,y:72}, {x:395,y:139}, {x:397,y:161}, {x:390,y:213}]
			
		],	
		weak_points: [
				{x:78,y:30,rotate:0},
				{x:0,y:120,rotate:270},
				{x:86,y:210,rotate:180},
				{x:211,y:247,rotate:180},
				{x:338,y:210,rotate:210},
				{x:210,y:5,rotate:0},
				{x:322,y:32,rotate:290},
				{x:356,y:43,rotate:160}
				
		],
		hangar_positions: [
			{x:182,y:0},
			{x:196,y:218}
		]
	},
	
	ship5: { // funktioniert noch nicht
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/mothership5.png',
		isMothership:true,
		fighter:fighter.ship5,
		endXPosition: 400,
		destroyerChargeOffset: {x:50,y:0},
		destroyerShotOffset: {x:50,y:0},
		offset:{x:-25,y:-5,rotate:0},
		polygon: [
			[{x:102,y:117},{x:140,y:224},{x:130,y:230},{x:41,y:239},{x:11,y:230},{x:14,y:181},{x:27,y:158},{x:715,y:126}],
			[{x:140,y:224}, {x:102,y:117}, {x:285,y:53}, {x:306,y:104}, {x:309,y:141}, {x:300,y:157}, {x:156,y:244}],
			[{x:306,y:104}, {x:102,y:117}, {x:77,y:106}, {x:70,y:76}, {x:90,y:12}, {x:106,y:1}, {x:158,y:2}, {x:275,y:19}, {x:288,y:38}],
			[{x:371,y:119}, {x:285,y:53}, {x:329,y:56}, {x:342,y:78}, {x:341,y:91}, {x:334,y:103}],			
			[{x:156,y:244}, {x:300,y:157}, {x:332,y:216}, {x:327,y:230}],
			[{x:332,y:216}, {x:300,y:157}, {x:339,y:161}, {x:382,y:172}, {x:390,y:183}, {x:391,y:212}, {x:385,y:218}]
		
		],	
			
		weak_points: [
				{x:79,y:126,rotate:330},
				{x:49,y:238,rotate:180},
				{x:207,y:237,rotate:170},
				{x:281,y:230,rotate:170},
				{x:360,y:218,rotate:180},
				{x:359,y:162,rotate:20},
				{x:313,y:215,rotate:90},
				{x:312,y:53,rotate:0},
				{x:283,y:10,rotate:20},
				{x:145,y:8,rotate:0}
				
		],
		hangar_positions: [
			{x:326,y:30},
			{x:31,y:213}
		]
	},
	ship6: {
		title: 'needsName',
		description: 'needsDescription',
		sprite:'img/ship_medium1.png',
		isMothership:false,
		fighter:fighter.ship1,
		offset:{x:-5,y:-8},
		polygon: [
			[{x:32,y:99}, {x:18,y:85}, {x:29,y:76}, {x:116,y:78}],
			[{x:116,y:78}, {x:142,y:70}, {x:195,y:64}, {x:223,y:84}, {x:216,y:141}, {x:150,y:141}, {x:79,y:140}, {x:32,y:119}, {x:32,y:99}],
			[{x:79,y:140}, {x:31,y:145}, {x:7,y:135}, {x:32,y:119}],
			[{x:223,y:84}, {x:241,y:72}, {x:263,y:71}, {x:282,y:90}, {x:287,y:121}, {x:261,y:153}, {x:244,y:158}, {x:216,y:141}]
		],
		weak_points: [
			{x:106,y:77,rotate:0}, 
			{x:271,y:73,rotate:10}, 
			{x:227,y:152,rotate:205},			
			{x:123,y:142,rotate:180}, 
			{x:48,y:142,rotate:170}	
		],
		hangar_positions: [
			{x:158,y:142},
			{x:158,y:142}
		]
	},
	ship7: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/ship_medium2.png',
		isMothership:false,
		fighter:fighter.ship2,
		offset:{x:-22,y:-13},
		polygon: [
			[{x:11,y:105},{x:48,y:89},{x:86,y:81},{x:283,y:18},{x:288,y:22},{x:238,y:73},{x:132,y:160},{x:47,y:147},{x:20,y:134},{x:11,y:117},],
			[{x:238,y:73}, {x:253,y:79}, {x:252,y:114}, {x:199,y:154}, {x:154,y:179}, {x:132,y:178}, {x:132,y:160}],
			[{x:252,y:114}, {x:286,y:114}, {x:295,y:121}, {x:295,y:139}, {x:283,y:184}, {x:226,y:184}, {x:199,y:160}, {x:199,y:154}]
		],
		weak_points: [
			{x:66,y:88,rotate:0},
			{x:156,y:67,rotate:330},
			{x:208,y:174,rotate:215},
			{x:85,y:151,rotate:190}				
		],
		hangar_positions: [
			{x:117,y:179},
			{x:117,y:179}
		]
	},		
	ship8: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/ship_medium3.png',
		isMothership:false,
		fighter:fighter.ship3,
		offset:{x:23,y:-22},
		polygon: [
			[{x:135,y:138}, {x:113,y:156}, {x:48,y:148}, {x:22,y:132}, {x:14,y:115}, {x:14,y:102}, {x:22,y:85}, {x:44,y:72}, {x:80,y:77}, {x:111,y:83}, {x:147,y:121}],
			[{x:147,y:121}, {x:254,y:121}, {x:243,y:144}, {x:147,y:144}, {x:135,y:138}],
			[{x:254,y:121}, {x:299,y:124}, {x:299,y:131}, {x:292,y:162}, {x:272,y:164}, {x:247,y:149}, {x:243,y:144}]
		],
		weak_points: [
			{x:66,y:78,rotate:14},
			{x:124,y:98,rotate:25},
			{x:294,y:133,rotate:90},
			{x:80,y:147,rotate:180}			
		],
		hangar_positions: [
			{x:122,y:152},
			{x:122,y:152}
		]
	},		
	ship9: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/ship_medium4.png',
		isMothership:false,
		fighter:fighter.ship4,
		offset:{x:7,y:-5},
		polygon: [
			[{x:175,y:129},{x:150,y:160},{x:120,y:179},{x:76,y:179},{x:50,y:164},{x:22,y:134},{x:22,y:68},{x:73,y:20},{x:118,y:20},{x:150,y:39},{x:172,y:72},{x:177,y:83}],
			[{x:177,y:83}, {x:243,y:83}, {x:254,y:153}, {x:232,y:153}, {x:175,y:129}],
			[{x:243,y:83}, {x:275,y:55}, {x:287,y:55}, {x:292,y:116}, {x:292,y:133}, {x:286,y:179}, {x:284,y:183}, {x:270,y:183}, {x:254,y:153}]
		],				
		weak_points: [
			{x:207,y:83,rotate:0},
			{x:149,y:155,rotate:135},
			{x:151,y:43,rotate:45},
			{x:246,y:153,rotate:205},
			{x:287,y:95,rotate:90}
		],
		hangar_positions: [
			{x:176,y:153},
			{x:176,y:153}
		]
	},	
	ship10: {
		title: 'Example',
		description: 'Lorem Ipsum',
		sprite:'img/ship_medium5.png',
		isMothership:false,
		fighter:fighter.ship5,
		offset:{x:7,y:2},
		polygon: [
			[{x:91,y:139},{x:37,y:161},{x:14,y:161},{x:7,y:120},{x:28,y:85},{x:59,y:59},{x:96,y:55},{x:228,y:60}],
			[{x:228,y:60}, {x:244,y:51}, {x:268,y:57}, {x:280,y:76}, {x:296,y:114}, {x:293,y:128}, {x:111,y:118}, {x:87,y:170}, {x:91,y:139}]		
		],				
		weak_points: [
			{x:141,y:57,rotate:0},
			{x:285,y:91,rotate:90},
			{x:54,y:154,rotate:160},
			{x:204,y:158,rotate:165}
		],
		hangar_positions: [
			{x:270,y:140},
			{x:270,y:140}
		]
	}
}