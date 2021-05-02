const ToBuyList = (props) => {
  const { darkMode, toBuyList, deleteToBuy } = props

  return toBuyList.map((el) => {
    return (
      <li className={darkMode ? "list-group-item bg-dark text-white p-2 d-flex align-items-center justify-content-between" : "list-group-item bg-white text-dark p-2 d-flex align-items-center justify-content-between"} key={el}>
        <span className="ms-3">{el.text}</span>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => deleteToBuy(el)}>
          <span role="img" aria-hidden>✖️</span>{" "}ok</button>
      </li>
    )
  })
}
export default ToBuyList