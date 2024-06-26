import { FC } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import Header from "./components/App/Header";
import BuildPanel from "./components/App/BuildPane";
import Sidebar from "./components/App/Sidebar";

import "./App.css";

interface AppProps {}
const App: FC<AppProps> = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs>
        <Card>
          <CardContent>
            <BuildPanel />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs="auto">
        <Card>
          <CardContent>
            <Sidebar />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default App;
