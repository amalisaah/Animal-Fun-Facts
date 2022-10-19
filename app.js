import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const showBackground= true;
const background = <img 
  className='background'
  alt= 'ocean'
  src='/images/ocean.jpg'
/>;

const animalsArray = [];
for (const animal in animals){
  animalsArray.push(<img 
  key= {animal}
  alt= {animal}
  className= 'animal'
  src= {animals[animal].image} 
  aria-label= {animal}
  role= 'button'
  onClick={displayFact}
  />)
}
const title='';
const animalFacts=<div>
  <h1> {title || 'Click an animal for a fun fact'} </h1>
  {showBackground && background}
  <div className= 'animals'>
  {animalsArray}
  </div>
  <p id='fact'> </p>
  </div>;

function displayFact(e){
  let animal= e.target.alt;
  const num=Math.floor(Math.random()*animals[animal].facts.length)
  const fact= animals[animal].facts[num]
  // document.getElementById('fact').innerHTML=fact;
  document.getElementById('fact').firstChild.nodeValue=fact;
}

ReactDOM.render(animalFacts,document.getElementById('root'))

(showBackground) ? (document.querySelector('.background').style.display='none') :null;
// document.querySelector('.background').style.display='none'