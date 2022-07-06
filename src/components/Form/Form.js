import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <h1 className="form__title">Поиск на GitHub</h1>
      <form className="form__form">
        <label htmlFor="input" className="form__label">Ведите ключевое слово</label>
        <input className="form__input" type="text" required name="input" />
        <button className="form__submit">Поиск</button>
      </form>
    </div>
  );
};

export default Form;
