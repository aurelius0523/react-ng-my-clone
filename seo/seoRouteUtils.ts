
import * as AllRoutes from "../src/constants/routes";

/**
 * Import all routes defined inside routes.tsx and add their values to routeList array.
 */
export const getAllRoutes = (): string[] => {
    const routeList: Array<string> = ["/"];

    const getRouteValues = (...routeNameList: Array<any>) => {
        routeNameList.forEach(routeName => {
            Object.values(routeName).forEach((value: string) => {
                routeList.push(value);
            });
        })
    }

    getRouteValues(...Object.values(AllRoutes));

    return routeList;
}