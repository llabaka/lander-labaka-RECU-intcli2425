import '@testing-library/jest-dom';
import { megaEpicFortress } from '../data/data';
import { calculateTotalGuardsByWeapon, countDefendersByTower, countOtherResources, countRecurses, countRoles, countTowersByHeight, countVillagersByProfession, findTowerWithMostGuards, getGuardsByRank, getTowersAndGuardsByWeaponType, guardsOfSameName, obtainAllWeapons, obtainProfessionWithMostInhabitants, obtainTowerByGuards, obtainTowerByMinAmmo, obtainTowerByMinHeight, obtainTowerByMostArmament, showNearestLandMarks, totalGuards, totalMunitionByWeapon, weaponCount } from '../helpers/helpers';

describe('Recibe la fortaleza, el arma', () => {
  it('devuelve un array de objetos torre con su nombre y devuelve un array de los nombres de los guardianes', () => {

    const fortress = megaEpicFortress;

    const filtered = getTowersAndGuardsByWeaponType(fortress, 'Ballista');
    expect(filtered.guardNames).toContain('Lira the Watcher');
    expect(filtered.guardNames).toContain('Garron the Keen-eyed');
    expect(filtered.guardNames).toContain('Lazarus');
    expect(filtered.guardNames).toContain('Pesbe');

    expect(filtered.towers.map(tower => tower.name)).toContain('Tower of Vigilance');
    expect(filtered.towers.map(tower => tower.name)).toContain('Tower of Ice');
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = countVillagersByProfession(fortress);

  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = countDefendersByTower(fortress);

  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = countRecurses(fortress);

  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = countRoles(fortress);

  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = countOtherResources(fortress);

  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = weaponCount(fortress);

  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = showNearestLandMarks(fortress);

  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = obtainTowerByGuards(fortress, 3);

    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = findTowerWithMostGuards(fortress);

    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = countTowersByHeight(fortress);

    console.log("BY HEIGHT");
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = obtainProfessionWithMostInhabitants(fortress);
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = obtainTowerByMostArmament(fortress);
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = calculateTotalGuardsByWeapon(fortress);
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = getGuardsByRank(fortress, 'Soldier');
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = totalGuards(fortress);
    
    console.log(filtered);
    
  })
})


describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = obtainTowerByMinHeight(fortress, 60);
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = obtainAllWeapons(fortress);
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = totalMunitionByWeapon(fortress, 'Ballista');
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = obtainTowerByMinAmmo(fortress, 50);
    
    console.log(filtered);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress = megaEpicFortress;

    const filtered = guardsOfSameName(fortress);
    
    console.log(filtered);
    
  })
})