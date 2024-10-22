// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { BuilderDevToolsPlugin } = require("@builder.io/dev-tools/webpack");
const isProduction = process.env.NODE_ENV === "production"; // Use strict equality

const stylesHandler = "style-loader";

const config = {
  entry: "./index.tsx", // Updated to .tsx for React + TypeScript
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Optional: Ensure a consistent output filename
  },
  devServer: {
    open: true,
    host: "localhost",
    hot: true, // Optional: Enable hot module replacement
    setupMiddlewares: (middlewares, devServer) => {
      // Custom middleware for logging requests
      middlewares.push((req, res, next) => {
        console.log("Request URL:", req.url);
        next();
      });

      // Return the updated middlewares
      return middlewares;
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Adjusted to use src folder
    }),
    new BuilderDevToolsPlugin(), // Corrected plugin declaration (no array needed)
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: /node_modules/, // Use a regular expression for exclusion
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      // Add your custom rules here
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"], // Removed the ellipsis
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};
