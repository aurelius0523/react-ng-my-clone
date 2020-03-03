import { JsonPlaceholderApi } from "Apis/jsonplaceholder/JsonPlaceholderApi";
import PageHeader from "Components/common/PageHeader";
import { AppRoutes } from "Constants/routes";
import * as React from "react";
import CssModules from 'react-css-modules';
import { Link, Route, Switch } from "react-router-dom";
import styles from "./app.scss";
import Loader from "Components/common/Loader";

const App: React.FC = () => {
    const About = React.lazy(() => import(/* webpackChunkName: "About" */ "Components/pages/about"));
    const Project = React.lazy(() => import(/* webpackChunkName: "Project" */ "Components/pages/project"));

    React.useEffect(() => {
        JsonPlaceholderApi.getTodoList().then(resp => {console.log("effect", resp)});
    }, []);

    return (
        <div styleName="app-container">
            <PageHeader title={"App"} />
            <RouteButtonContainer />
            <div className="routes">
                <React.Suspense fallback={() => <Loader />}>
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