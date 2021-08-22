import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Lamp0 from "./Components/Lamp0";
import { Container } from "react-bootstrap";
import Lamp0Descriptor from "./Components/Lamp0Descriptor";
import Lamp0_cin from "./Components/Lamp0_cin";
import Lamp1 from "./Components/Lamp1";
import Lamp1Descriptor from "./Components/Lamp1Descriptor";
import Lamp1_cin from "./Components/lamp1_cin";
import LampAll from "./Components/LampAll";
import LampAllDescriptor from "./Components/LampAllDescriptor";
import LampAll_cin from "./Components/LampAll_cin";
function App() {
  return (
    <div id="App">
      <Router>
        {/**<Sidebar />**/}
        <main main className="py-3">
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/lamp0" component={Lamp0} />
            <Route exact path="/lamp0/descriptor" component={Lamp0Descriptor} />
            <Route exact path="/lamp1/descriptor/cin" component={Lamp1_cin} />
            <Route exact path="/lamp0/descriptor/cin" component={Lamp0_cin} />
            <Route exact path="/lamp1" component={Lamp1} />
            <Route exact path="/lampAll" component={LampAll} />

            <Route
              exact
              path="/lamp_All/descriptor"
              component={LampAllDescriptor}
            />
            <Route
              exact
              path="/lamp_All/descriptor/cin"
              component={LampAll_cin}
            ></Route>
            <Route
              exact
              path="/lamp1/descriptor"
              component={Lamp1Descriptor}
            ></Route>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
