import "./App.css";
import Func1 from "./Components/Func1";
import Layout from "./Components/Layout";
import PropTypesComp from "./Components/PropTypesComp";

function App() {
  return (
    <div className="App">
      <Layout>
        <Func1 />
      </Layout>
      <PropTypesComp ime="Leo" prezime="Božić" grad="Požega" godine={22} />
    </div>
  );
}

export default App;
