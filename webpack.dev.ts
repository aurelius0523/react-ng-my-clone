import merge from "webpack-merge";
import webpack from "webpack";
import commonConfig, { SRC_DIR } from "./webpack.common";
import apiMocker from "connect-api-mocker";

const devConfig: webpack.Configuration = merge.smart(commonConfig, {
    mode: "development",
    devServer: {
        before: (app, server, compiler) => {
            app.use(apiMocker('/api', `${SRC_DIR}/api/mocks`));
        }
    }
})

export default devConfig;