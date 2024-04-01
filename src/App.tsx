import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

export default function App() {
    return (
        <Router>
            <Route path="/" component={Home}></Route>
            <Route path="/demo" component={Demo}></Route>
        </Router>
    );
}
