import { useState, useEffect } from "react";

const useFetchGiphy = (query: string): [any[], boolean, string] => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuery = async (query: string) => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=hRhuo4vRgOUmnrdNThtqFueak2lLHAtz&q=${query}&limit=25&offset=0&rating=g&lang=en`
        );
        const json = await response.json();
        setResult(json.data.map((item) => item.images.preview.mp4));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (query !== "") fetchQuery(query);
  }, [query]);

  return [result, loading, error];
};

export default useFetchGiphy;
