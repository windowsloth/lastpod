const data = [
  {
    "id": 0,
    "name": "Walter Freeman",
    "nickname": "Freeman",
    "blurb": "Invented and popularized the lobotomy",
    "tags": [
      "flim-flam man",
      "scientist",
      "historical figure"
    ],
    "cons": [3, 7],
    "epfeat": [
      413,
      414,
      70320
    ]
  },
  {
    "id": 1,
    "name": "Allen Dulles",
    "nickname": "Dulles",
    "blurb": "Infamous former CIA director",
    "tags": [
      "spook",
      "historical figure"
    ],
    "cons": [7, 28],
    "epfeat": [
      404,
      413
    ]
  },
  {
    "id": 2,
    "name": "Helena Blavatsky",
    "nickname": "HPB",
    "blurb": "Extremely influential early 20th century occultist",
    "tags": [
      "occultist",
      "theosophist",
      "spiritualist"
    ],
    "cons": [4, 13, 18, 34, 39],
    "epfeat": [
      157,
      158,
      410,
      411,
      412
    ]
  },
  {
    "id": 3,
    "name":"Aleš Hrdlička",
    "nickname": "Hrdlička",
    "blurb":"Anthropologist, curator at the Smithsonian",
    "tags": [
      "scientist"
    ],
    "cons": [0],
    "epfeat": [
      406,
      413
    ]
  },
  {
    "id": 4,
    "name":"Adolph Hitler",
    "nickname": "Hitler",
    "blurb":"Leader of the Nazi Party, needs no introduction",
    "tags": [
      "mass-murderer",
      "historical figure"
    ],
    "cons": [2, 5, 13],
    "epfeat": [
      157,
      158,
      348,
      349,
      350
    ]
  },
  {
    "id": 5,
    "name":"Joseph Mengele",
    "nickname": "Mengele",
    "blurb":"Nazi doctor at Auschwitz, real life mad scientist",
    "tags": [
      "mass-murderer",
      "scientist",
      "historical figure"
    ],
    "cons": [4, 13],
    "epfeat": [
      216,
      217,
      348,
      349,
      350
    ]
  },
  {
    "id": 6,
    "name":"Stanton T. Friedman",
    "nickname": "Friedman",
    "blurb":"Nuclear physicist and ufologist, uncovered the Majesty 12 papers",
    "tags": [
      "ufologist",
      "scientist"
    ],
    "cons": [24],
    "epfeat": [
      169,
      170,
      216,
      217,
      293,
      294
    ]
  },
  {
    "id": 7,
    "name":"John F. Kennedy",
    "nickname": "JFK",
    "blurb":"35th President of the US",
    "tags": [
      "historical figure"
    ],
    "cons": [0, 1, 24, 28],
    "epfeat": [
      400,
      401,
      403,
      31320,
      404,
      405,
      70320
    ]
  },
  {
    "id": 8,
    "name":"Betty & Barney Hill",
    "nickname": "Hill",
    "blurb":"First major abduction case",
    "tags": [
      "alien contacee/witness",
      "abductee"
    ],
    "cons": [29],
    "epfeat": [
      169,
      170
    ],
    "epment": [

    ]
  },
  {
    "id": 9,
    "name":"Bill Cooper",
    "nickname": "Cooper",
    "blurb":"Radio host and OG conspiracy theorist",
    "tags": [

    ],
    "cons": [11, 22, 24],
    "epfeat": [
      293,
      294
    ]
  },
  {
    "id": 10,
    "name":"J. Allen Hynek",
    "nickname": "Hynek",
    "blurb":"Ufologist who began as a skeptic working on Project Blue Book",
    "tags": [
      "scientist",
      "spook"
    ],
    "cons": [22],
    "epfeat": [
      305
    ]
  },
  {
    "id": 11,
    "name":"Timothy McVeigh",
    "nickname": "McVeigh",
    "blurb":"Perpatrator of the Oklahoma City bombing",
    "tags": [
      "mass-murderer"
    ],
    "cons": [9, 12, 35],
    "epfeat": [
      274,
      275,
      276,
      293
    ]
  },
  {
    "id": 12,
    "name":"David Koresh",
    "nickname": "Koresh",
    "blurb":"Leader of the Branch Dividians",
    "tags": [
      "mass-murderer",
      "cult leader"
    ],
    "cons": [11, 20, 35],
    "epfeat": [
      133,
      179,
      274,
      275
    ]
  },
  {
    "id": 13,
    "name":"Heinrich Himmler",
    "nickname": "Himmler",
    "blurb":"One of the architects of the Holocaust, head of the SS",
    "tags": [
      "mass-murderer",
      "occultist",
      "historical figure"
    ],
    "cons": [4, 5, 21],
    "epfeat": [
      158,
      349,
      350
    ]
  },
  {
    "id": 14,
    "name":"Aleister Crowley",
    "nickname": "Crowley",
    "blurb":"The Great Beast 666: Left-Hand Path magician and cum aficionado",
    "tags": [
      "occultist",
      "historical figure"
    ],
    "cons": [15, 16, 17, 21, 34, 41],
    "epfeat": [
      55,
      158,
      197,
      199,
      261,
      324
    ]
  },
  {
    "id": 15,
    "name":"Jack Parsons",
    "nickname": "Parsons",
    "blurb":"Rocket scientist at JPL and enthusiastic ritual magic user",
    "tags": [
      "scientist",
      "historical figure"
    ],
    "cons": [14, 16, 27],
    "epfeat": [
      261,
      324
    ]
  },
  {
    "id": 16,
    "name":"L. Ron Hubbard",
    "nickname": "LRH",
    "blurb":"Sci-fi author and founder of Scientology",
    "tags": [
      "flim-flam man",
      "cult leader",
      "occultist"
    ],
    "cons": [14, 15],
    "epfeat": [
      261,
      262,
      263,
      264,
      324
    ]
  },
  {
    "id": 17,
    "name":"Albert Bender",
    "nickname": "Bender",
    "blurb":"Ufologist who is partially responsible for the modern Man in Black",
    "tags": [
      "ufologist"
    ],
    "cons": [14, 30],
    "epfeat": [
      323,
      324
    ]
  },
  {
    "id": 18,
    "name":"Joseph Smith",
    "nickname": "Smith",
    "blurb":"Founder of the Mormon Church, former grave robber",
    "tags": [
      "occultist",
      "cult leader",
      "flim-flam man",
      "historical figure"
    ],
    "cons": [2],
    "epfeat": [
      378,
      379,
      380,
      382,
      384,
      385,
      410
    ]
  },
  {
    "id": 19,
    "name":"Whitley Strieber",
    "nickname": "Strieber",
    "blurb":"Famous abductee, author of Communion",
    "tags": [
      "alien abductee"
    ],
    "cons": [],
    "epfeat": [
      72,
      134,
      294
    ]
  },
  {
    "id": 20,
    "name":"Eric Harris & Dylan Klebold",
    "nickname": "Columbine Shooters",
    "blurb":"",
    "tags": [
      "mass murderer"
    ],
    "cons": [12],
    "epfeat": [
      178,
      179
    ]
  },
  {
    "id": 21,
    "name":"Michael Aquino",
    "nickname":"Aquino",
    "blurb":"Founder of the Temple of Set, worked on the MindWar Program",
    "tags": [
      "occultist, spook"
    ],
    "cons": [13, 14, 28],
    "epfeat": [
      118,
      199
    ]
  },
  {
    "id": 22,
    "name":"Jacques Vallée",
    "nickname":"Vallée",
    "blurb":"Ufologist, author, and scientist in various fields",
    "tags": [
      "scientist, ufologist"
    ],
    "cons": [9, 10],
    "epfeat": [
      293,
      305
    ]
  },
  {
    "id": 23,
    "name":"Travis Walton",
    "nickname":"Walton",
    "blurb":"Famous abductee, basis for the film Fire in the Sky",
    "tags": [
      "abductee"
    ],
    "cons": [26, 30],
    "epfeat": [
      284
    ]
  },
  {
    "id": 24,
    "name":"Majestic 12",
    "nickname":"MJ-12",
    "blurb":"Shadowy organization somehow related to many UFO conspirancies. Also known as Majesty 12",
    "tags": [],
    "cons": [6, 7, 9, 26, 27, 28, 29, 31, 33],
    "epfeat": [
      284
    ]
  },
  {
    "id": 25,
    "name":"Ed Walters",
    "nickname":"Walters",
    "blurb":"Main figure in the Gulf Breeze UFO Incident",
    "tags": [],
    "cons":[26, 29],
    "epfeat": [
      252,
      253
    ]
  },
  {
    "id": 26,
    "name":"Mutual UFO Network",
    "nickname":"MUFON",
    "blurb":"A UFO investigation organization",
    "tags": [],
    "cons":[23, 24, 25],
    "epfeat": [
      253
    ]
  },
  {
    "id": 27,
    "name":"National Aeronautics and Space Administration",
    "nickname":"NASA",
    "blurb":"Never a straight answer",
    "tags": [],
    "cons":[15, 24, 28],
    "epfeat": []
  },
  {
    "id": 28,
    "name":"Central Intelligence Agency",
    "nickname":"CIA",
    "blurb":"The US' infamous intelligence agency. Born out of the OSS",
    "tags": [],
    "cons":[1, 7, 21, 24, 27, 30],
    "epfeat": []
  },
  {
    "id": 29,
    "name":"the Greys",
    "nickname":"Greys",
    "blurb":"Alien race of questionable motivations. Inspiration for the classic alien look",
    "tags": [],
    "cons":[8, 24, 25, 31, 36, 37],
    "epfeat": []
  },
  {
    "id": 30,
    "name":"NICAP",
    "nickname":"NICAP",
    "blurb":"National Investigations Comittee on Aerial Phenomena. A UFO research group",
    "tags": [],
    "cons":[17, 23, 28],
    "epfeat": []
  },
  {
    "id": 31,
    "name":"Dwight D. Eisenhower",
    "nickname":"Eisenhower",
    "blurb":"Former US President, signer of the Greada Treaty",
    "tags": [],
    "cons":[24, 29, 32],
    "epfeat": []
  },
  {
    "id": 32,
    "name":"Valiant Thor",
    "nickname":"Valiant Thor",
    "blurb":"Venusian ambassador, member of the Secret Space Program. Has purple skin?",
    "tags": [],
    "cons":[31],
    "epfeat": []
  },
  {
    "id": 33,
    "name":"J. Edgar Hoover",
    "nickname":"Hoover",
    "blurb":"Founder of the FBI. Villain of history",
    "tags": [],
    "cons":[24, 35],
    "epfeat": []
  },
  {
    "id": 34,
    "name":"Samuel Liddell MacGregor Mathers",
    "nickname":"Mathers",
    "blurb":"One of the founders of the Hermetic Order of the Golden Dawn",
    "tags": [],
    "cons":[2, 14, 40, 41],
    "epfeat": []
  },
  {
    "id": 35,
    "name":"Federal Bureau of Investigations",
    "nickname":"FBI",
    "blurb":"US domestic intelligence agency",
    "tags": [],
    "cons":[11, 12, 33],
    "epfeat": []
  },
  {
    "id": 36,
    "name":"Dulce Base",
    "nickname":"Dulce",
    "blurb":"Top secret intergalactic underground research base in New Mexico",
    "tags": [],
    "cons":[29, 38],
    "epfeat": []
  },
  {
    "id": 37,
    "name":"Reptilians",
    "nickname":"Reptilians",
    "blurb":"Aggresive, malevolent aliens. Exact motivations vary depending on who you ask",
    "tags": [],
    "cons":[29, 36],
    "epfeat": []
  },
  {
    "id": 38,
    "name":"Los Alamos National Lab",
    "nickname":"Los Alamos",
    "blurb":"Laboratory that was the home base for the Manhattan Project",
    "tags": [],
    "cons":[36],
    "epfeat": []
  },
  {
    "id": 39,
    "name":"Bonnie Nettles & Marshall Applewhite",
    "nickname":"Ti and Do",
    "blurb":"Leaders of the Heaven's Gate cult, who's mass suicide coincided with the arrival of the Hale-Bopp comet.",
    "cons":[2],
    "epfeat":[]
  },
  {
    "id": 40,
    "name":"William Wynn Wescott",
    "nickname":"Wescott",
    "blurb":"One of the founders of the Hermetic Order of the Golden Dawn. Also a member of the Rosicrucians.",
    "cons":[34, 41],
    "epfeat":[]
  },
  {
    "id": 41,
    "name":"the Hermetic Order of the Golden Dawn",
    "nickname":"Golden Dawn",
    "blurb":"Prominent Western right-hand path magical society.",
    "cons":[14, 34, 40],
    "epfeat":[]
  },
  {
    "id": 42,
    "name":"the Order of the Solar Temple",
    "nickname":"Solar Temple",
    "blurb":"Mysterious French (and French-Canadian) cult. Many of their high-society members died in elaborate, ritualistic, fire-related, murder/suicides.",
    "cons":[43],
    "epfeat":[]
  },
  {
    "id": 43,
    "name":"Rosicrucians",
    "nickname":"Rosicrucians",
    "blurb":"Spiritualist group with its roots in esoteric Christianity. There have been many offshoots and varieties over the hundreds of years since it first arose.",
    "cons":[42],
    "epfeat":[]
  }
];
