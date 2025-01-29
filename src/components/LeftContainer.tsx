import { MegaEpicFortress, Towers } from '../types/MegaEpicFortress';
import WeaponFilter from './WeaponFilter';
import castle from '/castle.jpg';

interface LeftContainerInterface {
    weaponName: string
    setWeaponName: (weaponName: string) => void;
    showingTower: Towers[]
    fortress: MegaEpicFortress
}

const LeftContainer: React.FC<LeftContainerInterface> = ({ weaponName, setWeaponName, fortress }) => {

    return (
        <div className='flex flex-col h-full w-[50%] border-1'>
            <h1>Citadel of Eternal Night</h1>
            <img src={castle}>
            </img>

            <WeaponFilter 
            weaponName={weaponName}
            setWeaponName={setWeaponName}
            fortress={fortress}
            />

            <div>

            </div>
        </div>
    );
};

export default LeftContainer;


