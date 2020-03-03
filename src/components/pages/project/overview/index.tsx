import PageHeader from "Components/common/PageHeader";
import { ProjectRoutes } from "Constants/routes";
import * as React from "react";
import { Link } from "react-router-dom";

const Project: React.FC = () => {
    return (
        <div className="project-overview-container">
            <PageHeader title="Project Overview" />
            <Link to={ProjectRoutes.LIST.toString()}>
                <button>Project List</button>
            </Link>
        </div>
    );
};

export default Project;