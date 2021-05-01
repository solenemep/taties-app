const ToDoList = (props) => {
  const { darkMode, toDoList, deleteToDo, completeToDo } = props

  return toDoList.map((el) => {
    return (
      <div className={darkMode ? "border-bottom border-secondary p-2 d-flex align-items-center justify-content-between" : "border-bottom p-2 d-flex align-items-center justify-content-between"}>
        <span style={el.isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{el.text}</span>
        <div className="btn-group">
          {el.isCompleted ? (
            <button
              className="btn btn-light btn-sm"
              type="button"
              onClick={() => completeToDo(el)}
            >
              Rétablir</button>
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
      </div>
    )
  })
}
export default ToDoList