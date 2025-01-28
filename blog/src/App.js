import React from "react";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Textarea from "./components/ui/Textarea";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <Card />
      <Button label="Click Me" />
      <Input />
      <Textarea />
    </div>
  );
}

export default App;
