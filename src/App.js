
import React from 'react';
import './App.css';
import  {useState} from 'react'
import NavbarMenu from './components/Navbar'
import TextForm from './components/TextForm'

function App(props) {

  
  // color pattern 
  
  const[colorMode, setColorMode] = useState("light"); 
  const colorModeFun = (colorClass) => {
       setColorMode(colorClass)
    // document.body.classList.remove(`bg-${colorClass}`)
    // document.body.classList.add(`bg-${colorClass}`)
    // console.log('bg-' + colorClass)   
    // document.body.classList.add(`bg-${colorClass}`)
    // <div className={`jumbotron mt-5 bg-${props.themeMode} color-${props.themeMode}`}>
  }





  return (
    <div className={`app-body bg-${props.themeMode}` }  >
      
      <NavbarMenu 
        brand ="Activate job"
        // homeMenu ="ajay"     
        colorModeFun={colorModeFun}
         themeMode={colorMode}
      />

        <TextForm 
          themeMode={colorMode}
          
          // themeMode="dark" can also use this 
        />
    </div>
  );
}

export default App;
