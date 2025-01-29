import { Towers } from "../types/MegaEpicFortress";

interface RightContainerInterface {
    showVillagers: () => void;
}

const RightContainer: React.FC<RightContainerInterface> = ({ showVillagers }) => {

    return (
        <div className='flex flex-col h-full w-[50%] border-1'>
            <button
                onClick={showVillagers}
                className="w-64 p-2 border border-gray-300 rounded"
            >
                Calculate
            </button>
        </div>
    );
};

export default RightContainer;


