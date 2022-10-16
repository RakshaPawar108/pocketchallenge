import "./App.css";
import { Stepper, StepperControls } from "./components";

function App() {
  return (
    <div className="App md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className="container horizontal mt-5">
        <Stepper />
      </div>
      <StepperControls />
    </div>
  );
}

export default App;
