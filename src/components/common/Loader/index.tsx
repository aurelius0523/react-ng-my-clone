import * as React from "react";
import styles from "./loader.scss";
import CssModules from "react-css-modules";

const Loader: React.FC = () => {
    return (
        <div styleName="loader-container">
            Loading
        </div>
    );
}

export default CssModules(Loader, styles);