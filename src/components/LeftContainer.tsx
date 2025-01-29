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
        <p className='mt-2 text-2xl'>{showingTower.towers.map(tower => tower.name)}</p>
        <ul>
          {showingTower.guardNames.map((guardName, index) => (
            <li key={index}>{guardName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftContainer;


