import { LandMarksDistance, MegaEpicFortress, Recurses2Count, RecursesCount, RolesCount, TowerGuardCount, TowerHeightCount, Towers, VillagerProfessionCount, WeaponCount } from "../types/MegaEpicFortress";

export function getTowersAndGuardsByWeaponType(fortress: MegaEpicFortress, weapon: string): { towers: Towers[], guardNames: string[] } {

  const towers = fortress.defenses.towers.filter(tower => tower.armament.weaponType === weapon);

  const guardNames = towers.flatMap(tower => tower.guards.map(guard => guard.name));

  return { towers, guardNames };
}

export function countVillagersByProfession(fortress: MegaEpicFortress): VillagerProfessionCount {

  const villagers = fortress.inhabitants.roles.find(role => role.role === 'Villager');

  const villagerCounts: VillagerProfessionCount = {};

  villagers?.professions.forEach(profession => {
    villagerCounts[profession.type] = profession.count;
  })


  return villagerCounts;
}

export function countDefendersByTower(fortress: MegaEpicFortress): TowerGuardCount {

  const defenderCounts: VillagerProfessionCount = {};

  fortress.defenses.towers.forEach(tower => {
    defenderCounts[tower.name] = tower.guards.length;
  });

  return defenderCounts;
}

export function countTowersByHeight(fortress: MegaEpicFortress): TowerHeightCount {

  const heightCount: TowerHeightCount = {};

  fortress.defenses.towers.forEach(tower => {
    const height = tower.height;

    if (heightCount[height]) {
      heightCount[height]++
    } else {
      heightCount[height] = 1;
    }
  });

  return heightCount;
}

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

export function countOtherResources(fortress: MegaEpicFortress): Recurses2Count {
  const recursesCount: Recurses2Count = {};

  const grain = fortress.resources.storage.food;
  const water = fortress.resources.storage.water;


  recursesCount['grain'] = grain.quantity;
  recursesCount['water'] = water.capacity;

  return recursesCount;
}

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

export function showNearestLandMarks(fortress: MegaEpicFortress): LandMarksDistance {
  const landMarksDistance: LandMarksDistance = {};

  const landmarks = fortress.location.nearbyLandmarks;

  landmarks.forEach(landMark => {
    landMarksDistance[landMark.name] = landMark.distance
  });

  console.log(landMarksDistance);

  return landMarksDistance;
}

export function obtainTowerByGuards(fortress: MegaEpicFortress, minGuards: number): Towers[] {

  const towers = fortress.defenses.towers;

  return towers.filter(tower => tower.guards.length > minGuards);
}

export function findTowerWithMostGuards(fortress: MegaEpicFortress): Towers {

  let mostGuardsTower = fortress.defenses.towers[0];

  fortress.defenses.towers.forEach(tower => {
    if (tower.guards.length > mostGuardsTower.guards.length) {
      mostGuardsTower = tower;
    }
  });
  
  return mostGuardsTower;
}