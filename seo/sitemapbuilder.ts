import * as fs from "fs";
import path from "path";
import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
import { getAllRoutes } from "./seoRouteUtils";

const sitemap = buildSitemap('https://react-ng-my-clone.netlify.com/', getAllRoutes());

fs.writeFileSync(path.resolve(__dirname, "../build/sitemap.xml"), sitemap.toString());