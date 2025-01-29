import WeaponFilter from './WeaponFilter';
import castle from '/castle.jpg';

interface LeftContainerInterface {

}

const LeftContainer: React.FC<LeftContainerInterface> = ({ }) => {

    return (
        <div className='flex flex-col h-full w-[50%]'>
            <h1>Citadel of Eternal Night</h1>
            <img src={castle}>
            </img>

            <WeaponFilter />
        </div>
    );
};

export default LeftContainer;


