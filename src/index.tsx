import * as React from "react";
import { render } from "react-dom";
import Users from "./mobx/components/Users";
import Coins from "./mobx/components/Coins";

const rootElement = document.getElementById("root");
render(
  <main>
    <section>
      <Users />
      <Coins />
    </section>
  </main>,
  rootElement
);
