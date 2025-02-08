export interface MegaEpicFortress {
    name: string,
    location: Location,
    defenses: Defenses,
    inhabitants: Inhabitants
    resources: Resources,
    history: History
}

export interface Location {
    continent: string,
    coordinates: {
        latitude: number,
        longitude: number
    }
    nearbyLandmarks: NearbyLandMarks[]
}

export interface NearbyLandMarks {
    name: string,
    type: string,
    distance: number
}

export interface Defenses {
    walls: Walls,
    towers: Towers[]
}

export interface Walls {
    material: string,
    height: number,
    enchantments: Enchantments[]
}

export interface Enchantments {
    name: string,
    level: number
}

export interface Towers {
    name: string,
    height: number,
    armament: Armament,
    guards: Guards[]
}

export interface Armament {
    weaponType: string,
    ammunitionType: string,
    ammunitionCount: number
}

export interface Guards {
    name: string,
    rank: string
}

export interface Inhabitants {
    population: number,
    roles: Roles[]
}

export interface Roles {
    role: string,
    count: number,
    equipment: SoldierRole | MageRole
    professions: Proffesions[]
}

export interface SoldierRole {
    weapon: string,
    armor: string,
    shield: string

}

export interface MageRole {
    staff: string,
    robe: string,
    amulet: string
}

export interface Proffesions {
    type: string,
    count: number
}

export interface Resources {
    storage: Storage
    armory: Armory
}

export interface Storage {
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

export interface Armory {
    weapons: Weapons[],
    shields: Shields[]
}

export interface Weapons {
    type: string,
    quantity: number
}

export interface Shields {
    type: string,
    quantity: number
}

export interface History {
    founded: {
        year: number,
        by: string
    }
    majorEvents: MajorEvents[]
}

export interface MajorEvents {
    year: number,
    event: string,
    outcome: string
}

export type VillagerProfessionCount = Record<string, number>;
export type TowerGuardCount = Record<string, number>;
export type TowerHeightCount = Record<number, number>