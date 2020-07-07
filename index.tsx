import * as React from "react";
import ReactDOM from "react-dom";
import useFetchGiphy from "./useFetchGiphy";

import "./style.css";
import "bootstrap/dist/css/bootstrap.css";

type Props = {};

const App = () => {
  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [result, loading, error] = useFetchGiphy(query);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setQuery(search);
  };

  return (
    <div className="w-100 h-100 bg-light">
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="gif">Search for a gif</label>
          <input
            className="form-control"
            type="text"
            name="gif"
            id="gif"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">
          Submit
        </button>
      </form>
      <div className="container">
        {loading ? (
          <p>Loading</p>
        ) : (
          result.map((item, index) => (
            <video
              src={item}
              key={`video_${item.substr(20, 10)}_${index}`}
              autoPlay
              loop
            />
          ))
        )}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
