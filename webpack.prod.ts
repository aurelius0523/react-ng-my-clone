import webpack from "webpack";
import merge from "webpack-merge";
import commonConfig from "./webpack.common";
import ExtractCssChunksWebPackPlugin from "extract-css-chunks-webpack-plugin";

const prodConfig: webpack.Configuration = merge.smart(commonConfig, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: ExtractCssChunksWebPackPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[hash:base64:5]"
                            }
                        }
                    },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
})

export default prodConfig;