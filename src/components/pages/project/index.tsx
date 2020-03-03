import { ProjectRoutes, AppRoutes } from "Constants/routes";
import * as React from "react";
import { Route, Switch } from "react-router-dom";

const Project: React.FC = () => {
    const ProjectOverview = React.lazy(() => import(/* webpackChunkName: "ProjectOverview" */ "Components/pages/project/overview"));
    const ProjectList = React.lazy(() => import(/* webpackChunkName: "ProjectList" */ "Components/pages/project/list"));

    return (
        <div className="project-container">
            <Switch>
                <Route exact={true} path={AppRoutes.Project.toString()} component={ProjectOverview} />
                <Route exact={true} path={ProjectRoutes.LIST.toString()} component={ProjectList} />
            </Switch>
        </div>
    );
};

export default Project;