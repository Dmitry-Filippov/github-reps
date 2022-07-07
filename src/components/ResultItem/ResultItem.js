import "./ResultItem.css"

const ResultItem = () => {
  return (
    <li className="result-item">
      <h3 className="result-item__name"><a href="#" target="blank">Name</a></h3>
      <p className="result-item__owner">Владелец: owner</p>
      <p className="result-item__lang">Язык разработки: C++</p>
    </li>
  );
}

export default ResultItem;