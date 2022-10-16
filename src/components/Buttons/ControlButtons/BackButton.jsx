export const BackButton = ({ handleClick, currentStep }) => {
  return (
    <button
      onClick={() => handleClick("back")}
      className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
        currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      Back
    </button>
  );
};
