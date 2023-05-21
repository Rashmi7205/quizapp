import React, { useState } from 'react'
import data from './data'
import '../App.css'

function Page2(props) {
 const quesions = data[props.name];
 const [qno,setQno] = useState(0);
 const [marked,setMarked] = useState('');
 const [correct,setCorrect] = useState(0);
 const [prevEle,setPrevEle] = useState(null);

const handleNext = ()=>{
    if(prevEle!=null)
      prevEle.style.border='2px solid #dbdde6';
    if(qno < quesions.length-1)
    setQno(qno+1)
    else
      showResult()
}
const showResult = ()=>{
  document.querySelector('.quiz--display').innerHTML = `
  <h1>You have Scored ${correct} / ${quesions.length}</h1>
  `
}
const handlePrev = () =>{
  if(qno > 0)
    setQno(qno-1) 
}
const handleSave = () =>{
  if(marked === quesions[qno]. answer)
    {
      setCorrect(correct+1);
    }
    handleNext()
}
const getCorrEle = (e)=>{
  setPrevEle(e.target);
  if(prevEle!=null)
    prevEle.style.border='2px solid #dbdde6';
  e.target.style.border='2px solid  #3ecd5e';   
  setMarked(e.target.innerText);
}
return (
    <div className='main-div'>
    <h1 id="q-title">{props.name} Quiz Questions</h1>
    <div className='quiz--display'>
        <p id='ques-display'>{qno+1 } ){quesions[qno].question}</p>
        <ul className='options' >
          {quesions[qno].options.map(ele=><li onClick={getCorrEle}>{ele}</li>)}          
        </ul>
        <div className='buttons'>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleNext}>Next</button>
        </div>
    </div>
    </div>
  )
}

export default Page2