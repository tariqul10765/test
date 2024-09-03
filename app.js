const express = require("express");
const serveIndex = require("serve-index");

const app = express();

app.use(
    '/ftp',
    express.static('public/ftp'),
    serveIndex('public/ftp', { icons: true })
)

app.get('/test', (req, res) => {
    res.send('<div style="width: 100%; height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center"><h1 style="color: blueviolet">API RUNNING...</h1><p style="color: lightcoral">Powered by Tariqul</p></div>')
});

app.listen(4000, () => console.log(`Server is running at port:${4000}`));