interface RightContainerInterface {
    showVillagers: () => void;
}

const RightContainer: React.FC<RightContainerInterface> = ({ showVillagers }) => {

    return (
        <div className='flex flex-col h-full w-[50%] items-center'>
            <button
                onClick={showVillagers}
                className="w-[50%] p-2 mt-[5%] border-gray-300 rounded"
            >
                SHOW VILLAGER PROFFESION AND WORKERS
            </button>

            <div className="flex flex-col h-[20%] w-full">

            </div>
        </div>
    );
};

export default RightContainer;


