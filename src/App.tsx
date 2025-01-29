import { useEffect, useState } from 'react'
import './App.css'
import LeftContainer from './components/LeftContainer';
import { Towers, VillagerProfessionCount } from './types/MegaEpicFortress';
import { countVillagersByProfession, getTowersAndGuardsByWeaponType } from './helpers/helpers';
import { megaEpicFortress } from './data/data';
import RightContainer from './components/RightContainer';

function App() {

  const [showingTower, setShowingTower] = useState<{ towers: Towers[], guardNames: string[] }>({ towers: [], guardNames: [] });
  const [showingWorkers, setShowingWorkers] = useState<VillagerProfessionCount>();
  const [weaponName, setWeaponName] = useState('');

  useEffect(() => {
    filterTower();
  }, [weaponName])

  const filterTower = async () => {
    let filteredTower = showingTower;

    if (weaponName) {
      filteredTower = getTowersAndGuardsByWeaponType(megaEpicFortress, weaponName)
      console.log(filteredTower);
      setShowingTower(filteredTower)
    } else {
      setShowingTower({ towers: [], guardNames: [] });
    }
  }

  const showVillagers = () => {
    const villagers = countVillagersByProfession(megaEpicFortress);
    setShowingWorkers(villagers);
  };

  useEffect(() => {
    console.log(showingWorkers);

  }, [showingWorkers])

  return (
    <>
      <div className='flex flex-start h-screen w-screen justify-self-start'>

        <LeftContainer
          weaponName={weaponName}
          setWeaponName={setWeaponName}
          showingTower={showingTower}
          fortress={megaEpicFortress}
        />

        <RightContainer
          showVillagers={showVillagers}
        />
      </div>
    </>
  )

}

export default App
