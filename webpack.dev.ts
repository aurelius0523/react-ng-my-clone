import merge from "webpack-merge";
import webpack from "webpack";
import commonConfig, { SRC_DIR } from "./webpack.common";
import apiMocker from "connect-api-mocker";
import { AppConfig } from "./configs";

const devConfig: webpack.Configuration = merge.smart(commonConfig, {
    mode: "development",
    devServer: {
        // This is used to set the url that will route request to mock api. You can invoke app.use() multiple times to add more folders
        before: (app, server, compiler) => {
            app.use(apiMocker(AppConfig.mockApiDomain.jsonPlaceholder, `${SRC_DIR}/apis/jsonplaceholder/mocks`));
        },
        historyApiFallback: true
    }
})

export default devConfig;