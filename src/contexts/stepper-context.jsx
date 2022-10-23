import { createContext, useContext, useState } from "react";

const StepperContext = createContext(null);

const StepperProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  return (
    <StepperContext.Provider
      value={{ userData, setUserData, finalData, setFinalData }}
    >
      {children}
    </StepperContext.Provider>
  );
};

const useStepper = () => useContext(StepperContext);

export { StepperProvider, useStepper };
