import React, { useEffect, useState } from 'react'

export default function HookComponent() {
    // Hooks
   // useState
   
   const [txt, setTxt] = useState('---');
   const [toggle, setToggle] = useState(false);

   // useEffect (componentDidMount, componentDidUpdate, componentWillUnmount)
    
   useEffect(() => {                    // scritto così è di default
        console.log('Sono useEffect')   // componentDidMount 
        
        return () => {
            console.log('Allo smontaggio del componente')  
        }
        // Con il return aggiungo il componentWillUnmount
        
    }, [txt, toggle])  // l'array alla fine è la dipendenza per cui richiamarlo, dunque, al cambiare di ciò che gli inserisco
              // se la metto fa anche componentDidUpdate

  return (
    <>
        <div>HookComponent - {txt}</div>
        <button onClick={() => setTxt(txt + 'Change!!!')}>Change</button>
        { toggle && <p>Ciao a tutti</p> }
        <button onClick={() => setToggle('!Toggle')}>Change</button>
    </>
  )
}
