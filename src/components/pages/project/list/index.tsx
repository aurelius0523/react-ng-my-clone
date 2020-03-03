import PageHeader from "Components/common/PageHeader";
import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "Constants/routes";
import CSSModules from "react-css-modules";
import styles from "./project-list.scss";

const ProjectList: React.FC = () => {
    return (
        <div styleName="project-list-container">
            <PageHeader title="Project List" />
            <Link to={AppRoutes.Project.toString()}>
                <button>Project Overview</button>
            </Link>
        </div>
    );
};

export default CSSModules(ProjectList, styles);