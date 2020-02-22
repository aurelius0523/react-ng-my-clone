import merge from "webpack-merge";
import webpack from "webpack";
import commonConfig from "./webpack.common";

const devConfig: webpack.Configuration = merge.smart(commonConfig, {
    mode: "development"
})

export default devConfig;