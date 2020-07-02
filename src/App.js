import React from "react";
import "./App.css";
import CountFunction from "./components/CountFunction/CountFunction";
import CountClass from "./components/CountClass/CountClass";

function App() {
  return (
    <div className="app">
      <CountFunction />
      <CountClass />
    </div>
  );
}

export default App;
