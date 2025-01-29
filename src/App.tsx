import { useEffect, useState } from 'react'
import './App.css'
import LeftContainer from './components/LeftContainer';
import { Towers } from './types/MegaEpicFortress';
import { getTowersAndGuardsByWeaponType } from './helpers/helpers';
import { megaEpicFortress } from './data/data';

function App() {

  const [showingTower, setShowingTower] = useState<Towers[]>([]);
  const [weaponName, setWeaponName] = useState('');

  useEffect(() => {
    filterTower();
    console.log("SHOWING TOWER");
    
    console.log(showingTower);
    
  }, [weaponName])

  const filterTower = async () => {
    let filteredTower = showingTower;

    if (weaponName) {
      filteredTower = getTowersAndGuardsByWeaponType(megaEpicFortress, weaponName)
      setShowingTower(showingTower)
    }

  }
  return (
    <>
      <div className='flex flex-col h-screen w-screen justify-self-start'>

        <LeftContainer
        weaponName={weaponName}
        setWeaponName={setWeaponName}
        showingTower={showingTower}
        fortress={megaEpicFortress}
        />
      </div>
    </>
  )

}

export default App
