
import React from 'react';
import './App.css';
import  {useState} from 'react'
import NavbarMenu from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const[mode, setMode] = useState("light");
  const switchToggleFun = () => {
    // console.log("jdjabd")
    if(mode === "light"){
      setMode ("dark")
      // myStyle.color = 'white'
      // setMyStyle('')
      // document.body.style.backgroundColor = 'red'
    }
    else{
      setMode ("light")
      // document.body.style.backgroundColor = 'white'
    }

    
  }
  return (
    <div className={`app-body appBg-${mode}` }  >
    
      <NavbarMenu 
        brand ="Activate job"
        // homeMenu ="ajay"     
         switchToggle={switchToggleFun}
         themeMode={mode}
      />

        <TextForm 
          themeMode={mode}
          // themeMode="dark" can also use this 
        />
        
    </div>
  );
}

export default App;
