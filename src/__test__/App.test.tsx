import '@testing-library/jest-dom'
import { megaEpicFortress } from '../data/data';
import { getTowersAndGuardsByWeaponType } from '../helpers/helpers';

describe('Recibe la fortaleza, el arma', () => {
  it('devuelve un array de objetos torre con su nombre y devuelve un array de los nombres de los guardianes', () => {

      // Arrange
      const fortress = megaEpicFortress;

      //Act
      const findTower = getTowersAndGuardsByWeaponType(fortress, "Ballista");

      console.log(findTower)

      //Assert
      expect(findTower.map(findTower => findTower.name)).toContain('Tower of Vigilance');
  })
})