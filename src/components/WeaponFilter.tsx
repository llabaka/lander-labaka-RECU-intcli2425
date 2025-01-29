interface WeaponFilterInterface {

}

const WeaponFilter: React.FC<WeaponFilterInterface> = ({ }) => {

    return (
        <div className="mt-5">
            <select
                // value={rarityFilter}
                // onChange={(e) => setRarityFilter(e.target.value)}
                className="w-64 p-1 border bg-green-200 border-gray-300 rounded text-black"
            >
                <option value="" className="text-black">Select a Weapon Type</option>
                <option value="legendary" className="text-yellow-400">Legendary</option>
                <option value="epic" className="text-orange-400">Epic</option>
                <option value="mythic" className="text-purple-400">Mythic</option>
            </select>
        </div>
    );
};

export default WeaponFilter;


