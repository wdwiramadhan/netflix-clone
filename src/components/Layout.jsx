import * as React from "react";
import { Header } from "./";

function Layout(props) {
  return (
    <div className="bg-stone-900 min-h-screen">
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
