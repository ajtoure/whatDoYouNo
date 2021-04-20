const homophones = [
  "accessary",
  "ail",
  "air",
  "aisle",
  "all",
  "allowed",
  "alms",
  "altar",
  "arc",
  "ate",
  "auger",
  "auk",
  "aural",
  "away",
  "awe",
  "axel",
  "aye",
  "bail",
  "bait",
  "baize",
  "bald",
  "ball",
  "band",
  "bard",
  "bare",
  "bark",
  "baron",
  "base",
  "bay",
  "bazaar",
  "be",
  "beach",
  "bean",
  "beat",
  "beau",
  "beer",
  "bel",
  "berry",
  "berth",
  "bight",
  "billed",
  "bitten",
  "blew",
  "bloc",
  "boar",
  "board",
  "boarder",
  "bold",
  "boos",
  "born",
  "bough",
  "boy",
  "brae",
  "braid",
  "braise",
  "brake",
  "bread",
  "brews",
  "bridal",
  "broach",
  "bur",
  "but",
  "buy",
  "buyer",
  "calendar",
  "call",
  "canvas",
  "capital",
  "carrot",
  "cast",
  "caster",
  "caught",
  "caw",
  "cede",
  "ceiling",
  "cell",
  "censer",
  "cent",
  "cereal",
  "cheap",
  "check",
  "choir",
  "chord",
  "cite",
  "clack",
  "clew",
  "climb",
  "close",
  "coal",
  "coarse",
  "coign",
  "colonel",
  "complacent",
  "complement",
  "compliment",
  "coo",
  "cops",
  "council",
  "cousin",
  "creak",
  "crews",
  "cue",
  "curb",
  "currant",
  "cymbol",
  "dam",
  "days",
  "dear",
  "descent",
  "desert",
  "deviser",
  "dew",
  "die",
  "discreet",
  "doe",
  "done",
  "douse",
  "draft",
  "dual",
  "earn",
  "eery",
  "ewe",
  "faint",
  "fah",
  "fair",
  "farther",
  "fate",
  "faun",
  "fay",
  "faze",
  "feat",
  "ferrule",
  "few",
  "fie",
  "file",
  "find",
  "fir",
  "fizz",
  "flair",
  "flaw",
  "flea",
  "flex",
  "flew",
  "floe",
  "flour",
  "foaled",
  "for",
  "foreword",
  "fort",
  "forth",
  "foul",
  "franc",
  "freeze",
  "friar",
  "furs",
  "gait",
  "galipot",
  "gallop",
  "gamble",
  "gays",
  "genes",
  "gild",
  "gilt",
  "giro",
  "gnaw",
  "gneiss",
  "gorilla",
  "grate",
  "greave",
  "greys",
  "grisly",
  "groan",
  "guessed",
  "hail",
  "hair",
  "hall",
  "hangar",
  "hart",
  "haw",
  "hay",
  "heal",
  "hear",
  "heard",
  "heroin",
  "hew",
  "hi",
  "higher",
  "him",
  "ho",
  "hoard",
  "hoarse",
  "holey",
  "hour",
  "idle",
  "in",
  "indict",
  "jewel",
  "kernel",
  "key",
  "knave",
  "knead",
  "knew",
  "knight",
  "knit",
  "knob",
  "knock",
  "knot",
  "know",
  "knows",
  "laager",
  "lac",
  "lade",
  "lain",
  "lam",
  "laps",
  "larva",
  "lase",
  "law",
  "lay",
  "lea",
  "leach",
  "lead",
  "leak",
  "lean",
  "lessen",
  "levee",
  "liar",
  "licence",
  "licker",
  "lie",
  "lieu",
  "links",
  "lo",
  "load",
  "loan",
  "locks",
  "loop",
  "loot",
  "made",
  "mail",
  "main",
  "maize",
  "mall",
  "manna",
  "mantel",
  "mare",
  "mark",
  "marshal",
  "marten",
  "mask",
  "maw",
  "me",
  "mean",
  "meat",
  "medal",
  "metal",
  "meter",
  "might",
  "miner",
  "mind",
  "missed",
  "moat",
  "mode",
  "moor",
  "moose",
  "morning",
  "muscle",
  "naval",
  "nay",
  "nigh",
  "none",
  "oar",
  "od",
  "ode",
  "oh",
  "one",
  "overdo",
  "packed",
  "packs",
  "pail",
  "pain",
  "pair",
  "palate",
  "pascal",
  "paten",
  "pause",
  "pawn",
  "pea",
  "peace",
  "peak",
  "peal",
  "pearl",
  "pedal",
  "peer",
  "pi",
  "pica",
  "place",
  "plain",
  "pleas",
  "plum",
  "pole",
  "poof",
  "practice",
  "praise",
  "principal",
  "profit",
  "quarts",
  "quean",
  "rain",
  "raise",
  "rap",
  "raw",
  "read",
  "read",
  "real",
  "reek",
  "rest",
  "retch",
  "review",
  "rheum",
  "right",
  "ring",
  "road",
  "roe",
  "role",
  "roo",
  "rood",
  "root",
  "rose",
  "rota",
  "rote",
  "rough",
  "rouse",
  "rung",
  "rye",
  "saver",
  "spade",
  "sale",
  "sane",
  "satire",
  "sauce",
  "saw",
  "scene",
  "scull",
  "sea",
  "seam",
  "sear",
  "seas",
  "seller",
  "sew",
  "shake",
  "shear",
  "shoe",
  "sic",
  "side",
  "sign",
  "sink",
  "slay",
  "sloe",
  "soar",
  "sole",
  "some",
  "son",
  "sort",
  "spa",
  "staid",
  "stair",
  "stake",
  "stalk",
  "stationary",
  "steal",
  "stile",
  "storey",
  "straight",
  "sweet",
  "swat",
  "tacks",
  "tale",
  "talk",
  "tare",
  "taught",
  "te",
  "team",
  "tear",
  "teas",
  "terce",
  "tern",
  "than",
  "there",
  "threw",
  "throes",
  "throne",
  "thyme",
  "tic",
  "tide",
  "tire",
  "to",
  "toad",
  "told",
  "tole",
  "ton",
  "tor",
  "tough",
  "troop",
  "tuba",
  "vain",
  "vale",
  "vary",
  "vial",
  "wail",
  "wain",
  "waist",
  "wait",
  "waive",
  "wall",
  "war",
  "ware",
  "warn",
  "wart",
  "watt",
  "wax",
  "way",
  "we",
  "weak",
  "weal",
  "wean",
  "weather",
  "weaver",
  "weir",
  "were",
  "wet",
  "wheald",
  "where",
  "which",
  "whig",
  "while",
  "whine",
  "whirl",
  "whirled",
  "white",
  "whole",
  "woe",
  "wood",
  "yaw",
  "yoke",
];

export default homophones;