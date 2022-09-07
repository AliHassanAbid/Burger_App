import React, { useState,  } from 'react';
import Top from './images/top.jpg'
import Bottom from './images/bottom.jpg';
import Meat from './images/meat.jpg';
import Lettuse from './images/lettuse.jpg';
import Cheese from './images/cheese.jpg';
import Login from './Login'
import './index.css';

const top=<img src={Top} width="" height="150" class="d-inline-block align-top" alt="" />
const bot=<img src={Bottom} width="" height="87" class="d-inline-block align-top" alt="" />
const meatt=<img src={Meat} width="" height="70" class="d-inline-block align-top" alt="" />
const lettusee=<img src={Lettuse} width="" height="35" class="d-inline-block align-top" alt="" />
const cheesee=<img src={Cheese} width="" height="14" class="d-inline-block align-top" alt="" />


export default function Burger() {

  const [meat, updateMeat] = useState([]);
  const [lettuse, updateLettuse] = useState([]);
  const [cheese, updateCheese] = useState([]);
  const [count, updateCount] = useState(3.00);


const addItem = (item) =>{
  if( item ==="meat"){
    updateCount(count+1.30);
    updateMeat( meat => [...meat, meatt]);
  }
  else if(item ==="lettuse"){
    updateCount(count+0.50);
    updateLettuse( lettuse => [...lettuse, lettusee]);
  }
  else if(item ==="cheese"){
    updateCount(count+0.40);
    updateCheese( cheese => [...cheese, cheesee]);
  }
};

const removeItem = (item) =>{
  if( item ==="meat"){
   if ( meat.length===0){
       return
   }
   updateCount(count-1.30);
   updateMeat( meat => [...meat.slice(0,meat.length-1)]);
  }
  else if(item ==="lettuse"){
    if ( lettuse.length===0){
      return
  }
    updateCount(count-0.50);
    updateLettuse( lettuse => [...lettuse.slice(0,lettuse.length-1)]);
  }
  else if(item ==="cheese"){
    if ( cheese.length===0){
      return
  }
    updateCount(count-0.40);
    updateCheese( cheese => [...cheese.slice(0,cheese.length-1)]);
  }
};


  return (

    <>
    <div class="scroll" >
     <ul class="list-group">
      <li>{top}</li>

    {cheese.map( (e)=>
        <li>{e}</li>
    )}

     {lettuse.map( (e)=>
        <li>{e}</li>
    )}

    {meat.map( (e)=>
        <li>{e}</li>
    )}

      <li>{bot}</li>
   </ul>
   </div>
  <div class="d-flex justify-content-center flex-column bg-success">

  <div>
      <button type="button" class="btn btn-dark t">
        Total Amount : <strong><span class="badge badge-light t1">${count.toFixed(2)}</span></strong>
      </button>
    </div>



  <div class="d-flex align-items-center justify-content-center ">

    <div class="d-flex flex-column align-items-baseline">
      <div class="t h4 ">Meat</div>
      <div class="t h4 ">Lattuse</div>
      <div class="t h4">Cheese</div>
    </div>
    <div class="spacer-w"></div>
    <div class="d-flex flex-column ">
    <button type="button" class="btn btn-info" onClick={()=> addItem("meat")}>+   add</button>
    <button type="button" class="btn btn-info" onClick={()=> addItem("lettuse")}>+   add</button>
    <button type="button" class="btn btn-info" onClick={()=> addItem("cheese")}>+   add</button>
  </div>
    <div class="spacer-w"></div>
    <div class="d-flex flex-column">
    <button type="button" class="btn btn-danger" onClick={()=> removeItem("meat")}>- remove</button>
    <button type="button" class="btn btn-danger" onClick={()=> removeItem("lettuse")}>- remove </button>
    <button type="button" class="btn btn-danger" onClick={()=> removeItem("cheese")}>- remove </button>
    </div>

    </div>

    <div>
      <button type="button" class="btn btn-warning"onClick={<Login/>}>
        Login For Order
      </button>
    </div>

    </div>
    </>
  )
}

