import React from "react"

const AddToDo = (props) => {
  const { darkMode, toDoList, addToDo, setFilter } = props

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newToDoText = event.target.elements.toDo.value
    if (toDoList.some(el => el.text === newToDoText)) {
      alert(`${newToDoText} is already on the list`)
    } else {
      addToDo(newToDoText)
    }
    event.target.reset()
    setFilter((filter) => (filter === "completed" ? "all" : filter))
  }

  return (
    <React.Fragment>
      <form className="input-group mb-3 input-group-lg" onSubmit={handleFormSubmit}>

        <label className={darkMode ? 'input-group-text border-myblack bg-myblack text-white' : 'input-group-text border bg-light text-dark'} htmlFor="toDo">
          <span role="img" aria-hidden>➕</span>
        </label>
        <input className={darkMode ? 'form-control border-myblack bg-dark text-white' : 'form-control border bg-white text-dark'} id="toDo" required />

        <button type="submit" className={darkMode ? 'btn border-myblack btn-myblack text-white' : 'btn border btn-light text-dark'}>
          ajouter
      </button>

      </form>
    </React.Fragment>
  )
}
export default AddToDo