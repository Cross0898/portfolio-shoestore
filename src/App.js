import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./routes";
import "./App.css";

function App() {
  const privateRoute = Navigation.getRoutes("private");
  return (
    <React.Fragment>
      <div>
        <BrowserRouter>
          {privateRoute.map((route) => {
            let Component = route.component;
            return (
              <Route path={route.path} component={Component}>
                <Component />
              </Route>
            );
          })}
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
