import { LandMarksDistance, MegaEpicFortress, Recurses2Count, RecursesCount, RolesCount, TotalGuardsByWeapon, TowerGuardCount, TowerHeightCount, Towers, VillagerProfessionCount, WeaponCount } from "../types/MegaEpicFortress";

// Obtiene las torres que usan un tipo de arma específico y los nombres de los guardianes en esas torres.
export function getTowersAndGuardsByWeaponType(fortress: MegaEpicFortress, weapon: string): { towers: Towers[], guardNames: string[] } {

  const towers = fortress.defenses.towers.filter(tower => tower.armament.weaponType === weapon);

  const guardNames = towers.flatMap(tower => tower.guards.map(guard => guard.name));

  return { towers, guardNames };
}

// Cuenta la cantidad de aldeanos por tipo de profesión en la fortaleza.
export function countVillagersByProfession(fortress: MegaEpicFortress): VillagerProfessionCount {

  const villagers = fortress.inhabitants.roles.find(role => role.role === 'Villager');

  const villagerCounts: VillagerProfessionCount = {};

  villagers?.professions.forEach(profession => {
    villagerCounts[profession.type] = profession.count;
  })

  return villagerCounts;
}

// Cuenta la cantidad de guardianes por torre en la fortaleza.
export function countDefendersByTower(fortress: MegaEpicFortress): TowerGuardCount {

  const defenderCounts: VillagerProfessionCount = {};

  fortress.defenses.towers.forEach(tower => {
    defenderCounts[tower.name] = tower.guards.length;
  });

  return defenderCounts;
}

// Cuenta la cantidad de torres agrupadas por su altura.
export function countTowersByHeight(fortress: MegaEpicFortress): TowerHeightCount {

  const heightCount: TowerHeightCount = {};

  fortress.defenses.towers.forEach(tower => {
    const height = tower.height;

    if (heightCount[height]) {
      heightCount[height]++;
    } else {
      heightCount[height] = 1;
    }
  });

  return heightCount;
}

// Cuenta la cantidad total de recursos (comida, agua, escudos y armas) en la fortaleza.
export function countRecurses(fortress: MegaEpicFortress): RecursesCount {

  const recursesCount: RecursesCount = {};

  const totalFood = fortress.resources.storage.food.quantity;
  const totalWater = fortress.resources.storage.water.capacity;

  recursesCount["totalFood"] = totalFood;
  recursesCount["totalWater"] = totalWater;

  let totalShields = 0;
  let totalWeapons = 0;

  fortress.resources.armory.shields.forEach(shield => {
    totalShields += shield.quantity;
  });

  fortress.resources.armory.weapons.forEach(weapon => {
    totalWeapons += weapon.quantity;
  });

  recursesCount["totalShields"] = totalShields;
  recursesCount["totalWeapons"] = totalWeapons;

  return recursesCount;
}

// Cuenta la cantidad de guardianes por su rol (rango) en toda la fortaleza.
export function countRoles(fortress: MegaEpicFortress): RolesCount {
  const rolesCount: RolesCount = {};

  const allGuards = fortress.defenses.towers.flatMap(tower => tower.guards);

  allGuards.forEach(guard => {
    const rank = guard.rank;

    if (rolesCount[rank]) {
      rolesCount[rank]++;
    } else {
      rolesCount[rank] = 1;
    }
  });

  return rolesCount;
}

// Cuenta los recursos básicos (grano y agua) en la fortaleza.
export function countOtherResources(fortress: MegaEpicFortress): Recurses2Count {
  const recursesCount: Recurses2Count = {};

  const grain = fortress.resources.storage.food;
  const water = fortress.resources.storage.water;

  recursesCount['grain'] = grain.quantity;
  recursesCount['water'] = water.capacity;

  return recursesCount;
}

// Cuenta la cantidad de armas por tipo en las torres de la fortaleza.
export function weaponCount(fortress: MegaEpicFortress): WeaponCount {
  const weaponCount: Recurses2Count = {};

  const towers = fortress.defenses.towers;

  towers.forEach(tower => {
    const towerWeapon = tower.armament.weaponType;

    if (weaponCount[towerWeapon]) {
      weaponCount[towerWeapon]++;
    } else {
      weaponCount[towerWeapon] = 1;
    }
  })

  return weaponCount;
}

// Muestra las distancias de los puntos de referencia cercanos a la fortaleza.
export function showNearestLandMarks(fortress: MegaEpicFortress): LandMarksDistance {
  const landMarksDistance: LandMarksDistance = {};

  const landmarks = fortress.location.nearbyLandmarks;

  landmarks.forEach(landMark => {
    landMarksDistance[landMark.name] = landMark.distance
  });

  console.log(landMarksDistance);

  return landMarksDistance;
}

// Obtiene las torres que tienen más de un número mínimo de guardianes.
export function obtainTowerByGuards(fortress: MegaEpicFortress, minGuards: number): Towers[] {

  const towers = fortress.defenses.towers;

  return towers.filter(tower => tower.guards.length > minGuards);
}

// Encuentra la torre con la mayor cantidad de guardianes.
export function findTowerWithMostGuards(fortress: MegaEpicFortress): Towers {

  let mostGuardsTower = fortress.defenses.towers[0];

  fortress.defenses.towers.forEach(tower => {
    if (tower.guards.length > mostGuardsTower.guards.length) {
      mostGuardsTower = tower;
    }
  });

  return mostGuardsTower;
}

// Obtiene las profesiones más comunes en la fortaleza, ordenadas por la cantidad de habitantes.
export function obtainProfessionWithMostInhabitants(fortress: MegaEpicFortress): string[] {

  const professions = fortress.inhabitants.roles.flatMap(role => role.professions);

  const sortedProfessions = professions.sort((a, b) => b.count - a.count).map(sorted => sorted.type);

  return sortedProfessions;
}

// Obtiene la torre con la mayor cantidad de armamento (munición).
export function obtainTowerByMostArmament(fortress: MegaEpicFortress): Towers {

  const towers = fortress.defenses.towers;

  let mostArmamentTower = towers[0];

  towers.forEach(tower => {
    if (tower.armament.ammunitionCount > mostArmamentTower.armament.ammunitionCount) {
      mostArmamentTower = tower;
    }
  });

  return mostArmamentTower;
}

// Calcula el total de guardianes por tipo de arma en todas las torres de la fortaleza.
export function calculateTotalGuardsByWeapon(fortress: MegaEpicFortress): TotalGuardsByWeapon {
  const totalGuardsByWeapon: TotalGuardsByWeapon = {};

  fortress.defenses.towers.forEach(tower => {
    tower.guards.forEach(() => {
      const weapon = tower.armament.weaponType;

      if (totalGuardsByWeapon[weapon]) {
        totalGuardsByWeapon[weapon]++;
      } else {
        totalGuardsByWeapon[weapon] = 1;
      }
    })
  })

  return totalGuardsByWeapon;
}

export function getGuardsByRank(fortress: MegaEpicFortress, rank: string): string[] {
  const guards = fortress.defenses.towers.flatMap(tower => tower.guards);
  const filteredGuards = guards.filter(guard => guard.rank === rank).map(filteredGuard => filteredGuard.name);

  return filteredGuards;
}

export function totalGuards(fortress: MegaEpicFortress): number {

  const totalGuards = fortress.defenses.towers.flatMap(tower => tower.guards).length;
  return totalGuards;
}

export function obtainTowerByMinHeight(fortress: MegaEpicFortress, minHeight: number): Towers[] {

  const towers = fortress.defenses.towers.filter(tower => tower.height > minHeight);
  return towers;
}