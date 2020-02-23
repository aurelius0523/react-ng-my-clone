import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebPackPlugin from "copy-webpack-plugin";
import HtmlWebPackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

export const SRC_DIR = path.resolve(__dirname, "src");
export const DIST_DIR = path.resolve(__dirname, "dist");

const commonConfig: webpack.Configuration = {
    entry: './src/index.tsx',
    output: {
        path: DIST_DIR,
        filename: 'app.bundle.[hash:5].js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
        alias: {
            Components: `${SRC_DIR}/components`,
            Constants: `${SRC_DIR}/constants`,
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
                ]
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
        new CopyWebPackPlugin([
            {
                from: "./src/assets/robots/robots.prod.txt",
                to: "robots.txt"
            }
        ]),
        new CleanWebpackPlugin()
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

export default commonConfig;