import * as React from "react";
import styles from "./page-header.scss";
import CssModules from "react-css-modules";

interface Props {
    title: string;
}

const PageHeader: React.FC<Props> = (props) => {
    return (
        <div styleName="page-header-container">
            <h1>{props.title}</h1>
        </div>
    );
}

export default CssModules(PageHeader, styles);