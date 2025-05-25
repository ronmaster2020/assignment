import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  return (
    <div className="h-full min-h-screen bg-gray-100">
      <Header>
        <Image />
      </Header>
    </div>
  );
}

export default App;
