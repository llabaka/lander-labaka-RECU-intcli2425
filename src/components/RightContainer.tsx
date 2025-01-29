import { VillagerProfessionCount } from "../types/MegaEpicFortress";

interface RightContainerInterface {
    showVillagers: () => void;
    showingWorkers: VillagerProfessionCount
}

const RightContainer: React.FC<RightContainerInterface> = ({ showVillagers, showingWorkers }) => {

    return (
        <div className='flex flex-col h-full w-[50%] items-center'>
            <button
                onClick={showVillagers}
                className="w-[50%] p-2 mt-[5%] border-gray-300 rounded"
            >
                SHOW VILLAGER PROFFESION AND WORKERS
            </button>

            <div className="flex flex-col h-[20%] w-full mt-2">
                {showingWorkers && Object.entries(showingWorkers).map(([profession, count]) => (
                    <p key={profession}>{profession}: {count} workers</p>
                ))}
            </div>
        </div>
    );
};

export default RightContainer;


