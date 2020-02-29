import express, { request } from "express";
import path from "path";

const app = express();
const PORT = 9000;

// Every time a request comes in requesting for a page (anything without extension e.g., .js or .css) we will return pre-rendered html instead
app.get('*', function (req, res) {
    if (req.url.includes("static")) {
        res.sendFile(path.resolve(__dirname, `../build/${req.url}`));
    } else {
        res.sendFile(path.resolve(__dirname, `../build/${req.url}/index.html`));
    }
});

app.listen(PORT, () => { console.log(`Express server running at port ${PORT}`) });