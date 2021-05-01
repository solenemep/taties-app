import React, { useState, useEffect } from 'react'
import DarkMode from './DarkMode'
import SelectMode from './SelectMode'
import ToDo from './ToDo'
import ToBuy from './ToBuy'
import Notes from './Notes'


const TatiesApp = () => {

  // DarkMode
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('solenemhepTatiesDarkMode')) || false)
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem("solenemhepTatiesDarkMode", JSON.stringify(darkMode))
  }
  )

  // Mode
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('solenemhepTatiesMode')) || 'ToDo')
  const selectMode = (event) => {
    setMode(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem('solenemhepTatiesMode', JSON.stringify(mode), [mode])
  }
  )

  // Background
  const backgroundImage = darkMode ? 'linear-gradient(to top, #30cfd0 0%, #330867 100%)' : 'linear-gradient(to top, rgb(255, 27, 27), rgb(255, 171, 96))'
  const style = {
    backgroundImage
  }

  return (
    <main className={darkMode ? 'bg-dark text-white' : 'bg-white text-dark'} style={style}>

      <div className='container min-vh-100 py-3'>

        <div className='d-flex flex-row justify-content-between align-items-center my-3'>
          <DarkMode darkMode={darkMode} changeDarkMode={changeDarkMode} />
          <p className='lead m-0'>TATIES de la playa del Puente</p>
          <SelectMode darkMode={darkMode} mode={mode} selectMode={selectMode} />
        </div>

        {mode === 'ToDo' && (<ToDo darkMode={darkMode} />)}
        {mode === 'ToBuy' && (<ToBuy darkMode={darkMode} />)}
        {mode === 'Notes' && (<Notes darkMode={darkMode} />)}

      </div>

    </main >
  );
}
export default TatiesApp