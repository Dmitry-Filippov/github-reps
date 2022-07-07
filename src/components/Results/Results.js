import ResultItem from "../ResultItem/ResultItem";
import "./Results.css";

const Results = () => {
  return (
    <div className="results">
      <h2 className="results__title">Совпадения:</h2>
      <ul className="results__results-list">
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </ul>
      <p className="results__all">Всего репозиториев найдено найдено: 4598760</p>
    </div>
  );
};

export default Results;
