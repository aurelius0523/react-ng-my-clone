import * as React from "react";
import styles from "./app.scss";
import CssModules from 'react-css-modules';
import { Switch, Route, Link } from "react-router-dom";
import PageHeader from "./components/common/PageHeader";
import { AppRoutes } from "./constants/routes";

const App: React.FC = () => {
    const About = React.lazy(() => import(/* webpackChunkName: "About" */ "./components/pages/About"));
    const Project = React.lazy(() => import(/* webpackChunkName: "Project" */ "./components/pages/Project"));

    return (
        <div styleName="app-container">
            <PageHeader title={"App"} />
            <RouteButtonContainer />
            <div className="routes">
                <React.Suspense fallback={() => <div>Loading...</div>}>
                    <Switch>
                        <Route path={AppRoutes.About} component={About} />
                        <Route path={AppRoutes.Project} component={Project} />
                    </Switch>
                </React.Suspense>
            </div>
        </div >
    )
}

const RouteButtonContainer: React.FC = () => {
    return (
        <nav>
            <Link to={AppRoutes.About}>
                <button>About</button>
            </Link>
            <Link to={AppRoutes.Project}>
                <button>Project</button>
            </Link>
        </nav>
    );
}

export default CssModules(App, styles);