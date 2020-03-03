import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebPackPlugin from "copy-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import FaviconsWebPackPlugin from "favicons-webpack-plugin";
import path from "path";
import webpack from "webpack";

export const SRC_DIR = path.resolve(__dirname, "src");
export const DIST_DIR = path.resolve(__dirname, "build");

const commonConfig: webpack.Configuration = {
    entry: './src/index.tsx',
    output: {
        publicPath: "/",
        path: DIST_DIR,
        filename: 'static/js/app.bundle.[hash:5].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
        alias: {
            Components: `${SRC_DIR}/components`,
            Constants: `${SRC_DIR}/constants`,
            Apis: `${SRC_DIR}/apis`
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ],
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]___[hash:base64:5]"
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
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new FaviconsWebPackPlugin({
            logo: "./favicon.ico",
            publicPath: '/static',
            outputPath: '/static/assets'
        }),
        new CopyWebPackPlugin([
            {
                from: "./src/assets/robots/robots.prod.txt",
                to: "robots.txt"
            },
            {
                from: "./src/assets/google/google98b3d2999ea54121.html",
                to: "google98b3d2999ea54121.html"
            }
        ]),
        new CleanWebpackPlugin()
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

export default commonConfig;