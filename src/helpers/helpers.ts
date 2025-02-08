import { MegaEpicFortress, Towers } from "../types/MegaEpicFortress";

export function getTowersAndGuardsByWeaponType(fortress: MegaEpicFortress, weapon: string): { towers: Towers[], guardNames: string[] } {

  const towers = fortress.defenses.towers.filter(tower => tower.armament.weaponType === weapon);

  const guardNames = towers.flatMap(tower => tower.guards.map(tower => tower.name));

  return { towers, guardNames };
}

export function countVillagersByProfession() {

}