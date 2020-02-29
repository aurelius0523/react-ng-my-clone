import { render } from "prerender-xs";
import path from "path";
import { getAllRoutes } from "./seoRouteUtils";

const routes = getAllRoutes();

export const prerender = async (targetOptions?, indexHtml?) => {
    try {
        const data: any = await render({
            staticDir: path.join(__dirname, '../build'), routes, // where your SPA located
        });

        return data.find(x => x.route === "/").html;

    } catch (error) {
        console.error(error);
    }
}

prerender();
