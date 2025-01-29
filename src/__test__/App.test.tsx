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
      expect(findTowers.guardNames).toContain("Lira the Watcher");
      expect(findTowers.guardNames).toContain("Garron the Keen-eyed");
      expect(findTowers.guardNames).toContain("Pesbe");

      expect(findTowers.towers.map(tower => tower.name)).toContain('Tower of Vigilance')
      expect(findTowers.towers.map(tower => tower.name)).toContain('Tower of Ice')
  })
})

describe('Recibe la fortaleza. Devuelve las profesionales y la cantidad de profesionales de los pueblerinos', () => {
  it('Devuelve tipo Record <nombre, cantidad>', () => {

      // Arrange
      const fortress = megaEpicFortress;

      //Act
      const record = countVillagersByProfession(fortress);

      //Assert
      expect(record).toStrictEqual({"Acolyte": 237, "Beggar": 97, "Blacksmith": 31, "Farmer": 467, "Healer": 129, "Merchant": 63})  
  })
})