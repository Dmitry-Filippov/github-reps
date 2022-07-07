import "./ErrorPopUp.css";

const ErrorPopUp = ({ error, isPopUpOpen, setIsPopUpOpen }) => {
  function handlePopUpClose(e) {
    if (e.target.className === "pop-up pop-up_open") {
      setIsPopUpOpen(false);
    }
  }

  return (
    <div
      className={`pop-up ${isPopUpOpen ? "pop-up_open" : ""}`}
      onClick={handlePopUpClose}
    >
      <div className="pop-up__wrapper">
        <p className="pop-up__text">Произошла ошибка:</p>
        <p className="pop-up__text pop-up__err">{error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPopUp;
