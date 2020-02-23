import { render } from "prerender-xs";
import path from "path";

const routes = ['/', '/project', '/about']

export const prerender = async (targetOptions?, indexHtml?) => {
    try {
        const data: any = await render({
            staticDir: path.join(__dirname, '../dist'), routes, // where your SPA located
        });

        return data.find(x => x.route === "/").html;

    } catch (error) {
        console.error(error);
    }
}

prerender();
