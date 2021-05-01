import React, { useState, useEffect } from "react"
import SelectToDo from './componentsToDo/SelectToDo'
import ToDoList from './componentsToDo/ToDoList'
import AddToDo from './componentsToDo/AddToDo'
import { v4 as uuidv4 } from "uuid"

const ToDo = (props) => {
  const { darkMode } = props

  // ToDos
  const [toDoList, setToDoList] = useState(JSON.parse(localStorage.getItem('solenemhepTatiesToDo')) || [])

  const addToDo = (text) => {
    const newToDo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }
    setToDoList([...toDoList, newToDo])
  }
  const deleteToDo = (task) => {
    setToDoList(toDoList.filter((el) => el.id !== task.id))
  }
  const completeToDo = (task) => {
    setToDoList(
      toDoList.map((el) => {
        if (el.id === task.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted
          }
        }
        return el
      })
    )
  }
  useEffect(() => {
    localStorage.setItem('solenemhepTatiesToDo', JSON.stringify(toDoList))
  }, [toDoList])

  // Filter
  const [filter, setFilter] = useState("all")
  const filteredToDoList = toDoList.filter((el) => {
    if (filter === "completed") {
      return el.isCompleted
    }
    if (filter === "inprogress") {
      return !el.isCompleted
    }
    return true
  })

  return (
    <React.Fragment>
      <AddToDo
        darkMode={darkMode}
        toDoList={toDoList}
        addToDo={addToDo}
        setFilter={setFilter} />

      <SelectToDo
        darkMode={darkMode}
        filter={filter}
        setFilter={setFilter} />

      <div className={darkMode ? 'card shadow border border-secondary bg-dark' : 'card shadow border bg-white'}>
        <ToDoList
          darkMode={darkMode}
          toDoList={filteredToDoList}
          deleteToDo={deleteToDo}
          completeToDo={completeToDo} />
      </div>
    </React.Fragment>
  )

}
export default ToDo