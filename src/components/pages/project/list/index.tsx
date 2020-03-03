import PageHeader from "Components/common/PageHeader";
import * as React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "Constants/routes";

const ProjectList: React.FC = () => {
    return (
        <div className="project-list-container">
            <PageHeader title="Project List" />
            <Link to={AppRoutes.Project.toString()}>
                <button>Project Overview</button>
            </Link>
        </div>
    );
};

export default ProjectList;