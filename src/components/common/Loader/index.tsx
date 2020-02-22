import * as React from "react";
import styles from "./loader.scss";
import CssModules from "react-css-modules";

interface Props {
    title: string;
}

const Loader: React.FC<Props> = (props) => {
    return (
        <div styleName="loader-container">
            {props.title}
        </div>
    );
}

export default CssModules(Loader, styles);