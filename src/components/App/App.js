import { useState } from "react";
import { searchReps } from "../../utils/api/api";
import ErrorPopUp from "../ErrorPopUp/ErrorPopUp";
import Form from "../Form/Form";
import Results from "../Results/Results";
import "./App.css";

function App() {
  const [results, setReults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [error, setError] = useState({});

  function search(searchWord) {
    setIsLoading(true);
    searchReps(searchWord)
      .then((res) => {
        setTotalCount(res.total_count);
        setReults(res.items.slice(0, 10));
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        setIsPopUpOpen(true);
      });
  }

  return (
    <div className="app">
      <Form search={search} isLoading={isLoading} />
      <Results totalCount={totalCount} results={results} />
      <ErrorPopUp
        isPopUpOpen={isPopUpOpen}
        setIsPopUpOpen={setIsPopUpOpen}
        error={error}
      />
    </div>
  );
}

export default App;
