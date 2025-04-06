import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "./SignInSide";
import SignUpSide from "./SignUpSide";
import Messagess from "./Messages";
import contactList from "./ContactList";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={SignInSide} />
        <Route exact path="/signup" component={SignUpSide} />
        <Route exact path="/message/:contactId" component={Messagess} />
        <Route exact path="/contactList" component={contactList} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
