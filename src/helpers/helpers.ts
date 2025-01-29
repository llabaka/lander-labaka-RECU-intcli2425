import { MegaEpicFortress, Towers } from "../types/MegaEpicFortress";


//Recibe la fortaleza, el arma, y devuelve un array de objetos torre con su nombre y devuelve un array de los nombres de los guardianes
export function getTowersAndGuardsByWeaponType(fortress: MegaEpicFortress, weapon: string): Towers[] {

    let towerWeaponCoincides = fortress.defenses.towers.filter(tower => tower.armament.weaponType === weapon && tower.guards.filter(guard => guard.name));
    return towerWeaponCoincides;
}
