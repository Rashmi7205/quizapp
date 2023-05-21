import React, { useState } from 'react'
import Page2 from './Page2';
import Card from './Card';

function Home() {
    const [display,setDisplay] = useState(true);
    const [lang,setLang] = useState('java');
    
    const setValue=  (e)=>{
        setLang(e.target.value);
        setDisplay(false);
    }

    const arr = ['java','python','c','cpp','html','css','js','react']
  return (
    <div className='main--section'>
        {display?<div className='card-section'>
            {arr.map(ele=>
            <div  className="ag-courses_item">
              <a href="#" class="ag-courses-item_link">
              <Card topic={ele}/>
              <div className="ag-courses-item_date-box">
                <button onClick={setValue} value={ele} class="ag-courses-item_date">Start</button>
             </div>
             </a>
            </div>
            )}
        </div>
    : <Page2 name={lang}/>
    }
    
    </div>
  )
}

export default Home