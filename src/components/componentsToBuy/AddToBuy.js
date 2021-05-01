import React from "react"

const AddToBuy = (props) => {
  const { darkMode, toBuyList, addToBuy, setFilter } = props

  const populars = [
    { text: "bread", emoji: "🥖" },
    { text: "milk", emoji: "🥛" },
    { text: "pizza", emoji: "🍕" },
    { text: "salade", emoji: "🥬" },
    { text: "orange", emoji: "🍊" },
    { text: "rice", emoji: "🍚" },
    { text: "chocolate", emoji: "🍫" },
    { text: "cheese", emoji: "🧀" },
    { text: "wine", emoji: "🍷" },
    { text: "grappes", emoji: "🍇" }
  ]

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const newToBuyText = event.target.elements.toBuy.value
    if (toBuyList.some(el => el.text === newToBuyText)) {
      alert(`${newToBuyText} is already on the list`)
    } else {
      addToBuy(newToBuyText)
    }
    event.target.reset()
    setFilter('')
  }

  return (
    <React.Fragment>
      <form className="input-group" onSubmit={handleFormSubmit}>

        <label className={darkMode ? 'input-group-text border border-secondary bg-dark text-white' : 'input-group-text border bg-light text-dark'} htmlFor="toBuy">
          Ajouter un produit
        </label>
        <input className={darkMode ? 'form-control border border-secondary bg-dark text-white' : 'form-control border bg-white text-dark'} id="toBuy" required />

        <button type="submit" className={darkMode ? 'btn border border-secondary btn-dark text-white' : 'btn border btn-light text-dark'}>
          Ajouter
      </button>

      </form>

      <div className="m-3 d-flex flex-wrap">
        {populars.map((popular) => (
          <button
            key={popular.text}
            className={darkMode ? 'btn border border-secondary btn-dark text-white m-1' : 'btn border btn-light text-dark m-1'}
            onClick={() => addToBuy(popular.text)}
            disabled={toBuyList.some(el => el.text === popular.text)}
          >
            {popular.text}{" "}
            <span role="img" aria-hidden>
              {popular.emoji}
            </span>
          </button>
        ))}
      </div>
    </React.Fragment>
  )
}
export default AddToBuy