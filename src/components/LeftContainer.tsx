import { MegaEpicFortress, Towers } from '../types/MegaEpicFortress';
import WeaponFilter from './WeaponFilter';
import castle from '/castle.jpg';

interface LeftContainerInterface {
  weaponName: string
  setWeaponName: (weaponName: string) => void;
  showingTower: { towers: Towers[], guardNames: string[] };
  fortress: MegaEpicFortress
}

const LeftContainer: React.FC<LeftContainerInterface> = ({ weaponName, setWeaponName, fortress, showingTower }) => {

  return (
    <div className='flex flex-col h-full w-[50%]'>
      <h1>Citadel of Eternal Night</h1>
      <img src={castle}>
      </img>

      <WeaponFilter
        weaponName={weaponName}
        setWeaponName={setWeaponName}
        fortress={fortress}
      />

      <div>
        {showingTower.towers.map((tower, index) => (
          <div key={index}>
            <p className='text-2xl bold'>{tower.name}</p>

            {showingTower.guardNames.map((guard, index) => (
              <ul key={index}>
                <li>{guard}</li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;


