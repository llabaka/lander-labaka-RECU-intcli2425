interface RightContainerInterface {
    showVillagers: () => void;
}

const RightContainer: React.FC<RightContainerInterface> = ({ showVillagers }) => {

    return (
        <div className='flex flex-col h-full w-[50%] border-1 items-center'>
            <button
                onClick={showVillagers}
                className="w-[50%] p-2 mt-[5%] border border-gray-300 rounded"
            >
                SHOW VILLAGER PROFFESION AND WORKERS
            </button>

            <div className="flex flex-col h-[20%] w-full border-1">

            </div>
        </div>
    );
};

export default RightContainer;


