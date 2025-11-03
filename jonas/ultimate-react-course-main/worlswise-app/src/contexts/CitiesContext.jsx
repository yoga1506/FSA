import { createContext, useState, useEffect, useContext } from "react";

const Base_url = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${Base_url}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Something wrong on fetching city api");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCities(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${Base_url}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("Something wrong on fetching city api");
    } finally {
      setIsLoading(false);
    }
  }
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <CitiesContext.Provider
      value={{
        cities,
        setCities,
        setIsLoading,
        isLoading,
        Base_url,
        currentCity,
        setCurrentCity,
        getCities,
        formatDate,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

export { useCities, CitiesProvider };
