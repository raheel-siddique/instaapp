import React from "react";
import Navbar from "./features/navbar/Navbar";

import Chat from "./features/chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthFirebase from "./features/landingpage/auth/AuthFirebase";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={AuthFirebase} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
