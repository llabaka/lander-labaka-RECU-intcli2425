import { MegaEpicFortress } from "../types/MegaEpicFortress";

export const megaEpicFortress: MegaEpicFortress = {
  name: "Citadel of Eternal Night",
  location: {
    continent: "Vernalis",
    coordinates: {
      latitude: 45.6789,
      longitude: -123.4567,
    },
    nearbyLandmarks: [
      {
        name: "Cavern of Whispers",
        type: "Cave",
        distance: 12.3,
      },
      {
        name: "Ruins of Eldoria",
        type: "Ancient Ruins",
        distance: 7.8,
      },
      {
        name: "Hollow of the Lost",
        type: "Town",
        distance: 12.3,
      },
      {
        name: "Rotten Tower",
        type: "Ancient Ruins",
        distance: 7.8,
      }
    ],
  },
  defenses: {
    walls: {
      material: "Obsidian-infused steel",
      height: 50,
      enchantments: [
        {
          name: "Barrier of Shadows",
          level: 5

        },
        {
          name: "Flame Repulsion",
          level: 3

        },
        {
          name: "Spread of Diseases",
          level: 7

        },
        {
          name: "Blessed Soul",
          level: 6

        }
      ],
    },
    towers: [
      {
        name: "Tower of Vigilance",
        height: 60,
        armament: {
          weaponType: "Ballista",
          ammunitionType: "Explosive bolts",
          ammunitionCount: 100,
        },
        guards: [
          {
            name: "Lira the Watcher",
            rank: "Captain"

          },
          {
            name: "Garron the Keen-eyed",
            rank: "Archer"

          },
        ],
      },
      {
        name: "Tower of Silence",
        height: 70,
        armament: {
          weaponType: "Arcane Cannon",
          ammunitionType: "Mana Crystals",
          ammunitionCount: 50,
        },
        guards: [
          {
            name: "Eryndor the Silent",
            rank: "Mage"

          },
          {
            name: "Kael the Shadow",
            rank: "Assassin"

          },
        ],
      },
      {
        name: "Tower of Realm",
        height: 60,
        armament: {
          weaponType: "Arcane Cannon",
          ammunitionType: "Mana Crystals",
          ammunitionCount: 150,
        },
        guards: [
          {
            name: "Jacob the Arcane",
            rank: "Mage"

          },
          {
            name: "Molio the Dog",
            rank: "Soldier"

          },
          {
            name: "Molio the Cat",
            rank: "Soldier"
          },
        ],
      },
      {
        name: "Tower of Ice",
        height: 80,
        armament: {
          weaponType: "Ballista",
          ammunitionType: "Ice Crystals",
          ammunitionCount: 350,
        },
        guards: [
          {
            name: "Lazarus",
            rank: "Mage"

          },
          {
            name: "Pesbe",
            rank: "Assassin"

          },
        ],
      },
      {
        name: "Tower of Dead Squad",
        height: 90,
        armament: {
          weaponType: "Elemental Bow",
          ammunitionType: "Fire elemental",
          ammunitionCount: 650,
        },
        guards: [
          {
            name: "Strombo",
            rank: "Soldier"

          },
          {
            name: "Kain",
            rank: "Soldier"

          },
          {
            name: "Pazos el Traidor",
            rank: "Pariah"

          },
        ],
      },
      {
        name: "Tower of Betrayer",
        height: 10,
        armament: {
          weaponType: "Banana Launcher",
          ammunitionType: "Zurullo Epic",
          ammunitionCount: 1,
        },
        guards: [
          {
            name: "Pazos el Traidor",
            rank: "Pariah"

          },
          {
            name: "Strombo",
            rank: "Soldier"
          },
          {
            name: "Labaka el Tramposo",
            rank: "Pariah"

          },
        ],
      }
    ],
  },
  inhabitants: {
    population: 1000,
    roles: [
      {
        role: "Soldier",
        count: 300,
        equipment: {
          weapon: "Longsword",
          armor: "Steel Plate",
          shield: "Tower Shield",
        },
        professions: [
        ]
      },
      {
        role: "Mage",
        count: 100,
        equipment: {
          staff: "Crystal Wand",
          robe: "Enchanted Robes",
          amulet: "Amulet of Wisdom",
        },
        professions: [
        ]
      },
      {
        role: "Villager",
        count: 600,
        equipment: {
          weapon: "Longsword",
          armor: "Steel Plate",
          shield: "Tower Shield",
        },
        professions: [
          {
            type: "Farmer",
            count: 467

          },
          {
            type: "Blacksmith",
            count: 31

          },
          {
            type: "Merchant",
            count: 63

          },
          {
            type: "Healer",
            count: 129

          },
          {
            type: "Beggar",
            count: 97

          },
          {
            type: "Acolyte",
            count: 237

          }
        ],
      },
    ],
  },
  resources: {
    storage: {
      food: {
        type: "Grain",
        quantity: 5000,
        unit: "kilograms",
      },
      water: {
        source: "Underground well",
        capacity: 100000,
        unit: "liters",
      },
    },
    armory: {
      weapons: [
        {
          type: "Sword",
          quantity: 200
        },
        {
          type: "Bow",
          quantity: 150
        },
        {
          type: "Spear",
          quantity: 300
        },
      ],
      shields: [
        {
          type: "Round Shield",
          quantity: 100
        },
        {
          type: "Tower Shield",
          quantity: 50
        },
      ],
    },
  },
  history: {
    founded: {
      year: 1234,
      by: "King Aldorin the Eternal",
    },
    majorEvents: [
      {
        year: 1300,
        event: "The Great Siege of Vernalis",
        outcome: "Victory",
      },
      {
        year: 1450,
        event: "The Cataclysmic War",
        outcome: "Partial Destruction",
      },
      {
        year: 1470,
        event: "Apocalipsis of Joseph",
        outcome: "Victory",
      },
      {
        year: 1471,
        event: "Ethazium plague",
        outcome: "Partial Destruction",
      }
    ],
  },
};