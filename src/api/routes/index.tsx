import * as React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import Route from "../route";
import App from "../../main";

const cached_pages = new Map<string, string>()
const cache_path_list = [ "/" ];

for (const path of cache_path_list) {
    cached_pages.set(path, render(<Router ssrPath={path}><App /></Router>))
}

export default Route.GET("*", async (req, reply) =>
    reply.type("text/html").send(cached_pages.get(req.url) || render(
        <Router ssrPath={req.url}>
            <App />
        </Router>)));

function render(jsx: JSX.Element): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>allchat</title>
</head>
<body>
    ${renderToString(jsx)}
</body>
</html>`;
}

