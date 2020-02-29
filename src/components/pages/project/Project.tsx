import * as React from "react";
import PageHeader from "Components/common/PageHeader";
import { Switch, Route, Link } from "react-router-dom";
import { AppRoutes, ProjectRoutes } from "Constants/routes";
import ProjectList from "./list/ProjectList";

const Project: React.FC = () => {
    return (
        <div className="Project-container">
            <PageHeader title="Project" />
            <Link to={ProjectRoutes.LIST.toString()}>
                <button>Project List</button>
            </Link>
            <Switch>
                <Route path={ProjectRoutes.LIST.toString()} component={ProjectList} />
            </Switch>
        </div>
    );
};

export default Project;