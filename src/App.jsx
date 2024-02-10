import React from "react";
import "./App.css";

import  { useState } from 'react';



function ColorChanger(){
   // State to hold the background color
   const [backgroundColor, setBackgroundColor] = useState('');

   // Function to handle button click and change background color
   const handleButtonClick = (color) => {
     setBackgroundColor(color);
     console.log(backgroundColor);
   }
  //  console.log(backgroundColor);
  

  return(
    <div id="box"  className="bg-dark " style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div  className="d-flex align-items-center  justify-content-center"  style={{ padding: '20px' }}>
          <h3 style={{height:'45px',color:"white"}} >Background color changer</h3>
        </div>
          <div style={{ backgroundColor, width: '600px', height: '200px'}} className="d-flex align-items-center  justify-content-center">
            <button style={{marginRight:'20px',borderBlockColor:'black'}} onClick={() => handleButtonClick('green')}>Green</button>
            <button  style={{marginRight:'20px',borderBlockColor:'black'}}  onClick={() => handleButtonClick('yellow')}>Yellow</button>
            <button  style={{marginRight:'20px',borderBlockColor:'black'}}  onClick={() => handleButtonClick('red')}>Red</button>
           <button  style={{marginRight:'20px',borderBlockColor:'black'}}  onClick={() => handleButtonClick('blue')}>Blue</button>
          </div>
      </div>
    </div>
    
  );
};

export default ColorChanger;