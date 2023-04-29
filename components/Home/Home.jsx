import React from 'react'
import Hero from './Hero'
import ProgressBar from './ProgressBar'
import BgText from './BgText'
import StartUp from './StartUp'
import EcoSystems from './EcoSystems'
import Platform from './Platform'
import Nfts from './Nfts'

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
    </div>
  )
}

export default Home
