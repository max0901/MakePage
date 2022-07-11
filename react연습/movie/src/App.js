import "./App.css";

import Funk from "./componenet/Funk";
import Comp from "./componenet/Comp";
function App() {
  return (
    <div className="constainer">
      Movie-Project
      <Funk initNumber={2} />
      <Comp initNumber={2} />
    </div>
  );
}
export default App;
