import PageHeader from "Components/common/PageHeader";
import { ProjectRoutes } from "Constants/routes";
import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./project-overview.scss";
import CSSModules from "react-css-modules";

const ProjectOverview: React.FC = () => {
    return (
        <div styleName="project-overview-container">
            <PageHeader title="Project Overview" />
            <Link to={ProjectRoutes.LIST.toString()}>
                <button>Project List</button>
            </Link>
        </div>
    );
};

export default CSSModules(ProjectOverview, styles);