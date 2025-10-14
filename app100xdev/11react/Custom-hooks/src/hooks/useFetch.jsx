import { useEffect, useState } from "react";

export function useFetch(url) {
  const [finalData, setFinaldata] = useState({});
  const [loading, setloading] = useState(true);

  async function getDetails() {
    setloading(true);
    const response = await fetch(url);
    const data = await response.json();
    setFinaldata(data);
    setloading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  // need to fetch the server url for the interval time mentioned

  useEffect(() => {
    const timer = setInterval(getDetails, 3 * 1000);
    return clearInterval(timer);
  }, []);

  return {
    finalData,
    loading,
  };
}
