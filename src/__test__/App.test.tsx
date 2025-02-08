import '@testing-library/jest-dom';
import { megaEpicFortress } from '../data/data';
import { countDefendersByTower, countOtherResources, countRecurses, countRoles, countVillagersByProfession, getTowersAndGuardsByWeaponType, weaponCount } from '../helpers/helpers';

describe('Recibe la fortaleza, el arma', () => {
  it('devuelve un array de objetos torre con su nombre y devuelve un array de los nombres de los guardianes', () => {

    const fortress =  megaEpicFortress;

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

    const fortress =  megaEpicFortress;

    const filtered = countVillagersByProfession(fortress);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress =  megaEpicFortress;

    const filtered = countDefendersByTower(fortress);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress =  megaEpicFortress;

    const filtered = countRecurses(fortress);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress =  megaEpicFortress;

    const filtered = countRoles(fortress);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress =  megaEpicFortress;

    const filtered = countOtherResources(fortress);
    
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

    const fortress =  megaEpicFortress;

    const filtered = weaponCount(fortress);
    
  })
})