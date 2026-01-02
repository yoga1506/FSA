// import { createContext, useState, useEffect, useContext } from "react";

// const Base_url = "http://localhost:9000";

// const CitiesContext = createContext();

// function CitiesProvider({ children }) {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentCity, setCurrentCity] = useState({});
//   useEffect(() => {
//     async function fetchCities() {
//       try {
//         setIsLoading(true);
//         const res = await fetch(`${Base_url}/cities`);
//         const data = await res.json();
//         setCities(data);
//       } catch {
//         alert("Something wrong on fetching city api");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchCities();
//   }, []);

//   async function getCities(id) {
//     try {
//       setIsLoading(true);
//       const res = await fetch(`${Base_url}/cities/${id}`);
//       const data = await res.json();
//       setCurrentCity(data);
//     } catch {
//       alert("Something wrong on fetching city api");
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   async function createCity(newCity) {
//     try {
//       setIsLoading(true);
//       const res = await fetch(`${Base_url}/cities`, {
//         method: "POST",
//         body: JSON.stringify(newCity),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       setCities((cities) => [...cities, data]);
//       console.log(data);
//     } catch {
//       alert("Something wrong on fetching city api");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   async function deleteCity(id) {
//     try {
//       setIsLoading(true);
//       await fetch(`${Base_url}/cities/${id}`, {
//         method: "DELETE",
//       });
//       setCities((cities) => cities.filter((city) => city.id !== id));
//     } catch (error) {
//       console.log("Error on Deleting the city.");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   const formatDate = (date) =>
//     new Intl.DateTimeFormat("en", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     }).format(new Date(date));

//   return (
//     <CitiesContext.Provider
//       value={{
//         cities,
//         setCities,
//         setIsLoading,
//         isLoading,
//         Base_url,
//         currentCity,
//         setCurrentCity,
//         getCities,
//         formatDate,
//         createCity,
//         deleteCity,
//       }}
//     >
//       {children}
//     </CitiesContext.Provider>
//   );
// }

// function useCities() {
//   const context = useContext(CitiesContext);
//   return context;
// }

// export { useCities, CitiesProvider };

// same above code but using advance state-management

import { createContext, useEffect, useContext, useReducer } from "react";

const Base_url = "http://localhost:9000";

const CitiesContext = createContext();
const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loaded":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case "rejected":
      return { ...state, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loaded" });
      try {
        const res = await fetch(`${Base_url}/cities`);
        const data = await res.json();
        console.log(data);

        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "Something wrong on fetching city api",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCities(id) {
    dispatch({ type: "loaded" });

    try {
      const res = await fetch(`${Base_url}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "Something wrong on fetching city api",
      });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loaded" });

    try {
      const res = await fetch(`${Base_url}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
      console.log(data);
    } catch {
      dispatch({
        type: "rejected",
        payload: "Something wrong on fetching city api",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loaded" });

    try {
      await fetch(`${Base_url}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "Something wrong on fetching city api",
      });
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

        isLoading,
        Base_url,
        currentCity,

        getCities,
        formatDate,
        createCity,
        deleteCity,
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
