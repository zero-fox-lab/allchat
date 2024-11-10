import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./main";

const $root_el = document.getElementById("root");

if ($root_el) {
    const root = createRoot($root_el);
    root.render(<React.StrictMode><App /></React.StrictMode>);
} else {
    console.error("#root not found");
}