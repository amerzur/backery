import logo from './logo.svg';
import './App.css';
import axios from './axios-orders'
 import {useState,Fragment} from 'react'
function App() {

  const [dark, toggleDarkMode] = useState(false);
  const [falling, fallMailBox] = useState(false);

 function doorClickedHanlder(e)  {
   if(dark){
     alert('Oops ! sorry we are closed now !')
   }else{
     axios.post('/')
   .then(function(res){
    alert('order made!'+res.data.id);
   })
   .catch(function (error) {
    // handle error
    console.log(error);
  })
   }
   
  }
 

  return (
    <Fragment>
           {dark?<div class="twinkling"></div>:''    }
           {dark?<div class="stars"></div>:''    }

    <div className={"App-header d-flex" + (dark ? "  night":" day")} >
           <div className="frame d-flex flex-column">
   
          <div  className={dark?"moon":"sun"} onClick={()=>toggleDarkMode(!dark)}></div> 
        <div id="triangle-up">
        </div>
        <div id="square" className="d-flex justify-content-around flex-column">
        <div id="label" className="mx-auto">COOKIE BAKERY</div>

          <div className="d-flex flex-row justify-content-around">
          <div className={"window "+ (dark ? " night":" day")}></div>
          <div className={"window "+ (dark ? " night":" day")}></div>
          </div>
       
          <div className="d-flex flex-row justify-content-around">
          <div id="door" className="mx-auto" onClick={()=>doorClickedHanlder()}><div id="door-hand"></div></div>
          <div className="mail-container">
                    <div id="mail-box" className={falling?'falling':''} onClick={()=>fallMailBox(true)}>
                      <div id="mail-box-header"></div>
                      Mailbox
                    </div>
                    
                    </div>
          </div>
          
        </div>
        </div>
     </div>
     </Fragment>
  );
}

export default App;
