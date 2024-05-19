import React from 'react'
import './Games.css'
import One from '../../Assets/game1.png'
import Two from '../../Assets/game2.jpg'
import Four from '../../Assets/game4.jpeg'
import Three from '../../Assets/game5.jpg'

const Games = () => {
  return (
    <div className='container photos'>
        <img src={One}/>
         <img src={Two}/>
          <img src={Three}/>
            <img src={Four}/>
            <div className='names'>
                <h6>Balling</h6>
                <h6>Chair Dance</h6>
                <h6>Leg Count</h6>
                <h6>container</h6>
            </div>
    </div>
  )
}

export default Games