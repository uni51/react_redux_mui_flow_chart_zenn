import React, { FC } from "react";
import "./App.css";
import Button from "./components/util/Button";
import Checkbox from "./components/util/Checkbox";
import TextField from "./components/util/TextField";

interface AppProps {}
const App: FC<AppProps> = () => {
  return (
    <div>
      flowchart builder !<Button>aaa</Button>
      <Checkbox />
      <TextField />
    </div>
  );
};

export default App;
