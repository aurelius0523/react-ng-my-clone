import { ssr } from "./puppet";
import fs from "fs";
import { AppRoutes } from "../src/constants/routes";

/**
 * This file will loop through all routes and pre-render their HTML files
 */

// Landing page
ssr(`http://localhost:8081/#/`)
    .then(html => {
        fs.writeFile("./ssr/output/index.html", html, () => { });
    })

// App Routes
for (let route in AppRoutes) {
    route = route.toLowerCase();
    ssr(`http://localhost:8081/#/${route}`)
        .then(html => {
            fs.writeFile(`./ssr/output/${route}.html`, html, () => { });
        })
}
