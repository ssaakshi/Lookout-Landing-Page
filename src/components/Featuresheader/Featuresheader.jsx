import React from 'react'
import { Featuresheaderitem } from './Featuresheaderitem'
import './Featuresheader.css'


export default function Featuresheader() {
  return (

    <div className='feature'>
      <div className='main-div-feature'>
        <Featuresheaderitem />
        <Featuresheaderitem />
        <Featuresheaderitem />
      </div>

      <div className='section-heading'>
        <h2>Redefining Product Features</h2>
        <p className='section-description'>Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration</p>

      </div>
    </div>
  )
}
