import { MegaEpicFortress, Towers, VillagerProfessionCount } from "../types/MegaEpicFortress";

//Recibe la fortaleza, el arma, y devuelve un array de objetos torre con su nombre y devuelve un array de los nombres de los guardianes
export function getTowersAndGuardsByWeaponType(fortress: MegaEpicFortress, weapon: string): Towers[] {

    let towerWeaponCoincides = fortress.defenses.towers.filter(tower => tower.armament.weaponType === weapon && tower.guards.filter(guard => guard.name));
    return towerWeaponCoincides;
}


//Recibe la fortaleza, y devuelve tipo Record
export const countVillagersByProfession = (fortress: MegaEpicFortress): VillagerProfessionCount => {
    const villagers = fortress.inhabitants.roles.find(role => role.role === "Villager");
    
    if (!villagers || !villagers.professions) {
        return {};
    }

    const professionCounts: VillagerProfessionCount = {};

    for (const profession of villagers.professions) {
        professionCounts[profession.type] = profession.count;
    }
    
    return professionCounts;
};