import React, { useState, } from 'react';
import Top from './images/top.jpg'
import Bottom from './images/bottom.jpg';
import Meat from './images/meat.jpg';
import Lettuse from './images/lettuse.jpg';
import Cheese from './images/cheese.jpg';
import Bacon from './images/tomato.jpg';
import Login from './Login'
import './index.css';

const top = <img src={Top} width="" height="150" class="d-inline-block align-top" alt="" />
const bot = <img src={Bottom} width="" height="87" class="d-inline-block align-top" alt="" />
const meatt = <img src={Meat} width="" height="70" class="d-inline-block align-top" alt="" />
const lettusee = <img src={Lettuse} width="" height="35" class="d-inline-block align-top" alt="" />
const cheesee = <img src={Cheese} width="" height="14" class="d-inline-block align-top" alt="" />
const baconn = <img src={Bacon} width="" height="30" class="d-inline-block align-top" alt="" />


export default function Burger() {

  var Burger = {
    meat: [],
    lettuse: [],
    cheese: [],
    bacon: [],
    total: [],
    count: [3.00]
  }
  const [burger, updateBurger] = useState(Burger);




  const addItem = (item) => {
    if (item === "meat") {
      updateBurger({
        meat: [...burger.meat, meatt], lettuse: [...burger.lettuse], cheese: [...burger.cheese], bacon: [...burger.bacon], count: [burger.count.reduce((a, b) => a + b, 1.30)]
      });
    }
    else if (item === "lettuse") {
      updateBurger({
        lettuse: [...burger.lettuse, lettusee], count: [burger.count.reduce((a, b) => a + b, 0.50)], cheese: [...burger.cheese], meat: [...burger.meat], bacon: [...burger.bacon]
      });
    }
    else if (item === "cheese") {
      updateBurger({
        cheese: [...burger.cheese, cheesee], lettuse: [...burger.lettuse], meat: [...burger.meat], bacon: [...burger.bacon], count: [burger.count.reduce((a, b) => a + b, 0.40)]
      });
    }
    else if (item === "bacon") {
      updateBurger({
        bacon: [...burger.bacon, baconn], count: [burger.count.reduce((a, b) => a + b, 1.20)], lettuse: [...burger.lettuse], meat: [...burger.meat], cheese: [...burger.cheese]
      });
    }
  };

  const removeItem = (item) => {
    if (item === "meat") {
      if (burger.meat.length === 0) {
        return
      }
      updateBurger({
        meat: [...burger.meat.slice(0, burger.meat.length - 1)],count: [burger.count.reduce((a, b) => a + b)-1.30], lettuse: [...burger.lettuse], bacon: [...burger.bacon], cheese: [...burger.cheese]
      });
    }
    else if (item === "cheese") {
      if (burger.cheese.length === 0) {
        return
      }
      updateBurger({
        cheese: [...burger.cheese.slice(0, burger.cheese.length - 1)], lettuse: [...burger.lettuse], meat: [...burger.meat], bacon: [...burger.bacon], count: [burger.count.reduce((a, b) => a + b)-0.40]
      });
    }
    else if (item === "lettuse") {
      if (burger.lettuse.length === 0) {
        return
      }
      updateBurger({ lettuse: [...burger.lettuse.slice(0, burger.lettuse.length - 1)], count: [burger.count.reduce((a, b) => a + b)-0.50], cheese: [...burger.cheese], meat: [...burger.meat], bacon: [...burger.bacon]
      });
    }
    else if (item === "bacon") {
      if (burger.bacon.length === 0) {
        return
      }
      updateBurger({ bacon: [...burger.bacon.slice(0, burger.bacon.length - 1)],count: [burger.count.reduce((a, b) => a + b)-1.20], lettuse: [...burger.lettuse], meat: [...burger.meat], cheese: [...burger.cheese]
      });
    }
  };


  return (

    <>
      <div class="scroll" >
        <ul class="list-group">
          <li>{top}</li>

          {burger.cheese.map((e) =>
            <li>{e}</li>
          )}

          {burger.lettuse.map((e) =>
            <li>{e}</li>
          )}
          {burger.bacon.map((e) =>
            <li>{e}</li>
          )}

          {burger.meat.map((e) =>
            <li>{e}</li>
          )}

          <li>{bot}</li>
        </ul>
      </div>
      <div class="d-flex justify-content-center flex-column bg-success">

        <div>
          <button type="button" class="btn btn-dark t">
            Total Amount : <strong><span class="badge badge-light t1">${burger.count.reduce((a, b) => a + b, 0).toFixed(2)}</span></strong>
          </button>
        </div>



        <div class="d-flex align-items-center justify-content-center ">

          <div class="d-flex flex-column align-items-baseline">
            <div class="t h4">Cheese</div>
            <div class="t h4 ">Lattuse</div>
            <div class="t h4 ">Bacon</div>
            <div class="t h4 ">Meat</div>
          </div>
          <div class="spacer-w"></div>
          <div class="d-flex flex-column ">
            <button type="button" class="btn btn-info" onClick={() => addItem("cheese")}>+   add</button>
            <button type="button" class="btn btn-info" onClick={() => addItem("lettuse")}>+   add</button>
            <button type="button" class="btn btn-info" onClick={() => addItem("bacon")}>+   add</button>
            <button type="button" class="btn btn-info" onClick={() => addItem("meat")}>+   add</button>
          </div>
          <div class="spacer-w"></div>
          <div class="d-flex flex-column">
            <button type="button" class="btn btn-danger" onClick={() => removeItem("cheese")}>- remove </button>
            <button type="button" class="btn btn-danger" onClick={() => removeItem("lettuse")}>- remove </button>
            <button type="button" class="btn btn-danger" onClick={() => removeItem("bacon")}>- remove </button>
            <button type="button" class="btn btn-danger" onClick={() => removeItem("meat")}>- remove</button>
          </div>

        </div>

        <div>
          <button type="button" class="btn btn-warning" onClick={<Login />}>
            Login For Order
          </button>
        </div>

      </div>
    </>
  )
}

