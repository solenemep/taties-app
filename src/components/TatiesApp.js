import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode";
import SelectMode from "./SelectMode";
import ToDo from "./ToDo";
import ToBuy from "./ToBuy";
import Notes from "./Notes";

const TatiesApp = () => {
  // DarkMode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("solenemepTatiesDarkMode")) || false
  );
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem("solenemepTatiesDarkMode", JSON.stringify(darkMode));
  });

  // Mode
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("solenemepTatiesMode")) || "ToDo"
  );
  const selectMode = (event) => {
    setMode(event.target.value);
  };
  useEffect(() => {
    localStorage.setItem("solenemepTatiesMode", JSON.stringify(mode), [mode]);
  });

  // Background
  const backgroundImage = darkMode
    ? "linear-gradient(90deg, rgba(145,98,177,1) 0%, rgba(255,167,167,1) 50%, rgba(255,213,155,1) 100%)"
    : "linear-gradient(90deg, rgba(145,98,177,1) 0%, rgba(255,167,167,1) 50%, rgba(255,213,155,1) 100%)";
  const style = {
    backgroundImage,
  };

  return (
    <main
      className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}
      style={style}
    >
      <div className="container min-vh-100 py-3">
        <div className="d-flex flex-row justify-content-between align-items-center mb-3">
          <DarkMode darkMode={darkMode} changeDarkMode={changeDarkMode} />
          <h1 className="m-0">
            TATIES
            <span role="img" aria-hidden>
              🥂
            </span>{" "}
            del Puente
          </h1>
        </div>

        <SelectMode darkMode={darkMode} mode={mode} selectMode={selectMode} />

        {mode === "ToDo" && (
          <ToDo darkMode={darkMode}>
            <h2 className="mb-3">
              Ma liste de tâches{" "}
              <span role="img" aria-hidden>
                ✏️
              </span>
            </h2>
          </ToDo>
        )}
        {mode === "ToBuy" && (
          <ToBuy darkMode={darkMode}>
            <h2 className="mb-3">
              Ma liste de courses{" "}
              <span role="img" aria-hidden>
                🍇
              </span>
            </h2>
          </ToBuy>
        )}
        {mode === "Notes" && (
          <Notes darkMode={darkMode}>
            <h2 className="mb-3">
              Mes notes{" "}
              <span role="img" aria-hidden>
                💭
              </span>
            </h2>
          </Notes>
        )}
      </div>
    </main>
  );
};
export default TatiesApp;
