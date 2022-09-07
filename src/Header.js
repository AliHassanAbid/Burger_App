import React, {useState}from 'react'
import burger from './images/burger.png'
import Burger from './Burger'
import Login from './Login'

export default function Header() {
  const [main, setMain] = useState(true);
  const setpage = (page) =>{
    if( page ==="main"){
      setMain(main=>true);
    }
    else{
      setMain(main=>false);    }
  };

  return (
    <><nav class=" navbar navbar-dark bg-dark" >
      <a class="navbar-brand" href="#">
        <div class="ml-3 d-flex align-items-center">
          <img src={burger} width="75" height="70" class="d-inline-block align-top" alt="" />
          Burger App
        </div>
      </a>
      <div class="p-2 d-flex justify-content-end ">

        <div>  <button type="button" class="btn btn-outline-warning" onClick={()=> setpage("main")}>Burger Builder</button>
        </div>
        <div style={{width:'1rem'}}></div>
        <div><button type="button" class="btn btn-outline-info" onClick={()=> setpage("login")}>Login</button>
        </div>

      </div>
    </nav>
    {main ?
        <Burger/> : <Login/>
     }

     </>
  )
}


