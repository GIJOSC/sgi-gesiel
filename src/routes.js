import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Login  from "./pages/Login";
import  Companies  from "./pages/Companies"
import  Map  from "./pages/Map";
import  Products  from "./pages/Products";

const Routes = () => (
  <BrowserRouter>
    
    <Switch>
      <Route path="/mapa" component={Map}  />
      <Route path="/empresas" component={Companies}  />
      <Route path="/produtos" component={Products}  />
      <Route path="/" component={Login} />
    </Switch>

  </BrowserRouter>
);

export default Routes;