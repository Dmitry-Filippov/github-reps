import ResultItem from "../ResultItem/ResultItem";
import "./Results.css";

const Results = ({ totalCount, results }) => {
  if (results.length > 0) {
    return (
      <div className="results">
        <h2 className="results__title">Совпадения:</h2>
        <ul className="results__results-list">
          {results.map((item) => {
            return (
              <ResultItem
                key={item.id}
                name={item.name}
                link={item.html_url}
                owner={item.owner.login}
                lang={item.language}
              />
            );
          })}
        </ul>
        <p className="results__all">Всего репозиториев найдено: {totalCount}</p>
      </div>
    );
  } else {
    return (
      <div className="results">
        <h2 className="results__title">Совпадений нет, либо вы еще ничего не искали</h2>
      </div>
    );
  }
  
};

export default Results;
