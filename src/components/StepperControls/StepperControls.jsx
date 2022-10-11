import { BackButton } from "../Buttons/ControlButtons/BackButton";
import { NextButton } from "../Buttons/ControlButtons/NextButton";

export const StepperControls = () => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      <BackButton />
      <NextButton />
    </div>
  );
};
