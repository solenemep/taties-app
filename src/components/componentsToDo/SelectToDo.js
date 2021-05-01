const SelectToDo = (props) => {
  const { darkMode, filter, setFilter } = props

  return (
    <form className="input-group mb-3">
      <label className={darkMode ? 'input-group-text border border-secondary bg-dark text-white' : 'input-group-text border bg-light text-dark'} htmlFor="select">
        Filtrer les tâches
      </label>
      <select
        className={darkMode ? 'form-select border border-secondary bg-dark text-white' : 'form-select border bg-light text-dark'}
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