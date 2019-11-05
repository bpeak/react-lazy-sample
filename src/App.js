import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// import LoginPage from "./LoginPage";
// import TestPage from "./TestPage";

const LoginPage = React.lazy(() => import("./LoginPage"));
const TestPage = React.lazy(() => import("./TestPage"));

function App() {
  return (
    <BrowserRouter>
      <div>Weclome to code spliting class with lazy</div>
      <Link to="/login">login</Link>
      <Link to="/test">test</Link>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/test" component={TestPage} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
