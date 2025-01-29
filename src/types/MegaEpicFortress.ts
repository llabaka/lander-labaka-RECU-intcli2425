export interface MegaEpicFortress {
    name: string,
    location: Location,
    defenses: Defenses,
    inhabitants: Inhabitants
    resources: Resources,
    history: History
}

interface Location {
    continent: string,
    coordinates: {
        latitude: number,
        longitude: number
    }
    nearbyLandmarks: NearbyLandMarks[]
}

interface NearbyLandMarks {
    name: string,
    type: string,
    distance: number
}

interface Defenses {
    walls: Walls,
    towers: Towers[]
}

interface Walls {
    material: string,
    height: number,
    enchantments: Enchantments[]
}

interface Enchantments {
    name: string,
    level: number
}

interface Towers {
    name: string,
    height: number,
    armament: Armament,
    guards: Guards[]
}

interface Armament {
    weaponType: string,
    ammunitionType: string,
    ammunitionCount: number
}

interface Guards {
    name: string,
    rank: string
}

interface Inhabitants {
    population: number,
    roles: Roles[]
}

interface Roles {
    role: string,
    count: number,
    equipment: SoldierRole | MageRole
    professions: Proffesions[]
}

interface SoldierRole {
    weapon: string,
    armor: string,
    shield: string

}

interface MageRole {
    staff: string,
    robe: string,
    amulet: string
}

interface Proffesions {
    type: string,
    count: number
}

interface Resources {
    storage: Storage
    armory: Armory
}

interface Storage {
    food: {
        type: string,
        quantity: number,
        unit: string
    },
    water: {
        source: string,
        capacity: number,
        unit: string
    }
}

interface Armory {
    weapons: Weapons[],
    shields: Shields[]
}

interface Weapons {
    type: string,
    quantity: number
}

interface Shields {
    type: string,
    quantity: number
}

interface History {
    founded: {
        year: number,
        by: string
    }
    majorEvents: MajorEvents[]
}

interface MajorEvents {
    year: number,
    event: string,
    outcome: string
}