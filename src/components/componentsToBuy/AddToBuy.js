import React from "react";

const AddToBuy = (props) => {
  const { darkMode, toBuyList, addToBuy, setFilter } = props;

  const populars = [
    { text: "salade", emoji: "🥬" },
    { text: "café", emoji: "☕️" },
    { text: "oranges", emoji: "🍊" },
    { text: "chocolat", emoji: "🍫" },
    { text: "vin", emoji: "🍷" },
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newToBuyText = event.target.elements.toBuy.value;
    if (
      toBuyList.some(
        (el) =>
          el.text.trim().toLowerCase() === newToBuyText.trim().toLowerCase()
      )
    ) {
      alert(`${newToBuyText} is already on the list`);
    } else {
      addToBuy(newToBuyText);
    }
    event.target.reset();
    setFilter("");
  };

  return (
    <React.Fragment>
      <form className="input-group input-group-lg" onSubmit={handleFormSubmit}>
        <label
          className={
            darkMode
              ? "input-group-text border-myblack bg-myblack text-white"
              : "input-group-text border bg-light text-dark"
          }
          htmlFor="toBuy"
        >
          <span role="img" aria-hidden>
            ➕
          </span>
        </label>
        <input
          className={
            darkMode
              ? "form-control border-myblack bg-dark text-white"
              : "form-control border bg-white text-dark"
          }
          id="toBuy"
          aria-label="toBuy"
          name="toBuy"
          required
        />

        <button
          type="submit"
          className={
            darkMode
              ? "btn border-myblack btn-myblack text-white"
              : "btn border btn-light text-dark"
          }
        >
          ajouter
        </button>
      </form>

      <div className="m-3 d-flex flex-wrap">
        {populars.map((popular) => (
          <button
            key={popular.text}
            className={
              darkMode
                ? "btn border-myblack btn-myblack text-white m-1"
                : "btn border btn-light text-dark m-1"
            }
            onClick={() => addToBuy(popular.text)}
            disabled={toBuyList.some(
              (el) =>
                el.text.trim().toLowerCase() ===
                popular.text.trim().toLowerCase()
            )}
          >
            {popular.text}{" "}
            <span role="img" aria-hidden>
              {popular.emoji}
            </span>
          </button>
        ))}
      </div>
    </React.Fragment>
  );
};
export default AddToBuy;
