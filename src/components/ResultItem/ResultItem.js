import "./ResultItem.css";

const ResultItem = ({ name, link, owner, lang }) => {
  return (
    <li className="result-item">
      <h3 className="result-item__name">
        <a href={link} target="blank">
          {name}
        </a>
      </h3>
      <p className="result-item__owner">Владелец: {owner}</p>
      <p className="result-item__lang">
        Язык разработки: {lang ? lang : "Не указан"}
      </p>
    </li>
  );
};

export default ResultItem;
