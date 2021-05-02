const SelectToDo = (props) => {
  const { darkMode, filter, setFilter } = props

  return (
    <form className="input-group mb-3 input-group-lg">
      <label className={darkMode ? 'input-group-text border-myblack bg-myblack text-white' : 'input-group-text border bg-light text-dark'} htmlFor="select">
        <span role="img" aria-hidden>📌</span>
      </label>
      <select
        className={darkMode ? 'form-select border-myblack bg-dark text-white' : 'form-select border bg-white text-dark'}
        id="select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Toutes</option>
        <option value="completed">Finies</option>
        <option value="inprogress">En cours</option>
      </select>
    </form>
  )
}

export default SelectToDo