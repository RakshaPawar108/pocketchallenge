import { useState } from "react";
import "./App.css";
import { Stepper, StepperControls } from "./components";
import { StepperProvider } from "./contexts/stepper-context";
import { AccountSetup, Complete, PersonalDetails } from "./pages";
import { steps } from "./utils";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <AccountSetup />;
      case 2:
        return <PersonalDetails />;
      case 3:
        return <Complete />;
      default:
    }
  };
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10">
          <StepperProvider>{displayStep(currentStep)}</StepperProvider>
        </div>
      </div>
      {currentStep !== steps.length && (
        <StepperControls
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
