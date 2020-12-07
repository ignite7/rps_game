// React
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import Home from "./pages/Home";

// Routes
export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
