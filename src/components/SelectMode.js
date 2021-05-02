const SelectMode = (props) => {
  const { darkMode, mode, selectMode } = props
  return (
    <div className='mb-3 btn-group btn-group-lg col-12'>
      <button className={darkMode ? 'btn border-myblack btn-myblack text-white' : 'btn border btn-light text-dark'} type='button' id='button-todo' value='ToDo' onClick={selectMode} disabled={mode === 'ToDo'}>à faire</button>
      <button className={darkMode ? 'btn border-myblack btn-myblack text-white' : 'btn border btn-light text-dark'} type='button' id='button-tobuy' value='ToBuy' onClick={selectMode} disabled={mode === 'ToBuy'}>à acheter</button>
      <button className={darkMode ? 'btn border-myblack btn-myblack text-white' : 'btn border btn-light text-dark'} type='button' id='button-notes' value='Notes' onClick={selectMode} disabled={mode === 'Notes'}>notes</button>
    </div>
  )
}
export default SelectMode