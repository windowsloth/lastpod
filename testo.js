const data = [
  {
    "id": 0,
    "name": "Walter Freeman",
    "nickname": "Freeman",
    "blurb": "A very bad doctor but a great salesman. Popularized the lobotomy.",
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
    "blurb": "Infamous former CIA director. Member of the Warren Commission.",
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
    "blurb": "Extremely influential early 20th century occultist. Founded the Theosophical Society and wrote several books, including her opus: the Secret Doctrine.",
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
    "blurb":"Anthropologist, first curator at the Smithsonian.",
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
    "blurb":"Leader of the Nazi Party, one of the great villains of the 20th Century. Needs no introduction.",
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
    "blurb":"Nazi doctor at Auschwitz, real life mad scientist. Obsessed with twins, terrible at science.",
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
    "blurb":"Nuclear physicist and famous ufologist. Broke onto the scene with the Roswell Incident and the discovery of the Majesty 12 papers.",
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
    "blurb":"35th President of the US. Had an unfortunate time in Dallas back in November, 1963.",
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
    "nickname": "the Hills",
    "blurb":"First major abduction case. Their experience became the archetypal UFO abduction scenario.",
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
    "blurb":"Radio host and OG conspiracy theorist. Very complicated figure who's ideas proved to be very influential, for better or for worse.",
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
    "blurb":"Ufologist who began as a skeptic working on Project Blue Book. Ultimately became a believer and wrote several books on UFO phenomena.",
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
    "blurb":"Perpetrator of the Oklahoma City bombing. Had a terrible haircut and even worse beliefs about white supremacy.",
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
    "blurb":"Leader of the Branch Dividians, a cult that split off from the Seventh Day Adventists and wound up running afoul of the ATF and the FBI.",
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
    "blurb":"One of the architects of the Holocaust and the head of the SS. Former chicken farmer and the worst kind of nerd.",
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
    "blurb":"The Great Beast 666: Left-Hand Path magician and cum aficionado. Creator of Thelema and author of several books, including the Book of the Law.",
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
    "blurb":"Rocket scientist at JPL and enthusiastic ritual magic user. Friend, enemy, and cuckold of L. Ron Hubbard at varioius points in time (not necessarily in that order).",
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
    "blurb":"Science-fiction author and founder of Scientology. The only things he liked more than boats were money, and also ordering people around while on a boat.",
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
    "blurb":"Ufologist who was partially responsible for the modern Man in Black.",
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
    "blurb":"Founder of the Mormon Church, former grave robber. A complicated figure with a penchant for wanting to marry multiple children that ultimately got him killed.",
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
    "blurb":"A famous abductee, and author of hit book Communion. Did not have the most positive alien experiences, all things considered.",
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
    "blurb":"The two teenagers responsible for the Columbine school shooting. Labled by the media as nerds who were victims of bullying, but this does not seem to be an accurate assesment.",
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
    "blurb":"Founder of the Temple of Set, worked on the MindWar Program. If his eyebrows didn't make him suspicious enough, he is also linked to several murky child abuse cases.",
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
    "blurb":"Ufologist, author, and scientist in various fields. Has interesting ideas about UFOs and the nature of reality.",
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
    "blurb":"Famous abductee, basis for the film Fire in the Sky. Worked as a logger.",
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
    "blurb":"Shadowy organization somehow related to many UFO conspirancies. Also known as Majesty 12.",
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
    "blurb":"Main figure in the Gulf Breeze UFO Incident. Became a bit of an amateur photographer and captured some very interesting images.",
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
    "blurb":"A UFO investigation organization. Still somewhat active today.",
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
    "blurb":"Never a straight answer.",
    "tags": [],
    "cons":[15, 24, 28],
    "epfeat": []
  },
  {
    "id": 28,
    "name":"Central Intelligence Agency",
    "nickname":"CIA",
    "blurb":"The US' infamous intelligence agency. Born out of the OSS. Loves orchestrating coups, trafficking drugs, and long walks on the beach.",
    "tags": [],
    "cons":[1, 7, 21, 24, 27, 30],
    "epfeat": []
  },
  {
    "id": 29,
    "name":"the Greys",
    "nickname":"Greys",
    "blurb":"Alien race of questionable motivations. Inspiration for the classic alien look. Possibly not organic beings, almost definitely a hive mind of some sort. Depends on who you ask.",
    "tags": [],
    "cons":[8, 24, 25, 31, 36, 37],
    "epfeat": []
  },
  {
    "id": 30,
    "name":"NICAP",
    "nickname":"NICAP",
    "blurb":"National Investigations Comittee on Aerial Phenomena. A UFO research group. Has some shady ties to the government.",
    "tags": [],
    "cons":[17, 23, 28],
    "epfeat": []
  },
  {
    "id": 31,
    "name":"Dwight D. Eisenhower",
    "nickname":"Eisenhower",
    "blurb":"Former US President, signer of the Greada Treaty. Ultimately may be responsible for the modern secret government, although it doesn't seem like that was his intention.",
    "tags": [],
    "cons":[24, 29, 32],
    "epfeat": []
  },
  {
    "id": 32,
    "name":"Valiant Thor",
    "nickname":"Valiant Thor",
    "blurb":"Venusian ambassador, member of the Secret Space Program. Has purple skin.",
    "tags": [],
    "cons":[31],
    "epfeat": []
  },
  {
    "id": 33,
    "name":"J. Edgar Hoover",
    "nickname":"Hoover",
    "blurb":"Founder of the FBI. Villain of history and all-around hateful man.",
    "tags": [],
    "cons":[24, 35],
    "epfeat": []
  },
  {
    "id": 34,
    "name":"Samuel Liddell MacGregor Mathers",
    "nickname":"Mathers",
    "blurb":"One of the founders of the Hermetic Order of the Golden Dawn, before he was kicked out after his feud with Crowley.",
    "tags": [],
    "cons":[2, 14, 40, 41],
    "epfeat": []
  },
  {
    "id": 35,
    "name":"Federal Bureau of Investigations",
    "nickname":"FBI",
    "blurb":"US domestic intelligence agency.",
    "tags": [],
    "cons":[11, 12, 33],
    "epfeat": []
  },
  {
    "id": 36,
    "name":"Dulce Base",
    "nickname":"Dulce",
    "blurb":"Military base in New Mexico. Also possibly the home of a top secret intergalactic underground research base.",
    "tags": [],
    "cons":[29, 37, 38],
    "epfeat": []
  },
  {
    "id": 37,
    "name":"Reptilians",
    "nickname":"Reptilians",
    "blurb":"Aggresive, malevolent aliens. Exact motivations vary depending on who's telling the story. Their origins also differ from acount to account, but they've been around for a long time.",
    "tags": [],
    "cons":[29, 36],
    "epfeat": []
  },
  {
    "id": 38,
    "name":"Los Alamos National Lab",
    "nickname":"Los Alamos",
    "blurb":"Laboratory that was the home base for the Manhattan Project.",
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
    "cons":[34, 41, 43],
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
    "blurb":"Spiritualist group with its roots in esoteric Christianity. There have been many offshoots and variations over the hundreds of years since it first arose.",
    "cons":[40, 42],
    "epfeat":[]
  }
];
