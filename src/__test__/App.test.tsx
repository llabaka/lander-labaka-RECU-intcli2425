import '@testing-library/jest-dom'
import { megaEpicFortress } from '../data/data';
import { countVillagersByProfession, getTowersAndGuardsByWeaponType } from '../helpers/helpers';

describe('Recibe la fortaleza, el arma', () => {
  it('devuelve un array de objetos torre con su nombre y devuelve un array de los nombres de los guardianes', () => {

      // Arrange
      const fortress = megaEpicFortress;

      //Act
      const findTowers = getTowersAndGuardsByWeaponType(fortress, "Ballista");

      //Assert
      expect(findTowers.map(findTower => findTower.name)).toContain('Tower of Vigilance');
      expect(findTowers.map(findTower => findTower.guards.map(guard => guard.name))).toStrictEqual([["Lira the Watcher", "Garron the Keen-eyed"], ["Lazarus", "Pesbe"]])
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

      // Arrange
      const fortress = megaEpicFortress;

      //Act
      const record = countVillagersByProfession(fortress);
      console.log("RECORD");
      console.log(record);
      
      //Assert
      // expect(findTowers.map(findTower => findTower.name)).toContain('Tower of Vigilance');
      // expect(findTowers.map(findTower => findTower.guards.map(guard => guard.name))).toStrictEqual([["Lira the Watcher", "Garron the Keen-eyed"], ["Lazarus", "Pesbe"]])
  })
})