const ToDoList = (props) => {
  const { darkMode, toDoList, deleteToDo, completeToDo } = props

  return toDoList.map((el) => {
    return (
      <div className={darkMode ? "border-bottom border-secondary p-2 d-flex align-items-center justify-content-between" : "border-bottom p-2 d-flex align-items-center justify-content-between"}>
        <span style={el.isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{el.text}</span>
        <div className="btn-group">
          {el.isCompleted ? (
            <button
              className="btn btn-dark btn-sm"
              type="button"
              onClick={() => completeToDo(el)}
            >
              Restore
            </button>
          ) : (
            <button
              className="btn btn-light btn-sm"
              type="button"
              onClick={() => completeToDo(el)}
            >
              Done
            </button>
          )}
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => deleteToDo(el)}
          >
            Delete
        </button>
        </div>
      </div>
    )
  })
}
export default ToDoList