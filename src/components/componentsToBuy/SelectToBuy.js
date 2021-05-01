const SelectToBuy = (props) => {
  const { darkMode, filter, setFilter } = props

  return (
    <form className="input-group mb-3">
      <label className={darkMode ? 'input-group-text border border-secondary bg-dark text-white' : 'input-group-text border bg-light text-dark'} htmlFor="select">
        <span role="img" aria-label="search">🔎</span>
      </label>
      <input
        type="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Rechercher ..."
        aria-label="Rechercher"
        className={darkMode ? 'form-control border border-secondary bg-dark text-white' : 'form-control border bg-white text-dark'}
      />
    </form>
  )
}

export default SelectToBuy