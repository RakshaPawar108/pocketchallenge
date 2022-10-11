import "./App.css";
import { Stepper, StepperControls } from "./components";

function App() {
  return (
    <div className="App">
      <div className="container vertical">
        <Stepper />
      </div>
      <StepperControls/>
    </div>
  );
}

export default App;
