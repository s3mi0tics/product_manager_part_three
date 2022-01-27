import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Detail from "./views/Detail";
import Edit from "./views/Edit";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path= "/products/:id/edit">
          <Edit/>
          </Route>
          <Route exact path= "/">
          <Main/>
          </Route>
          <Route exact path= "/products/:id">
          <Detail/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
