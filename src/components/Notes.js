import React, { useState, useEffect } from 'react'

const Notes = (props) => {
  const { darkMode, children } = props

  // Notes
  const [note, setNote] = useState(JSON.parse(localStorage.getItem('solenemhepTatiesNote')) || '')

  useEffect(() => {
    localStorage.setItem('solenemhepTatiesNote', JSON.stringify(note))
  }, [note])

  return (
    <React.Fragment>
      {children}
      <form>
        <textarea
          value={note}
          rows='20'
          onChange={(e) => setNote(e.target.value)}
          className={darkMode ? 'form-control border-myblack bg-dark text-white' : 'form-control border bg-white text-dark'}
        />
      </form>
    </React.Fragment>
  )

}
export default Notes