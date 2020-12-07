// React
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Routes
export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/rps_game" component={Home} />
          <Redirect from="/" to="/rps_game" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
