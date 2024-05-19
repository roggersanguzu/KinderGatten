import React,{useState} from 'react'
import './About.css'
import data from '../../data'

const About = () => {
     const [selected,setSelected]=useState(null);
     function Handlers(getID){
        setSelected(getID===selected?null:getID)
     }
  return (
    <div className='container'>
        <div className='accordian'>
            {
                data && data.length>0?
                data.map((dataItem)=><div className='Item'>
                    <div  className='unit' onClick={()=>{Handlers(dataItem.id)}}>
                        <h3>{dataItem.id}</h3>
                        <h3>+</h3>
                    </div>
                    {
                        selected===dataItem.id?
                        <div className='content'>
                            <h6>{dataItem.background}</h6>
                            <h5>{dataItem.name}</h5>
                        </div>
                        :null
                    }
                </div>)
                :<div>No data</div>
            }
        </div>
    </div>
  )
}

export default About