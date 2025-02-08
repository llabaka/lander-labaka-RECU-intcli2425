import { MegaEpicFortress, TowerGuardCount, TowerHeightCount, Towers, VillagerProfessionCount } from "../types/MegaEpicFortress";

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

  // console.log(villagerCounts);


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

  console.log(heightCount);

  return heightCount;
} 