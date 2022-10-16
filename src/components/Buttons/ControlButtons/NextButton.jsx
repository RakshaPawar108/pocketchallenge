export const NextButton = ({ handleClick, currentStep, steps }) => {
  return (
    <button
      onClick={() => handleClick("next")}
      className={`bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`}
    >
      {currentStep === steps.length - 1 ? "Confirm" : "Next"}
    </button>
  );
};
