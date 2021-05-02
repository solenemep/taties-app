const ToDoList = (props) => {
  const { darkMode, toDoList, deleteToDo, completeToDo } = props

  return toDoList.map((el) => {
    return (
      <li className={darkMode ? "list-group-item bg-dark text-white p-2 d-flex align-items-center justify-content-between" : "list-group-item bg-white text-dark p-2 d-flex align-items-center justify-content-between"} key={el}>
        <span className="ms-1" style={el.isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{el.text}</span>
        <div className="btn-group">
          {el.isCompleted ? (
            <button
              className="btn btn-light btn-sm"
              type="button"
              onClick={() => completeToDo(el)}
            >
              rétablir</button>
          ) : (
            <button
              className="btn btn-info btn-sm"
              type="button"
              onClick={() => completeToDo(el)}
            >
              <span role="img" aria-hidden>✔️</span></button>

          )}
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => deleteToDo(el)}
          >
            <span role="img" aria-hidden>✖️</span></button>
        </div>
      </li>
    )
  })
}
export default ToDoList