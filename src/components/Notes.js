const Notes = (props) => {
  const { darkMode } = props

  return (
    <p className={darkMode ? 'card border boder-secondary bg-dark' : 'card border bg-white'}>Notes</p>
  )

}
export default Notes