import "./App.css";

import Head from "./componenet/header";
import Main from "./componenet/container";
import Foot from "./componenet/footer";
import PageMove from "./page/local.js";
function App() {
  return (
    <div className="App">
      <Head />
      <Main />
      <Foot />
      <PageMove />;
    </div>
  );
}

export default App;
