import { useState } from "react";
import Loader from "../Loader/Loader";
import "./Form.css";

const Form = ({ search, isLoading }) => {
  const [inputValue, setInputValue] = useState("");

  function Input() {
    return (
      <input
        className={`form__input ${isLoading ? "form__input_mob-hidden" : ""}`}
        type="text"
        required
        name="input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    ); 
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    search(inputValue);
  }

  return (
    <div className="form">
      <h1 className="form__title">Поиск на GitHub</h1>
      <form className="form__form" onSubmit={handleFormSubmit}>
        <label htmlFor="input" className="form__label">
          Введите ключевое слово
        </label>
        {Input()}
        <button
          className={`form__submit ${
            isLoading ? "form__submit_mob-hidden" : ""
          }`}
        >
          Поиск
        </button>
        <div
          className={`form__loader ${isLoading ? "form__loader_active" : ""}`}
        >
          <Loader />
        </div>
      </form>
    </div>
  );
};

export default Form;
