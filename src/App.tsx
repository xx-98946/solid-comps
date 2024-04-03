import { HashRouter, Route } from "@solidjs/router";
import { JSX, createEffect, lazy } from "solid-js";
import { Header } from "./comps";
const Home = lazy(() => import("./pages/Home/index"));
const Demo = lazy(() => import("./pages/Demo"));
const Blog = lazy(() => import("./pages/Blog"));
import { css } from "./utils/css";
import light from "./App.css?raw";
import dark from "./App.dark.css?raw";

function Layout(props: { children?: JSX.Element }) {
  return (
    <main class={css(light, dark)()}>
      <Header class="header" />
      <div class="content">{props.children}</div>
    </main>
  );
}

export default function App() {
  return (
    <HashRouter root={Layout}>
      <Route path="/" component={Home}></Route>
      <Route path="/demo" component={Demo}></Route>
      <Route path="/blog" component={Blog}></Route>
    </HashRouter>
  );
}
