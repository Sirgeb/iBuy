import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound, CreateAccount, Login, Home, Products, Product, Shop } from "../pages";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/create account" exact>
          <CreateAccount />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/shop/:id?" exact>
          <Shop />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
