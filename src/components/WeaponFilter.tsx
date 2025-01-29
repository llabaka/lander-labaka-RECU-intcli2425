import { MegaEpicFortress } from "../types/MegaEpicFortress";

interface WeaponFilterInterface {
  weaponName: string
  setWeaponName: (weaponName: string) => void;
  fortress: MegaEpicFortress
}

const WeaponFilter: React.FC<WeaponFilterInterface> = ({ weaponName, setWeaponName, fortress }) => {

  // Set para no repetir y convertirlo en array
  const weaponTypes = Array.from(new Set(fortress.defenses.towers.map(tower => tower.armament.weaponType)));

  return (
    <div className="mt-5">
      <select
        value={weaponName}
        onChange={(e) => setWeaponName(e.target.value)}
        className="w-64 p-1 border bg-green-200 border-gray-300 rounded text-black"
      >
        <option value="">Select a Weapon Type</option>
        
        {/* Mapeamos los tipos de armas */}
        {weaponTypes.map((weapon, index) => (
          <option key={index} value={weapon}>
            {weapon}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WeaponFilter;


