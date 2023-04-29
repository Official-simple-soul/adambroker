import React from 'react'
import Hero from './Hero'
import ProgressBar from './ProgressBar'
import BgText from './BgText'
import StartUp from './StartUp'
import EcoSystems from './EcoSystems'
import Platform from './Platform'
import Nfts from './Nfts'
import PieChart from './Charts'
import Contact from '../Contact'


const data = [
  { id: 1, subject: "English", size: 65 },
  { id: 2, subject: "Physics", size: 35 },
];

function Home() {
  return (
    <div className='lg:w-[90%] lg:mx-auto px-3 lg:px-0 pt-48 md:pt-0'>
      <Hero />
      <ProgressBar />
      <BgText inner={'WHAT AND WHY'} outer={'ABOUT'}/>
      <StartUp />
      <BgText inner={'CORE ECOSYSTEMS'} outer={'ECOSYSTEMS'}/>
      <EcoSystems />
      <BgText inner={'ICOX PRODUCTS'} outer={'PLATFORM'}/>
      <Platform />
      <BgText inner={'MVP APPS'} outer={'NFTs'}/>
      <Nfts />
      <PieChart data={data} />
      <Contact />
    </div>
  )
}

export default Home
