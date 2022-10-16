import { BackButton } from "../Buttons/ControlButtons/BackButton";
import { NextButton } from "../Buttons/ControlButtons/NextButton";

export const StepperControls = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <BackButton handleClick={handleClick} currentStep={currentStep} />
      <NextButton
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
};
