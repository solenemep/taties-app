const ToBuyList = (props) => {
  const { darkMode, toBuyList, deleteToBuy } = props

  return toBuyList.map((el) => {
    return (
      <div className={darkMode ? "border-bottom border-secondary p-2 d-flex align-items-center justify-content-between" : "border-bottom p-2 d-flex align-items-center justify-content-between"}>
        <span>{el.text}</span>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => deleteToBuy(el)}>
          <span role="img" aria-hidden>✖️</span>{" "}ok</button>
      </div >
    )
  })
}
export default ToBuyList