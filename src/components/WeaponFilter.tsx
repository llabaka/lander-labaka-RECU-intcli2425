import { MegaEpicFortress } from "../types/MegaEpicFortress";

interface WeaponFilterInterface {
    weaponName: string
    setWeaponName: (weaponName: string) => void;
    fortress: MegaEpicFortress
}

const WeaponFilter: React.FC<WeaponFilterInterface> = ({ weaponName, setWeaponName, fortress }) => {

    const weaponTypes = fortress.defenses.towers.map(tower => tower.armament.weaponType);

    return (
        <div className="mt-5">
            <select
                value={weaponName}
                onChange={(e) => setWeaponName(e.target.value)}
                className="w-64 p-1 border bg-green-200 border-gray-300 rounded text-black"
            >
                <option value="" className="text-black">Select a Weapon Type</option>
                <option value="Arcane Cannon" className="text-yellow-400">{weaponTypes[0]}</option>
                <option value="epic" className="text-orange-400">{weaponTypes[1]}</option>
                <option value="mythic" className="text-purple-400">{weaponTypes[2]}</option>
                <option value="mythic" className="text-purple-400">{weaponTypes[3]}</option>
                <option value="mythic" className="text-purple-400">{weaponTypes[4]}</option>
                <option value="mythic" className="text-purple-400">{weaponTypes[5]}</option>
            </select>
        </div>
    );
};

export default WeaponFilter;


