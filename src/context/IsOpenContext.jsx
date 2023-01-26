import { createContext, useState } from "react";

const IsOpenContext = createContext();

function IsOpenContextProvider({ children }) {
  const [burger, setBurger] = useState(false);

  function handleBurger() {
    setBurger(!burger);
  }

  return (
    <IsOpenContext.Provider value={{ burger, handleBurger, setBurger }}>
      {children}
    </IsOpenContext.Provider>
  );
}

export { IsOpenContextProvider, IsOpenContext };
